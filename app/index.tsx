import { Text, View } from '@/components/TailwindComponents';
import { Redirect } from 'expo-router';

export default function Index() {
  return <Redirect href='/(home)/(tabs)' />;
  return (
    <View className='flex-1 justify-center items-center'>
      <Text>Edit app/index.tsx to edit this screen.</Text>
    </View>
  );
}
