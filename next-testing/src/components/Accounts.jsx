import React, { useState, useEffect } from "react";
import TestAccount from "./oneAccountParts/TestAccount";
import Header from "./oneAccountParts/Header";
import Header2 from "./oneAccountParts/Header2";
import Notes from "./oneAccountParts/Notes";
import AddThingsSection from "./oneAccountParts/AddThingsSection";
import HeaderOtherLinks from "./HeaderOtherLinks";
import { useRouter } from "next/router";
import { supabase } from "../../lib/supabaseClient";

function Accounts() {
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [account, setAccount] = useState(null);
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    async function fetchAccount() {
      const { data, error } = await supabase
        .from("accounts")
        .select()
        .eq("id", id)
        .single();
      if (error) {
        console.log(error);
      } else {
        setAccount(data);
      }
    }
    fetchAccount();
  }, [id]);

  const handleCopyClick = () => {
    setShowConfirmation(true);
    setTimeout(() => setShowConfirmation(false), 2000);
  };

  return (
    <>
      {account && (
        <>
          <div className="navbar">
            <HeaderOtherLinks />
            <Header account={account} />
            <Header2 account={account} />
          </div>
          <div id="padded">
            <TestAccount account={account} handleCopyClick={handleCopyClick} />
            <AddThingsSection
              account={account}
              handleCopyClick={handleCopyClick}
            />
            <Notes account={account} />
            <div id="popUp" className={showConfirmation ? "show" : ""}>
              Copied!
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default Accounts;
