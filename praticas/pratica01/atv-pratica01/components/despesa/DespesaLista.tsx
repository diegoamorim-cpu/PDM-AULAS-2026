import { FlatList } from 'react-native';
import DespesaItem from './DespesaItem';

function renderDespesaItem(itemData: any) {
  return <DespesaItem {...itemData.item} />;
}

export default function DespesaLista({ despesas }: any) {
  return (
    <FlatList
      data={despesas}
      keyExtractor={(item) => item.id}
      renderItem={renderDespesaItem}
    />
  );
}