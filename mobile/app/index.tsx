import { View } from 'react-native';
import { useState, useEffect } from 'react';
import { router } from 'expo-router';
import SplashScreen from '@/components/SplashScreen';

export default function Index() {
  const [showWelcome, setShowWelcome] = useState(true);

  if (showWelcome) {
    return (
      <SplashScreen 
        onFinish={() => {
          setShowWelcome(false);
          // Navigate to your main screen
          router.replace('/(tabs)'); // or wherever your main app is
        }} 
      />
    );
  }

  // This will never show because we navigate away
  return <View />;
}