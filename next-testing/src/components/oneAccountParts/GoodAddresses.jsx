import React, { useState } from "react";

const GoodAddresses = ({ object, handleCopyClick }) => {
  const [newAddress, setNewAddress] = useState("");
  const [newAddressList, setNewAddressList] = useState(
    object.TLO_ADDRESS_LIST || []
  );

  const handleAddAddress = (e) => {
    e.preventDefault();
    setNewAddressList([...newAddressList, newAddress]);
    object.TLO_ADDRESS_LIST = [...newAddressList, newAddress];
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
      <div className="newAddressList">
        <div className="allGoodAddresses">
          {newAddressList.map((address, index) => (
            <div key={index}>
              {" "}
              <img src="/address.png" className="smallImg" />
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
          <img src="/address.png" className="smallImg" />
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
