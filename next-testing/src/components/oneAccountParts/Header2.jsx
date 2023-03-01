import React from "react";
import allAccounts from "../../../allAccounts";
import SearchBar from "../SearchBar";
function Header2({ object }) {
  return (
    <>
      {" "}
      <SearchBar />
      <div className="header2">
        <a className="a" href="/search">
          <img src="/homeIcon.png" alt="" className="img2" />
        </a>
        <div className="helpContainer">
          Help
          <div className="helpDropdown">
            <a target="_blank" href="https://example.com/videos">
              Videos
            </a>
            <a target="_blank" href="https://example.com/manuals">
              Manuals
            </a>
            <a target="_blank" href="https://example.com/manuals">
              Manuals
            </a>
            <a target="_blank" href="https://example.com/videos">
              Videos
            </a>
            <a target="_blank" href="https://example.com/manuals">
              Manuals
            </a>
            <a target="_blank" href="https://example.com/videos">
              Videos
            </a>{" "}
          </div>
        </div>
        <a className="a" href={`/accounts/${object.id - 1}`}>
          <img src="/previous.png" className="img3" />
        </a>{" "}
        <div>
          Account {object.id} of {allAccounts.length}
        </div>
        <a className="a" href={`/accounts/${object.id + 1}`}>
          <img src="/next.png" className="img3" />
        </a>
        {/* <a className="a" href={`/accounts/${object.id + 1}`}>
        <img src="/skip.png" title="Skip to Next Account" />
      </a> */}
        <a className="a" href={`/accountsList`}>
          <img src="/worklistAllAccounts.png" className="img2" />{" "}
        </a>
        <a className="a" href={`/accountsList`}>
          <img src="/changeWorklist.png" className="img" />{" "}
        </a>
        {/* <a className="a" href={`/accountsList`}>
        <img src="/worklistAllAccounts.png" title="Pause Current Worklist" />{" "}
      </a>
      <a className="a" href={`/accountsList`}>
        <img src="/worklistAllAccounts.png" title="Delete Current Worklist" />{" "}
      </a>{" "} */}{" "}
        <a className="a" href="/accounts/search" target="_blank">
          <img src="/search.png" alt="" className="img2" />
        </a>{" "}
      </div>
    </>
  );
}

export default Header2;
