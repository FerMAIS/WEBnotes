// NoteEditor.jsx
import React from 'react';
import '../style/NoteEditor.css';

const NoteEditor = ({ notes, setNotes }) => {
  const [id, setId] = React.useState(1);
  const [title, setTitle] = React.useState('');
  const [content, setContent] = React.useState('');

  const saveNote = () => {
    const trimmedTitle = title.trim();
    const trimmedContent = content.trim();

    const newNote = {
      id: id,
      title: title,
      content: content,
    };

    setNotes((prevNotes) => [...prevNotes, newNote]);
    setId((prevId) => prevId + 1);

    setTitle('');
    setContent('');
  };

  return (
    <div class="container bg-info p-2">
      <input
        type="text"
        placeholder="Título"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <br />
      <textarea
        placeholder="Contenido de la nota"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      ></textarea>
      <br />
      <div class="container">
        <button type="button" className="btn btn-primary" onClick={saveNote}>
          Guardar
        </button>
      </div>
    </div>
  );
};

export default NoteEditor;
