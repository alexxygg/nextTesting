import React, { useState, useRef } from "react";
import TestAccount from "./oneAccountParts/TestAccount";
import Header from "./oneAccountParts/Header";
import Header2 from "./oneAccountParts/Header2";
import Notes from "./oneAccountParts/Notes";
// import Tabs from "./oneAccountParts/Tabs";
import AddThingsSection from "./oneAccountParts/AddThingsSection";
import HeaderOtherLinks from "./HeaderOtherLinks";
function Accounts({ object }) {
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleCopyClick = () => {
    setShowConfirmation(true);
    setTimeout(() => setShowConfirmation(false), 2000);
  };

  return (
    <>
      <div className="navbar">
        <HeaderOtherLinks />
        <Header object={object} />
        {/* not ready      
          <Tabs object={object} /> */}
        <Header2 object={object} />
      </div>
      <div id="padded">
        <TestAccount object={object} handleCopyClick={handleCopyClick} />
        <AddThingsSection object={object} handleCopyClick={handleCopyClick} />
        <Notes object={object} />
        <div id="popUp" className={showConfirmation ? "show" : ""}>
          Copied!
        </div>
      </div>
    </>
  );
}
export default Accounts;
