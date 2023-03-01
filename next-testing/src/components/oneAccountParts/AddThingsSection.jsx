import React from "react";
import GoodAddresses from "./GoodAddresses";
import GoodNumbers from "./GoodNumbers";

function AddThingsSection({ object, handleCopyClick }) {
  return (
    <div className="allThingsSection">
      <GoodAddresses object={object} handleCopyClick={handleCopyClick} />
      <GoodNumbers object={object} handleCopyClick={handleCopyClick} />
    </div>
  );
}

export default AddThingsSection;
