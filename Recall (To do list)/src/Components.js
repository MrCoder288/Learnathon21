import glamorous from "glamorous";

/**
 * Color values for your app:
 */
const DARK_COLOR = "rgb(34,34,34)";
const WARNING_COLOR = "rgb(255, 86, 86)";
const NOTE_BACKGROUND_COLOR = "rgb(254,247,214)";
const ADD_NOTE_BUTTON_TEXT_COLOR = "rgb(15,228,255)";

const DYNAMIC_WIDTH = window.innerWidth < 650 ? "80vw" : "90vw";

/**
 * Styling for app components
 */
export const Title = glamorous.h1({
  color: DARK_COLOR
});

export const NoteInput = glamorous.textarea({
  resize: "none",
  fontSize: 22,
  fontFamily: "Montserrat",
  minWidth: DYNAMIC_WIDTH,
  maxWidth: DYNAMIC_WIDTH,
  padding: 8,
  minHeight: 105,
  maxHeight: 105
});

export const NoteContainer = glamorous.div({
  marginTop: 8,
  marginBottom: 8,
  width: DYNAMIC_WIDTH,
  position: "relative",
  display: "flex",
  alignItems: "center",
  paddingLeft: 8,
  paddingRight: 8,
  minHeight: 95,
  background: NOTE_BACKGROUND_COLOR
});

export const Note = glamorous.p({
  padding: 6,
  width: "78vw",
  wordWrap: "break-word"
});

export const Controls = glamorous.div({
  width: 45,
  right: 0,
  position: "absolute",
  display: "flex",
  flexDirection: "column"
});

export const ControlButton = glamorous.button({
  border: "none",
  background: "none",
  fontSize: 24,
  outline: "none",
  cursor: "pointer"
});

export const ButtonContainer = glamorous.div({
  minWidth: "90vw"
});

export const AddNoteButton = glamorous.button({
  marginTop: 15,
  marginBottom: 15,
  marginRight: 15,
  paddingTop: 5,
  height: 50,
  width: 250,
  fontSize: 24,
  borderRadius: 3,
  border: "none",
  outline: "none",
  fontFamily: "Montserrat",
  background: DARK_COLOR,
  color: ADD_NOTE_BUTTON_TEXT_COLOR,
  cursor: "pointer"
});

export const ClearAllButton = glamorous.button({
  marginBottom: 15,
  paddingTop: 5,
  height: 50,
  width: 250,
  fontSize: 24,
  borderRadius: 3,
  border: "none",
  outline: "none",
  fontFamily: "Montserrat",
  color: DARK_COLOR,
  background: WARNING_COLOR,
  cursor: "pointer"
});
