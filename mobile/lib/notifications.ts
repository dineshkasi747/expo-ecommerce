import * as Notifications from "expo-notifications";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldShowBanner: true, // ✅ REQUIRED
    shouldShowList: true,   // ✅ REQUIRED
    shouldPlaySound: true,
    shouldSetBadge: false,
  }),
});