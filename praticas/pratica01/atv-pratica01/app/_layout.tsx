import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen 
        name="GerenciarDespesa" 
        options={{ 
          presentation: 'modal', // Faz a tela abrir de baixo para cima
          title: 'Gerenciar Despesa'
        }} 
      />
    </Stack>
  );
}