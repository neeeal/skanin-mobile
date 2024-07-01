import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';
import { Redirect, Stack } from 'expo-router';
import { Text, Image } from "react-native";
import { useSession } from '../../ctx';
import { Iconify } from 'react-native-iconify';
export default function AppLayout() {
  const { session, isLoading } = useSession();

  // You can keep the splash screen open, or render a loading screen like we do here.
  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  // Only require authentication within the (app) group's layout as users
  // need to be able to access the (auth) group and sign in again.
  if (!session) {
    // On web, static rendering will stop here as the user is not authenticated
    // in the headless Node process that the pages are rendered in.
    return <Redirect href="/landing" />;
  }


    return <Tabs 
      screenOptions={{ 
      tabBarActiveTintColor: 'green',
      tabBarItemStyle: {
        // padding:10,
      },
      tabBarInactiveTintColor: "#086608",
      tabBarActiveBackgroundColor: 'white',
      tabBarStyle:{
        backgroundColor: '#049B04',
        borderRadius:16
      }, 
      tabBarShowLabel: false,
    }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          headerShown: false,
          tabBarIcon: ({ color }) => <Iconify icon="ic:baseline-home" size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="scan"
        options={{
          title: 'Scan',
          headerShown: false,
          tabBarIcon: ({ color }) => <Iconify icon="mingcute:scan-fill" size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          headerShown: false,
          tabBarIcon: ({ color }) => <Iconify icon="material-symbols:person" size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="history"
        options={{
          title: 'History',
          headerShown: false,
          href: null,
          tabBarIcon: ({ color }) => <Iconify icon="mdi:heart" size={24} color={color} />,
        }}
      />
    </Tabs>
}
