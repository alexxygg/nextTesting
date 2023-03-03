import React from "react";
// import { globalUser, setGlobalUser } from "./Login";
function HeaderOtherLinks() {
  // const handleLogOut = () => {
  //   setGlobalUser(null);
  // };
  // const ifUser = (globalUser) => {
  //   return globalUser ? (
  //     <>
  //       <div>USER: {globalUser.USERNAME}</div>
  //       <button onClick={handleLogOut} className="searchBtn">
  //         Log out
  //       </button>
  //     </>
  //   ) : null;
  // };
  return (
    <div className="otherSites ">
      <a href="/about">Home/About</a>
      <a href="/">All Accounts</a>
      <a href="/accounts/search">Search All</a>
      {/* {ifUser(globalUser)} */}
    </div>
  );
}

export default HeaderOtherLinks;
