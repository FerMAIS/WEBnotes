// App.jsx
import React, { useState, useEffect } from 'react';
import NoteList from './components/NoteList.jsx';
import NoteEditor from './components/NoteEditor.jsx';
import './style/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [notes, setNotes] = useState([]);
  const [isLoadedFromStorage, setIsLoadedFromStorage] = useState(false);

  useEffect(() => {
    try {
      const savedNotes = JSON.parse(localStorage.getItem('notes'));

      if (savedNotes) {
        setNotes(savedNotes);
        setIsLoadedFromStorage(true); // Set the flag to true when notes are loaded
        console.log("Notas cargadas desde Local Storage: ", savedNotes);
      }
    } catch (error) {
      console.error("Error al cargar notas:", error);
    }
  }, []);

  return (
    <div className="App">
      <div className="container m-5 bg-secondary">
        <h1>Aplicación de Notas</h1>
        <NoteEditor notes={notes} setNotes={setNotes} isLoadedFromStorage={isLoadedFromStorage} />
        <NoteList notes={notes} setNotes={setNotes} isLoadedFromStorage={isLoadedFromStorage} />
      </div>
    </div>
  );
}

export default App;
