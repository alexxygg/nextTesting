import React, { useState } from "react";

function NewNote({ object, updateNotes }) {
  const [allNotes, setAllNotes] = useState(object.NOTES || []);
  const [input, setInput] = useState("");

  const [isImportant, setIsImportant] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const newNotes = [
      ...allNotes,
      {
        id: allNotes.length + 1,
        note: input,
        timestamp: new Date().toLocaleString(),
        isImportant: isImportant,
      },
    ];
    setAllNotes(newNotes);
    updateNotes(newNotes);
    setInput("");
    setIsImportant(false);
    window.scrollTo(0, document.body.scrollHeight);
  };

  return (
    <form className="newNoteDiv" onSubmit={handleSubmit}>
      <textarea
        className="newNoteField"
        wrap="hard"
        rows="8"
        maxLength="500"
        type="text"
        value={input}
        onChange={(event) => setInput(event.target.value)}
      />
      <div className="importnatAndBtn">
        {" "}
        <label className="importantCheckbox">
          <input
            className="importantInput"
            type="checkbox"
            checked={isImportant}
            onChange={(event) => setIsImportant(event.target.checked)}
          />
          Important
        </label>
        <button className="newNoteBtn" type="submit">
          Add +
        </button>
      </div>{" "}
    </form>
  );
}

export default NewNote;
