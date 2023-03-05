import React from "react";
import allAccounts from "../../../allAccounts";
import SearchBar from "../SearchBar";
import Link from "next/link";

function Header2({ account, handleSaveClick }) {
  const changesAlert = async () => {
    const popUp = document.getElementById("popUp");
    try {
      popUp.style.backgroundColor = "rgb(2,80,30)";
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
      <div className="header2 ">
        <Link className="a" href="/search">
          <img src="/homeIcon.png" alt="" className="img2" />
        </Link>
        <div className="helpContainer">
          Help
          <div className="helpDropdown">
            <Link target="_blank" href="https://example.com/videos">
              Videos
            </Link>
            <Link target="_blank" href="https://example.com/manuals">
              Manuals
            </Link>
            <Link target="_blank" href="https://example.com/manuals">
              Manuals
            </Link>
            <Link target="_blank" href="https://example.com/videos">
              Videos
            </Link>
            <Link target="_blank" href="https://example.com/manuals">
              Manuals
            </Link>
            <Link target="_blank" href="https://example.com/videos">
              Videos
            </Link>
          </div>
        </div>
        {Number(account.id) > 1 && (
          <Link className="a" href={`/accounts/${Number(account.id) - 1}`}>
            <img src="/previous.png" className="img2 imgOther" />
          </Link>
        )}
        <div>
          Account {account.id} of {allAccounts.length}
        </div>
        {Number(account.id) < allAccounts.length && (
          <Link className="a" href={`/accounts/${Number(account.id) + 1}`}>
            <img src="/next.png" className="img2 imgOther" />
          </Link>
        )}
        <Link className="a" href={`/accounts`}>
          <img src="/worklistAllAccounts.png" className="img2" />
        </Link>
        <Link className="a" href={`/accountsList`}>
          <img src="/changeWorklist.png" className="img" />
        </Link>
        <Link className="a" href="/accounts/search" target="_blank">
          <img src="/search.png" alt="" className="img2" />
        </Link>
        <button className="saveChangesBtn" onClick={changesAlert}>
          Save Changes
        </button>
      </div>
      <SearchBar />
      <div className="borderFromTop"></div>
    </>
  );
}

export default Header2;
