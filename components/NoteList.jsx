import { FlatList } from 'react-native';
import NoteItem from './NoteItem';

const NoteList = ({ notes, onDelete, onEdit }) => {
  return (
    <FlatList
      data={notes}
      keyExtractor={(i) => i.$id}
      renderItem={({ item }) => (
        <NoteItem note={item} onDelete={onDelete} onEdit={onEdit} />
      )}
    />
  );
};
export default NoteList;
