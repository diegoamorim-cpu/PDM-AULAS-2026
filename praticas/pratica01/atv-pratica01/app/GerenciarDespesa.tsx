import { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Platform } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { useRouter } from 'expo-router';

export default function GerenciarDespesa() {
  const router = useRouter();

  const [descricao, setDescricao] = useState('');
  const [valor, setValor] = useState('');
  const [data, setData] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);

  function onChangeDate(event: any, selectedDate?: Date) {
    const currentDate = selectedDate || data;
    setShowDatePicker(Platform.OS === 'ios');
    setData(currentDate);
  }

  function salvarHandler() {
    console.log({ descricao, valor: parseFloat(valor), data });
    router.back();
  }

  return (
    <View style={styles.container}>
      <Text style={styles.headerTitle}>Configurar Despesa</Text>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Descrição</Text>
        <TextInput
          style={styles.input}
          onChangeText={setDescricao}
          value={descricao}
          placeholder="O que você comprou?"
          placeholderTextColor="#94a3b8"
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Valor (R$)</Text>
        <TextInput
          style={styles.input}
          onChangeText={setValor}
          value={valor}
          keyboardType="decimal-pad"
          placeholder="0.00"
          placeholderTextColor="#94a3b8"
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Data da Despesa</Text>
        {Platform.OS === 'android' && (
          <Button title="Escolher Data" onPress={() => setShowDatePicker(true)} />
        )}
        {(showDatePicker || Platform.OS === 'ios') && (
          <DateTimePicker
            value={data}
            mode="date"
            display="default"
            onChange={onChangeDate}
          />
        )}
        <Text style={styles.dateDisplay}>
          Selecionado: {data.toLocaleDateString('pt-BR')}
        </Text>
      </View>

      <View style={styles.buttonContainer}>
        <Button title="Cancelar" color="#f31282" onPress={() => router.back()} />
        <Button title="Confirmar" onPress={salvarHandler} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 24, backgroundColor: '#1e293b' },
  headerTitle: { fontSize: 24, fontWeight: 'bold', color: 'white', textAlign: 'center', marginBottom: 24 },
  inputContainer: { marginVertical: 12 },
  label: { fontSize: 14, color: '#94a3b8', marginBottom: 6 },
  input: { backgroundColor: '#334155', color: 'white', padding: 12, borderRadius: 8, fontSize: 16 },
  dateDisplay: { color: 'white', marginTop: 8, textAlign: 'center' },
  buttonContainer: { flexDirection: 'row', justifyContent: 'space-around', marginTop: 40, borderTopWidth: 1, borderTopColor: '#334155', paddingTop: 20 },
});