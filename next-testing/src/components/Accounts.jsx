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
  const { user } = router.query;

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

  const handleSaveClick = async () => {
    const { data, error } = await supabase
      .from("accounts")
      .select()
      .eq("id", id)
      .single();
    if (error) {
      console.log(error);
    } else {
      setAccount(data);
      handleCopyClick();
    }
  };

  return (
    <>
      {account && (
        <>
          <div className="navbar">
            <HeaderOtherLinks />
            <Header account={account} user={user} />
            <Header2
              account={account}
              user={user}
              handleSaveClick={handleSaveClick}
            >
              {" "}
            </Header2>
          </div>
          <div id="padded">
            <TestAccount
              account={account}
              user={user}
              handleCopyClick={handleCopyClick}
            />
            <AddThingsSection
              account={account}
              user={user}
              handleCopyClick={handleCopyClick}
            />
            <Notes account={account} user={user} />
          </div>
          <div id="popUp" className={showConfirmation ? "show" : ""}>
            Copied!
          </div>
        </>
      )}
    </>
  );
}

export default Accounts;
