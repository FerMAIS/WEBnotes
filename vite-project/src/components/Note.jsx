import React from 'react';
import '../style/Note.css';

function Note ({ note, onDelete }){
  return (
    <div class="nota m-3 p-3 bg-warning">
      <h3>{note.title}</h3>
      <p>{note.content}</p>
      <button type="button" class="btn btn-danger" onClick={() => onDelete(note.id)}>Eliminar</button>
    </div>
  );
};

export default Note;
