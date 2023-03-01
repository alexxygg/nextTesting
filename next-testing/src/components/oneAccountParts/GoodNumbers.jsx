import React, { useState } from "react";

function GoodNumbers({ object, handleCopyClick }) {
  const [GOOD_NUMBERS, SET_GOOD_NUMBERS] = useState(object.GOOD_NUMBERS || []);
  const [newNumber, setNewNumber] = useState({
    number: "",
    type: "",
    area: "",
  });

  const handleAddNumber = () => {
    GOOD_NUMBERS.push(newNumber);
    setNewNumber({ number: "", type: "", area: "" });
  };

  //copy to clipboard
  const handleClick = (e) => {
    navigator.clipboard.writeText(e.currentTarget.value);
    handleCopyClick();
  };

  return (
    <div className="addNumberDiv">
      <div className="title ">Good Numbers:</div>
      <div className="allGoodNumbers">
        {GOOD_NUMBERS.map((number, index) => (
          <div key={index} className="div">
            <img src="/newNumber.png" />
            <input
              readOnly
              onClick={handleClick}
              defaultValue={number.number}
            />
            <img src="/location.png" />
            <div>{number.type}</div>
            <img src="/timeZone.png" />
            <div>{number.area}</div>{" "}
          </div>
        ))}
      </div>{" "}
      <form
        onSubmit={(event) => {
          event.preventDefault();
          handleAddNumber();
        }}
      >
        <div className="div">
          <img src="/newNumber.png" />
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
          <img src="/location.png" />
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
