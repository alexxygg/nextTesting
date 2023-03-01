import React from "react";
import { useState } from "react";
import allStatusCodes from "../../../allStatusCodes";

function StatusComp({ account }) {
  const [statusCode, setStatusCode] = useState({
    STATUS_DISPOSITION: allStatusCodes[0],
  });

  // GENERATE A NOTE WHEN STATUS IS CHANGED
  function addNoteToArray(notesArray, note) {
    const updatedNotes = [...notesArray.NOTES, note];
    return { ...notesArray, NOTES: updatedNotes };
  }

  const handleDispositionChange = (event) => {
    const value = event.target.value;
    setStatusCode(value);
    const updatedObject = { ...account, STATUS: value };
    const newNote = {
      note: `Status changed to ${value}`,
      id: `${account.NOTES.length + 1}`,
      timestamp: new Date().toLocaleString(),
    };
    const updatedNotesObject = addNoteToArray(updatedObject, newNote);
    account = updatedNotesObject; // optional: update the object prop
  };

  return (
    <>
      <div className="div">
        <div className="beforeInput sixth">Status:</div>
        <select
          className="maxContent"
          onChange={handleDispositionChange}
          defaultValue={account.STATUS}
        >
          {allStatusCodes.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
      {/* object.STATUS being updated on change */}
      {/* <div>{object.STATUS}</div> */}
    </>
  );
}

export default StatusComp;
