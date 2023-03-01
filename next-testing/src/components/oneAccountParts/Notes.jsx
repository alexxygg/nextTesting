import React, { Fragment, useState } from "react";
import NewNote from "./NewNote";
function Notes({ account }) {
  const [allNotes, setAllNotes] = useState(account.notes || []);

  const updateNotes = (newNotes) => {
    setAllNotes(newNotes);
  };
  return (
    <div className="notesDiv">
      <div className="title">Notes:</div>
      <div className="notes">
        <p className="id otherBg goldColor">ID:</p>
        <p className="by otherBg goldColor">By:</p>
        <p className="time otherBg goldColor">Last Modified:</p>
        <div className="note otherBg goldColor noteTitle">Note:</div>
        {allNotes.map((note) => (
          <Fragment key={note.id}>
            <p className=" id">{note.id}</p>
            <p className=" by">John Smith</p>
            <p className=" time">{note.timestamp}</p>
            <div
              className="note"
              style={note.isImportant ? { color: "gold" } : {}}
            >
              {note.note}
            </div>
          </Fragment>
        ))}
      </div>
      <NewNote account={account} updateNotes={updateNotes} />
    </div>
  );
}

export default Notes;
