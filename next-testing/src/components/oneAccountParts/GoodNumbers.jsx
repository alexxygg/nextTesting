import React, { useState } from "react";
import { supabase } from "../../../lib/supabaseClient";

function GoodNumbers({ account, handleCopyClick }) {
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
    const { data, error } = await supabase
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

  //copy to clipboard
  const handleClick = (e) => {
    navigator.clipboard.writeText(e.currentTarget.value);
    handleCopyClick();
  };
  // s
  return (
    <div className="addNumberDiv">
      <div className="title ">CONFIRMED NUMBERS</div>
      <div className="allGoodNumbers">
        {goodNumbers.map((each, index) => (
          <div key={index} className="div">
            <img src="/phone2.png" />
            <input readOnly onClick={handleClick} defaultValue={each.number} />
            <img src="/address.png" />
            <div>{each.type}</div>
            <img src="/timeZone.png" />
            <div>{each.area}</div>{" "}
          </div>
        ))}
      </div>{" "}
      <form onSubmit={handleAddNumber}>
        <div className="div">
          <img src="/phone2.png" />
          &nbsp;
          <input
            placeholder="xxx-xxx-xxxx"
            type="text"
            className="eighty"
            value={newNumber.number}
            onChange={(event) =>
              setNewNumber({ ...newNumber, number: event.target.value })
            }
          />
        </div>
        <div className="div">
          <img src="/address.png" />
          &nbsp;
          <input
            placeholder="home,cell"
            type="text"
            className="eighty"
            value={newNumber.type}
            onChange={(event) =>
              setNewNumber({ ...newNumber, type: event.target.value })
            }
          />
        </div>
        <div className="div">
          <img src="/timeZone.png" />
          &nbsp;
          <input
            placeholder="pacific,atlantic"
            type="text"
            className="eighty"
            value={newNumber.area}
            onChange={(event) =>
              setNewNumber({ ...newNumber, area: event.target.value })
            }
          />
        </div>
        <button className="weirdBtn" type="submit">
          Add
        </button>
      </form>
    </div>
  );
}

export default GoodNumbers;
