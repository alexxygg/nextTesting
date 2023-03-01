import React from "react";
import GoodAddresses from "./GoodAddresses";
import GoodNumbers from "./GoodNumbers";

function AddThingsSection({ account, handleCopyClick }) {
  return (
    <div className="allThingsSection">
      <GoodAddresses account={account} handleCopyClick={handleCopyClick} />
      <GoodNumbers account={account} handleCopyClick={handleCopyClick} />
    </div>
  );
}

export default AddThingsSection;
