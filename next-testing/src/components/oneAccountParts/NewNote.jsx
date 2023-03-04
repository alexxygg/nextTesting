import React, { useState } from "react";
import { supabase } from "../../../lib/supabaseClient";

function NewNote({ account, updateNotes }) {
  const [allNotes, setAllNotes] = useState(account.notes || []);
  const [input, setInput] = useState("");
  const [isImportant, setIsImportant] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const newNote = {
      id: allNotes.length + 1,
      note: input,
      timestamp: new Date().toLocaleString(),
      isImportant: isImportant,
    };
    const { error } = await supabase
      .from("accounts")
      .update({
        notes: [...allNotes, newNote],
      })
      .eq("id", account.id);
    if (error) {
      console.error(error);
      return;
    }
    const newNotes = [...allNotes, newNote];
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
      <div className="importantAndBtn">
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
