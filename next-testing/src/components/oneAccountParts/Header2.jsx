import React from "react";
import allAccounts from "../../../allAccounts";
import SearchBar from "../SearchBar";
function Header2({ account, handleSaveClick }) {
  const changesAlert = async () => {
    const popUp = document.getElementById("popUp");
    try {
      popUp.style.backgroundColor = "blue";
      popUp.textContent = "Changes saved successfully!";
      popUp.style.minWidth = "500px";
      popUp.style.marginLeft = "-250px";
      setTimeout(() => {
        popUp.textContent = "Copied!";
        popUp.style.backgroundColor = "red";
        popUp.style.minWidth = "250px";
        popUp.style.marginLeft = "-125px";
      }, 2000);
      await handleSaveClick();
    } catch (err) {
      console.error(err);
    }
  };
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
        {Number(account.id) > 1 && (
          <a className="a" href={`/accounts/${Number(account.id) - 1}`}>
            <img src="/previous.png" className="img3" />
          </a>
        )}
        <div>
          Account {account.id} of {allAccounts.length}
        </div>
        {Number(account.id) < allAccounts.length && (
          <a className="a" href={`/accounts/${Number(account.id) + 1}`}>
            <img src="/next.png" className="img3" />
          </a>
        )}
        {/* <a className="a" href={`/accounts/${account.id + 1}`}>
        <img src="/skip.png" title="Skip to Next Account" />
      </a> */}
        <a className="a" href={`/accounts`}>
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
        <button className="saveChangesBtn" onClick={changesAlert}>
          Save Changes
        </button>{" "}
      </div>
    </>
  );
}

export default Header2;
