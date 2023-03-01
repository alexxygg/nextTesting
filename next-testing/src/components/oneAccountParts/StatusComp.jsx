import React from "react";
import { useState } from "react";
import allStatusCodes from "../../../allStatusCodes";

function StatusComp({ object }) {
  const [statusCode, setStatusCode] = useState({
    STATUS_DISPOSITION: allStatusCodes[0],
  });

  // GENERATE A NOTE WHEN STATUS IS CHANGED
  function addNoteToObject(notesObject, note) {
    const updatedNotes = [...notesObject.NOTES, note];
    return { ...notesObject, NOTES: updatedNotes };
  }

  const handleDispositionChange = (event) => {
    const value = event.target.value;
    setStatusCode(value);
    const updatedObject = { ...object, STATUS: value };
    const newNote = {
      note: `Status changed to ${value}`,
      id: `${object.NOTES.length + 1}`,
      timestamp: new Date().toLocaleString(),
    };
    const updatedNotesObject = addNoteToObject(updatedObject, newNote);
    object = updatedNotesObject; // optional: update the object prop
  };

  return (
    <>
      <div className="div">
        <div className="beforeInput sixth">Status:</div>
        <select
          className="maxContent"
          onChange={handleDispositionChange}
          defaultValue={object.STATUS}
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
