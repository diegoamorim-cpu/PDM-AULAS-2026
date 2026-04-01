import { View, Text, StyleSheet } from 'react-native';

export default function DespesaSumario({ despesas, periodo }: any) {
  const somaDespesas = despesas.reduce((acumulador: number, despesa: any) => {
    return acumulador + despesa.valor;
  }, 0);

  return (
    <View style={styles.container}>
      <Text style={styles.periodo}>{periodo}</Text>
      <Text style={styles.soma}>R$ {somaDespesas.toFixed(2)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 16, backgroundColor: '#D8BFD8', borderRadius: 8, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 },
  periodo: { fontSize: 14, color: '#4B0082' },
  soma: { fontSize: 18, fontWeight: 'bold', color: '#4B0082' },
});