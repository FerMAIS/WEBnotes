// NoteList.jsx
import React from 'react';
import Note from './Note.jsx';
import '../style/NoteList.css';

function NoteList({ notes, setNotes, isLoadedFromStorage }) {
  const [searchTerm, setSearchTerm] = React.useState('');

  React.useEffect(() => {
    if (isLoadedFromStorage) {
      const storedNotes = JSON.parse(localStorage.getItem('notes')) || [];
      setNotes(storedNotes);
    }
  }, [isLoadedFromStorage, setNotes]);

  const deleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  React.useEffect(() => {
    if (isLoadedFromStorage) {
      localStorage.setItem('notes', JSON.stringify(notes));
      console.log("Notas guardadas en Local Storage: ", notes);
    }
  }, [notes, isLoadedFromStorage]);

  const filteredNotes = notes.filter(
    (note) =>
      note.title.includes(searchTerm) ||
      note.content.includes(searchTerm)
  );

  return (
    <div className="container m-3 p-5">
      <h2>Lista de Notas</h2>
      <input
        type="text"
        placeholder="Buscar notas..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      {filteredNotes.map((note) => (
        <Note key={note.id} note={note} onDelete={deleteNote} />
      ))}
    </div>
  );
}

export default NoteList;
