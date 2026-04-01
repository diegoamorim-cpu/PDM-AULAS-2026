import { StyleSheet, View } from 'react-native';
import DespesaSaida from '../../components/despesa/DespesaSaida';

const DUMMY_DESPESAS = [
  { id: 'e1', descricao: 'Tênis', valor: 250.00, data: new Date() },
  { id: 'e2', descricao: 'Supermercado', valor: 180.50, data: new Date(new Date().setDate(new Date().getDate() - 3)) },
  { id: 'e3', descricao: 'Livro', valor: 45.00, data: new Date(new Date().setDate(new Date().getDate() - 10)) },
];

export default function TodasDespesas() {
  return (
    <View style={styles.container}>
      <DespesaSaida despesas={DUMMY_DESPESAS} periodo="Total" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
});