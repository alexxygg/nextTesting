import React from "react";
// import { globalUser } from "../Login";

function Header({ object }) {
  // const ifUser = (globalUser) => {
  //   return globalUser ? <div>{globalUser.USERNAME}</div> : null;
  // };
  return (
    <div className="header">
      <div className="logo">DEBTDYNAMIC©</div>
      <div>
        <div>
          Name: <span className="goldColor">{object.NAME}</span>{" "}
        </div>
        <div>
          Status: <span className="goldColor">{object.STATUS}</span>{" "}
        </div>
      </div>
      {/* <div>
        <div>USER:</div>
        {ifUser(globalUser)}
      </div> */}
    </div>
  );
}

export default Header;
