import { Tabs, useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import IconButton from '../../components/IconButton';

export default function TabsLayout() {
  const router = useRouter();

  return (
    <Tabs
      screenOptions={{
        headerStyle: { backgroundColor: '#3b82f6' },
        headerTintColor: 'white',
        tabBarStyle: { backgroundColor: '#3b82f6' },
        tabBarActiveTintColor: 'white',
        tabBarInactiveTintColor: '#cbd5e1',
      }}
    >
      <Tabs.Screen
        name="DespesaRecentes"
        options={{
          title: 'Despesas Recentes',
          tabBarLabel: 'Recentes',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="time" size={size} color={color} />
          ),
          headerRight: ({ tintColor }) => (
            <IconButton
              icon="add"
              size={24}
              color={tintColor}
              onPress={() => router.push('/GerenciarDespesa')}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="TodasDespesas"
        options={{
          title: 'Todas as Despesas',
          tabBarLabel: 'Todas',
          tabBarIcon: ({ color, size }) => (
             <Ionicons name="list" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}