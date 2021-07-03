import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

import {
  Title,
  NoteInput,
  NoteContainer,
  Note,
  Controls,
  ControlButton,
  AddNoteButton,
  ClearAllButton,
  ButtonContainer
} from "./Components";

/* Key to identify notes in local storage: */
const APP_STORAGE_KEY = "APP_NOTES";

/**
 * Note-taking app code:
 */
export default function App() {
  /* Define state: */
  const [notes, setNotes] = useState([]);
  const [noteInputField, editNoteInputField] = useState("");

  /* Define effects for saving for persisting notes: */
  useEffect(() => {
    const existingNotes = JSON.parse(localStorage.getItem(APP_STORAGE_KEY));
    setNotes(existingNotes || []);
  }, []);

  useEffect(
    () => {
      localStorage.setItem(APP_STORAGE_KEY, JSON.stringify(notes));
    },
    [notes]
  );

  /* Define action handlers: */
  function editNoteInput(value) {
    editNoteInputField(value);
  }

  function handleKeypress(event) {
    if (event.keyCode === 13) {
      event.preventDefault();
      addNewNote();
      editNoteInput("");
    }
  }

  function addNewNote() {
    if (noteInputField) {
      setNotes([noteInputField, ...notes]);
      editNoteInput("");
    }
  }

  function editNote(index) {
    const noteContent = notes[index];
    editNoteInput(noteContent);
    removeNote(index);
  }

  function removeNote(index) {
    setNotes(
      notes.filter((n, i) => {
        return i !== index;
      })
    );
  }

  function clearAllNotes() {
    setNotes([]);
  }

  /* Render app: */
  return (
    <div>
      <Title> Recall! (To Do List) 🤣</Title>
      <NoteInput
        value={noteInputField}
        onKeyDown={handleKeypress}
        onChange={event => editNoteInput(event.target.value)}
        placeholder="Start typing... 🤹‍♂️"
      />
      <ButtonContainer>
        <AddNoteButton onClick={addNewNote}>✨ Add Note ✨</AddNoteButton>
        <ClearAllButton onClick={clearAllNotes}>Clear All! 💣</ClearAllButton>
      </ButtonContainer>
      {displayNotes()}
    </div>
  );

  function displayNotes() {
    return notes.map(function(note, index) {
      return (
        <NoteContainer key={note.slice(0, 15) + index}>
          <Note>{note}</Note>
          <Controls>
            <ControlButton onClick={() => editNote(index)}>📝</ControlButton>
            <ControlButton onClick={() => removeNote(index)}>🙅‍♂️</ControlButton>
          </Controls>
        </NoteContainer>
      );
    });
  }
}
