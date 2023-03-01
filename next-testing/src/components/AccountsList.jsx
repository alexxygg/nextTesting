import React from "react";
import allAccounts from "/allAccounts";

// import { Link } from "react-router-dom";
// import { globalUser } from "./Login";
import HeaderOtherLinks from "./HeaderOtherLinks";
function AccountsList() {
  // const ifUser = (globalUser) => {
  //   return globalUser ? <div>{globalUser.USERNAME}</div> : null;
  // };

  return (
    <>
      <HeaderOtherLinks />{" "}
      <div id="paddedList2">
        <div className="header">
          <div className="logo middle">DEBTDYNAMIC©</div>
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
          {allAccounts.map((result) => (
            <a
              key={result.id}
              className="accountFromResults"
              href={`/accounts/${result.id}`}
            >
              <div>{result.id}</div>
              <div>{result.ACCOUNT_NUMBER}</div>
              <div>{result.NAME}</div>
              <div>{result.TLO_PHONE}</div>
              <div>{result.SSN}</div>
              <div>{result.DOB}</div>
            </a>
          ))}
          <div>Accounts 1 - {allAccounts.length}</div>
        </div>
      </div>
    </>
  );
}

export default AccountsList;
