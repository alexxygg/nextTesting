import React, { useState } from "react";
import { supabase } from "../../../lib/supabaseClient";
const GoodAddresses = ({ account, handleCopyClick }) => {
  const [newAddress, setNewAddress] = useState("");
  const [tloAddressList, setTloAddressList] = useState(
    account.tloAddressList || []
  );

  const handleAddAddress = async (e) => {
    e.preventDefault();
    const updatedAccount = {
      ...account,
      tloAddressList: [...tloAddressList, newAddress],
    };
    const { data, error } = await supabase
      .from("accounts")
      .update(updatedAccount)
      .eq("id", account.id);
    if (error) {
      console.error(error);
      return;
    }
    setTloAddressList([...tloAddressList, newAddress]);
    setNewAddress("");
  };
  //copy to clipboard
  const handleClick = (e) => {
    navigator.clipboard.writeText(e.currentTarget.value);
    handleCopyClick();
  };

  return (
    <div className="addAddressDiv">
      <div className="title ">TLO Address List</div>
      <div className="tloAddressList">
        <div className="allGoodAddresses">
          {tloAddressList.map((address, index) => (
            <div key={index}>
              {" "}
              <img src="/location2.png" className="smallImg" />
              <input
                readOnly
                onClick={handleClick}
                defaultValue={address}
                className="eighty"
              />
            </div>
          ))}
        </div>
      </div>{" "}
      <form onSubmit={handleAddAddress}>
        <div className="div">
          <img src="/location2.png" className="smallImg" />
          <input
            placeholder="123 Evergreen St, Somewhere, USA"
            type="text"
            className="eighty"
            value={newAddress}
            onChange={(e) => setNewAddress(e.target.value)}
          />
        </div>
        <button className=" weirdBtn" type="submit">
          Add
        </button>
      </form>
    </div>
  );
};

export default GoodAddresses;
