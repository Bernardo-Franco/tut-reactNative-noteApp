import { FlatList, Text, View } from 'react-native';
import NoteItem from './NoteItem';

const NoteList = ({ notes }) => {
  return (
    <FlatList
      data={notes}
      key={(i) => i.id}
      renderItem={({ item }) => <NoteItem note={item} />}
    />
  );
};
export default NoteList;
