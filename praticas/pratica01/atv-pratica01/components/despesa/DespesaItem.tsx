import { Pressable, View, Text, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

function formatarData(data: Date) {
  return `${data.getDate().toString().padStart(2, '0')}/${(data.getMonth() + 1).toString().padStart(2, '0')}/${data.getFullYear()}`;
}

export default function DespesaItem({ id, descricao, valor, data }: any) {
  const router = useRouter();

  function despesaPressHandler() {
    router.push({ pathname: '/GerenciarDespesa', params: { id } });
  }

  return (
    <Pressable onPress={despesaPressHandler} style={({ pressed }) => pressed && styles.pressed}>
      <View style={styles.item}>
        <View>
          <Text style={styles.descricao}>{descricao}</Text>
          <Text style={styles.data}>{formatarData(data)}</Text>
        </View>
        <View style={styles.valorContainer}>
          <Text style={styles.valor}>R$ {valor.toFixed(2)}</Text>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  pressed: { opacity: 0.7 },
  item: { padding: 12, marginVertical: 8, backgroundColor: '#3b82f6', flexDirection: 'row', justifyContent: 'space-between', borderRadius: 8, elevation: 3 },
  descricao: { fontSize: 16, marginBottom: 4, fontWeight: 'bold', color: 'white' },
  data: { fontSize: 14, color: '#e2e8f0' },
  valorContainer: { paddingHorizontal: 12, paddingVertical: 4, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center', borderRadius: 4, minWidth: 80 },
  valor: { color: '#3b82f6', fontWeight: 'bold' },
});