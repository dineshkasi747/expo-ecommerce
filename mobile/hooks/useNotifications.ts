import { useEffect } from "react";
import * as Notifications from "expo-notifications";
import * as Device from "expo-device";
import { Platform } from "react-native";
import { useApi } from "@/lib/api";

export default function useNotifications() {
  const api = useApi();

  useEffect(() => {
    registerForPushNotifications();
  }, []);

  async function registerForPushNotifications() {
    try {
      if (!Device.isDevice) return;

      const { status } =
        await Notifications.requestPermissionsAsync();

      if (status !== "granted") return;

      const tokenResponse =
        await Notifications.getExpoPushTokenAsync();

      const token = tokenResponse.data;

      // send token to backend
      await api.post("/users/push-token", {
        expoPushToken: token,
      });

      if (Platform.OS === "android") {
        await Notifications.setNotificationChannelAsync(
          "default",
          {
            name: "default",
            importance:
              Notifications.AndroidImportance.MAX,
          }
        );
      }
    } catch (error) {
      console.log("Notification error:", error);
    }
  }
}
