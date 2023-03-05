import React, { useState } from "react";
import { supabase } from "lib/supabaseClient";

const AddSection = ({ account, handleCopyClick }) => {
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
    const { error } = await supabase
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

  const [goodNumbers, setGoodNumbers] = useState(account.goodNumbers || []);
  const [newNumber, setNewNumber] = useState({
    number: "",
    type: "",
    area: "",
  });

  const handleAddNumber = async (e) => {
    e.preventDefault();
    const updatedAccount = {
      ...account,
      goodNumbers: [...goodNumbers, newNumber],
    };
    const { error } = await supabase
      .from("accounts")
      .update(updatedAccount)
      .eq("id", account.id);
    if (error) {
      console.error(error);
      return;
    }
    setGoodNumbers([...goodNumbers, newNumber]);
    setNewNumber({ number: "", type: "", area: "" });
  };

  return (
    <>
      <div className="allThingsSection">
        <div className="addAddressDiv">
          <div className="title ">TLO ADDRESS LIST</div>
          <div className="tloAddressList">
            {" "}
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

        <div className="addNumberDiv">
          <div className="title ">CONFIRMED NUMBERS</div>
          <div className="allGoodNumbers">
            {" "}
            {goodNumbers.map((each, index) => (
              <div key={index} className="div">
                <img src="/phone2.png" />
                <input
                  readOnly
                  onClick={handleClick}
                  defaultValue={each.number}
                />
                <img src="/address.png" />
                <div>{each.type}</div>
                <img src="/timeZone.png" />
                <div>{each.area}</div>{" "}
              </div>
            ))}
          </div>{" "}
          <form onSubmit={handleAddNumber}>
            <div className="allGoodNumbers">
              <div className="div div2">
                <img src="/phone2.png" />
                <input
                  placeholder="xxx-xxx-xxxx"
                  type="text"
                  value={newNumber.number}
                  onChange={(event) =>
                    setNewNumber({ ...newNumber, number: event.target.value })
                  }
                />
                <img src="/address.png" />
                <input
                  className="input"
                  placeholder="Home,Cell"
                  type="text"
                  value={newNumber.type}
                  onChange={(event) =>
                    setNewNumber({ ...newNumber, type: event.target.value })
                  }
                />
                <img src="/timeZone.png" />
                <input
                  className="input"
                  placeholder="PST,CST..."
                  type="text"
                  value={newNumber.area}
                  onChange={(event) =>
                    setNewNumber({ ...newNumber, area: event.target.value })
                  }
                />
              </div>
            </div>
            <button className="weirdBtn" type="submit">
              Add
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddSection;
