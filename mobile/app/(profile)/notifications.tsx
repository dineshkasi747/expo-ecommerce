import SafeScreen from "@/components/SafeScreen";
import { useApi } from "@/lib/api";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { useEffect, useState } from "react";
import {
  FlatList,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

interface Notification {
  _id: string;
  title: string;
  body: string;
  data?: {
    orderId?: string;
  };
  isRead: boolean;
  createdAt: string;
}

export default function NotificationsScreen() {
  const api = useApi();
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchNotifications();
  }, []);

  async function fetchNotifications() {
    try {
      const res = await api.get("/users/notifications");
      setNotifications(res.data.notifications);
    } catch (err) {
      console.log("Failed to fetch notifications");
    } finally {
      setLoading(false);
    }
  }

  async function handlePress(notification: Notification) {
    // mark as read
    await api.patch(`/users/notifications/${notification._id}/read`);

    if (notification.data?.orderId) {
      router.push(`/orders/${notification.data.orderId}` as any);
    }
  }

  return (
    <SafeScreen>
      <FlatList
        data={notifications}
        keyExtractor={(item) => item._id}
        contentContainerStyle={{ padding: 16 }}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={
          !loading ? (
            <View className="items-center mt-20">
              <Ionicons
                name="notifications-off-outline"
                size={48}
                color="#666"
              />
              <Text className="text-text-secondary mt-4">
                No notifications till date
              </Text>
            </View>
          ) : null
        }
        renderItem={({ item }) => (
          <TouchableOpacity
            className={`bg-surface p-4 rounded-2xl mb-3 ${
              !item.isRead ? "border border-primary/30" : ""
            }`}
            activeOpacity={0.7}
            onPress={() => handlePress(item)}
          >
            <View className="flex-row">
              <Ionicons
                name="notifications-outline"
                size={22}
                color="#fff"
              />
              <View className="ml-3 flex-1">
                <Text className="text-text-primary font-bold">
                  {item.title}
                </Text>
                <Text className="text-text-secondary text-sm mt-1">
                  {item.body}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
    </SafeScreen>
  );
}