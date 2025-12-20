import { Expo } from "expo-server-sdk";

const expo = new Expo();

export async function sendPushNotification(expoPushToken, title, body, data = {}) {
  if (!Expo.isExpoPushToken(expoPushToken)) {
    console.error("Invalid Expo push token:", expoPushToken);
    return;
  }

  const message = {
    to: expoPushToken,
    sound: "default",
    title,
    body,
    data, // extra payload (orderId etc.)
  };

  try {
    await expo.sendPushNotificationsAsync([message]);
  } catch (error) {
    console.error("Error sending push notification:", error);
  }
}
