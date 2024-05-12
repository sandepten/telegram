import { AntDesign, Entypo } from '@expo/vector-icons';
import { Tabs } from 'expo-router';

export default function TabsNavigator() {
  return (
    <Tabs>
      <Tabs.Screen name='index' options={{ title: 'Chats', tabBarIcon: ({ size, color }) => <Entypo name='chat' size={size} color={color} /> }} />
      <Tabs.Screen
        name='profile'
        options={{ title: 'Profile', tabBarIcon: ({ size, color }) => <AntDesign name='user' size={size} color={color} /> }}
      />
    </Tabs>
  );
}
