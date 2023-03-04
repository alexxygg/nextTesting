import React, { useState, useEffect } from "react";
import allAccounts from "/allAccounts";

// import { Link } from "react-router-dom";
// import { globalUser } from "./Login";
import HeaderOtherLinks from "./HeaderOtherLinks";

import { supabase } from "../../lib/supabaseClient";

function AccountsList() {
  const [accounts, setAccounts] = useState([]);

  useEffect(() => {
    const fetchAccounts = async () => {
      const { data, error } = await supabase
        .from("accounts")
        .select("*")
        .order("id");
      if (error) console.log("error", error);
      else setAccounts(data);
    };
    fetchAccounts();
  }, []);
  // const ifUser = (globalUser) => {
  //   return globalUser ? <div>{globalUser.USERNAME}</div> : null;
  // };

  return (
    <>
      <HeaderOtherLinks />{" "}
      <div className="paddedList2">
        <div className="header">
          <div className="logo middle">FirePulse©</div>
        </div>{" "}
        <div className="title goldColor">All accounts:</div>
        <div className="results">
          {/* <div>{ifUser(globalUser)}</div> */}
          <div className="accountFromResults otherBg goldColor">
            <div>id</div>
            <div>Account #</div>
            <div>Name</div>
            <div>Phone #</div>
            <div>SSN</div>
            <div>DOB</div>
          </div>
          {accounts.map((result) => (
            <a
              key={result.id}
              className="accountFromResults"
              href={`/accounts/${result.id}`}
            >
              <div>{result.id}</div>
              <div>{result.ACCOUNT_NUMBER}</div>
              <div>{result.name}</div>
              <div>{result.TLO_PHONE}</div>
              <div>{result.SSN}</div>
              <div>{result.DOB}</div>
            </a>
          ))}
          <div>Accounts 1 - {accounts.length}</div>
        </div>
      </div>
    </>
  );
}

export default AccountsList;
