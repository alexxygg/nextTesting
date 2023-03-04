import React, { useState } from "react";
import allStatusCodes from "../../../allStatusCodes";
import { supabase } from "lib/supabaseClient";
function StatusComp({ account }) {
  const [statusCode, setStatusCode] = useState(account.STATUS);

  // GENERATE A NOTE WHEN STATUS IS CHANGED
  // function addNoteToArray(notesArray, note) {
  //   const updatedNotes = [...notesArray.notes, note];
  //   return { ...notesArray, notes: updatedNotes };
  // }

  // update account status
  const updateAccountStatus = async (event) => {
    event.preventDefault();
    // get the updated status value from the select element
    const newStatusCode = event.target.value;
    // call supabase to update the account status in the database
    const { error } = await supabase
      .from("accounts")
      .update({
        STATUS: newStatusCode,
      })
      .eq("id", account.id);
    if (error) {
      console.log("Error updating account:", error.message);
    } else {
      console.log("Account updated successfully");
      setStatusCode(newStatusCode);
    }
  };

  return (
    <>
      <div className="div">
        <div className="beforeInput sixthStatus">Status:</div>
        <select
          className="maxContent select"
          onChange={updateAccountStatus}
          value={statusCode}
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
