import { useState, React } from "react";
import CopyDisposition from "./CopyDisposition";
import DispositionSummary from "./DispositionSummary";

import allDispositions from "../../../../../allDispositions";

function Relatives({ account, handleCopyClick }) {
  //copy to clipboard
  const handleClick = (e) => {
    navigator.clipboard.writeText(e.target.value);
    handleCopyClick();
  };

  const [selectedDispositions, setSelectedDispositions] = useState({
    RELATIVE_1_DISPOSITION: allDispositions[0],
    RELATIVE_2_DISPOSITION: allDispositions[0],
    RELATIVE_3_DISPOSITION: allDispositions[0],
    RELATIVE_4_DISPOSITION: allDispositions[0],
    RELATIVE_5_DISPOSITION: allDispositions[0],
    RELATIVE_6_DISPOSITION: allDispositions[0],
    RELATIVE_7_DISPOSITION: allDispositions[0],
    RELATIVE_8_DISPOSITION: allDispositions[0],
    RELATIVE_9_DISPOSITION: allDispositions[0],
    RELATIVE_10_DISPOSITION: allDispositions[0],
    RELATIVE_11_DISPOSITION: allDispositions[0],
    RELATIVE_12_DISPOSITION: allDispositions[0],
    RELATIVE_13_DISPOSITION: allDispositions[0],
    RELATIVE_14_DISPOSITION: allDispositions[0],
    RELATIVE_15_DISPOSITION: allDispositions[0],
  });

  const handleDispositionChange = (event) => {
    const { name, value } = event.target;
    setSelectedDispositions({
      ...selectedDispositions,
      [name]: value,
    });
  };

  return (
    <>
      <div className="title">RELATIVES</div>
      <div className="section">
        <div className="subTitle">NAME & ADDRESS</div>
        <div className="div">
          <div className="beforeInput twenty">Relative 1 (R1):</div>
          <input
            readOnly
            type="text"
            className="thirty"
            onClick={handleClick}
            defaultValue={account.RELATIVE_1}
          />
          <div className="beforeInput twenty">R1 Address:</div>
          <input
            readOnly
            type="text"
            className="thirty"
            onClick={handleClick}
            defaultValue={account.RELATIVE_1_ADDY}
          />
        </div>
        <div className="div">
          <div className="beforeInput twenty">Relative 2 (R2):</div>
          <input
            readOnly
            type="text"
            className="thirty"
            onClick={handleClick}
            defaultValue={account.RELATIVE_2}
          />
          <div className="beforeInput twenty">R2 Address:</div>
          <input
            readOnly
            type="text"
            className="thirty"
            onClick={handleClick}
            defaultValue={account.RELATIVE_2_ADDY}
          />{" "}
        </div>
        <div className="div">
          <div className="beforeInput twenty">Relative 3 (R3):</div>
          <input
            readOnly
            type="text"
            className="thirty"
            onClick={handleClick}
            defaultValue={account.RELATIVE_3}
          />
          <div className="beforeInput twenty">R3 Address:</div>
          <input
            readOnly
            type="text"
            className="thirty"
            onClick={handleClick}
            defaultValue={account.RELATIVE_3_ADDY}
          />
        </div>
        <div className="div">
          <div className="beforeInput twenty">Relative 4 (R4):</div>
          <input
            readOnly
            type="text"
            className="thirty"
            onClick={handleClick}
            defaultValue={account.RELATIVE_4}
          />
          <div className="beforeInput twenty">R4 Address:</div>
          <input
            readOnly
            type="text"
            className="thirty"
            onClick={handleClick}
            defaultValue={account.RELATIVE_4_ADDY}
          />{" "}
        </div>
        <div className="div">
          <div className="beforeInput twenty">Relative 5 (R5):</div>
          <input
            readOnly
            type="text"
            className="thirty"
            onClick={handleClick}
            defaultValue={account.RELATIVE_5}
          />
          <div className="beforeInput twenty">R5 Address:</div>
          <input
            readOnly
            type="text"
            className="thirty"
            onClick={handleClick}
            defaultValue={account.RELATIVE_5_ADDY}
          />
        </div>
        <div className="subTitle">CONTACT</div>
        <div className="div">
          <div className="beforeInput sixth">
            R1 1 &nbsp;
            <img src="/newNumber.png" className="smallImg2" />
          </div>
          <input
            readOnly
            type="text"
            className="sixth"
            onClick={handleClick}
            defaultValue={account.RELATIVE_1_PH1}
          />
          <div className="beforeInput sixth">
            R1 2 &nbsp; <img src="/newNumber.png" className="smallImg2" />
          </div>
          <input
            readOnly
            type="text"
            className="sixth"
            onClick={handleClick}
            defaultValue={account.RELATIVE_1_PH2}
          />
          <div className="beforeInput sixth">
            R1 3 &nbsp; <img src="/newNumber.png" className="smallImg2" />
          </div>
          <input
            readOnly
            type="text"
            className="sixth"
            onClick={handleClick}
            defaultValue={account.RELATIVE_1_PH3}
          />
        </div>
        <div className="disposition">
          <select
            className="select"
            name="RELATIVE_1_DISPOSITION"
            value={selectedDispositions.RELATIVE_1_DISPOSITION}
            onChange={handleDispositionChange}
          >
            {allDispositions.map((disposition, index) => (
              <option key={index} value={disposition}>
                {disposition}
              </option>
            ))}
          </select>
        </div>
        <div className="disposition">
          <select
            className="select"
            name="RELATIVE_2_DISPOSITION"
            value={selectedDispositions.RELATIVE_2_DISPOSITION}
            onChange={handleDispositionChange}
          >
            {allDispositions.map((disposition, index) => (
              <option key={index} value={disposition}>
                {disposition}
              </option>
            ))}
          </select>
        </div>
        <div className="disposition">
          <select
            className="select"
            name="RELATIVE_3_DISPOSITION"
            value={selectedDispositions.RELATIVE_3_DISPOSITION}
            onChange={handleDispositionChange}
          >
            {allDispositions.map((disposition, index) => (
              <option key={index} value={disposition}>
                {disposition}
              </option>
            ))}
          </select>
        </div>
        <div className="div">
          <div className="beforeInput sixth">
            R2 1 &nbsp; <img src="/newNumber.png" className="smallImg2" />
          </div>
          <input
            readOnly
            type="text"
            className="sixth"
            onClick={handleClick}
            defaultValue={account.RELATIVE_2_PH1}
          />

          <div className="beforeInput sixth">
            R2 2 &nbsp; <img src="/newNumber.png" className="smallImg2" />
          </div>
          <input
            readOnly
            type="text"
            className="sixth"
            onClick={handleClick}
            defaultValue={account.RELATIVE_2_PH2}
          />
          <div className="beforeInput sixth">
            R2 3 &nbsp; <img src="/newNumber.png" className="smallImg2" />
          </div>
          <input
            readOnly
            type="text"
            className="sixth"
            onClick={handleClick}
            defaultValue={account.RELATIVE_2_PH3}
          />
        </div>
        <div className="disposition">
          <select
            className="select"
            name="RELATIVE_4_DISPOSITION"
            value={selectedDispositions.RELATIVE_4_DISPOSITION}
            onChange={handleDispositionChange}
          >
            {allDispositions.map((disposition, index) => (
              <option key={index} value={disposition}>
                {disposition}
              </option>
            ))}
          </select>
        </div>
        <div className="disposition">
          <select
            className="select"
            name="RELATIVE_5_DISPOSITION"
            value={selectedDispositions.RELATIVE_5_DISPOSITION}
            onChange={handleDispositionChange}
          >
            {allDispositions.map((disposition, index) => (
              <option key={index} value={disposition}>
                {disposition}
              </option>
            ))}
          </select>
        </div>
        <div className="disposition">
          <select
            className="select"
            name="RELATIVE_6_DISPOSITION"
            value={selectedDispositions.RELATIVE_6_DISPOSITION}
            onChange={handleDispositionChange}
          >
            {allDispositions.map((disposition, index) => (
              <option key={index} value={disposition}>
                {disposition}
              </option>
            ))}
          </select>
        </div>
        <div className="div">
          <div className="beforeInput sixth">
            R3 1 &nbsp; <img src="/newNumber.png" className="smallImg2" />
          </div>
          <input
            readOnly
            type="text"
            className="sixth"
            onClick={handleClick}
            defaultValue={account.RELATIVE_3_PH1}
          />
          <div className="beforeInput sixth">
            R3 2 &nbsp; <img src="/newNumber.png" className="smallImg2" />
          </div>
          <input
            readOnly
            type="text"
            className="sixth"
            onClick={handleClick}
            defaultValue={account.RELATIVE_3_PH2}
          />
          <div className="beforeInput sixth">
            R3 3 &nbsp;
            <img src="/newNumber.png" className="smallImg2" />
          </div>
          <input
            readOnly
            type="text"
            className="sixth"
            onClick={handleClick}
            defaultValue={account.RELATIVE_3_PH3}
          />
        </div>
        <div className="disposition">
          <select
            className="select"
            name="RELATIVE_7_DISPOSITION"
            value={selectedDispositions.RELATIVE_7_DISPOSITION}
            onChange={handleDispositionChange}
          >
            {allDispositions.map((disposition, index) => (
              <option key={index} value={disposition}>
                {disposition}
              </option>
            ))}
          </select>
        </div>
        <div className="disposition">
          <select
            className="select"
            name="RELATIVE_8_DISPOSITION"
            value={selectedDispositions.RELATIVE_8_DISPOSITION}
            onChange={handleDispositionChange}
          >
            {allDispositions.map((disposition, index) => (
              <option key={index} value={disposition}>
                {disposition}
              </option>
            ))}
          </select>
        </div>
        <div className="disposition">
          <select
            className="select"
            name="RELATIVE_9_DISPOSITION"
            value={selectedDispositions.RELATIVE_9_DISPOSITION}
            onChange={handleDispositionChange}
          >
            {allDispositions.map((disposition, index) => (
              <option key={index} value={disposition}>
                {disposition}
              </option>
            ))}
          </select>
        </div>
        <div className="div">
          <div className="beforeInput sixth">
            R4 1 &nbsp; <img src="/newNumber.png" className="smallImg2" />
          </div>
          <input
            readOnly
            type="text"
            className="sixth"
            onClick={handleClick}
            defaultValue={account.RELATIVE_4_PH1}
          />
          <div className="beforeInput sixth">
            R4 2 &nbsp;
            <img src="/newNumber.png" className="smallImg2" />
          </div>
          <input
            readOnly
            type="text"
            className="sixth"
            onClick={handleClick}
            defaultValue={account.RELATIVE_4_PH2}
          />
          <div className="beforeInput sixth">
            R4 3 &nbsp;
            <img src="/newNumber.png" className="smallImg2" />
          </div>
          <input
            readOnly
            type="text"
            className="sixth"
            onClick={handleClick}
            defaultValue={account.RELATIVE_4_PH3}
          />
        </div>
        <div className="disposition">
          <select
            className="select"
            name="RELATIVE_10_DISPOSITION"
            value={selectedDispositions.RELATIVE_10_DISPOSITION}
            onChange={handleDispositionChange}
          >
            {allDispositions.map((disposition, index) => (
              <option key={index} value={disposition}>
                {disposition}
              </option>
            ))}
          </select>
        </div>
        <div className="disposition">
          <select
            className="select"
            name="RELATIVE_11_DISPOSITION"
            value={selectedDispositions.RELATIVE_11_DISPOSITION}
            onChange={handleDispositionChange}
          >
            {allDispositions.map((disposition, index) => (
              <option key={index} value={disposition}>
                {disposition}
              </option>
            ))}
          </select>
        </div>
        <div className="disposition">
          <select
            className="select"
            name="RELATIVE_12_DISPOSITION"
            value={selectedDispositions.RELATIVE_12_DISPOSITION}
            onChange={handleDispositionChange}
          >
            {allDispositions.map((disposition, index) => (
              <option key={index} value={disposition}>
                {disposition}
              </option>
            ))}
          </select>
        </div>
        <div className="div">
          <div className="beforeInput sixth">
            R5 1 &nbsp;
            <img src="/newNumber.png" className="smallImg2" />
          </div>
          <input
            readOnly
            type="text"
            className="sixth"
            onClick={handleClick}
            defaultValue={account.RELATIVE_5_PH1}
          />
          <div className="beforeInput sixth">
            R5 2 &nbsp;
            <img src="/newNumber.png" className="smallImg2" />
          </div>
          <input
            readOnly
            type="text"
            className="sixth"
            onClick={handleClick}
            defaultValue={account.RELATIVE_5_PH2}
          />
          <div className="beforeInput sixth">
            R5 3 &nbsp;
            <img src="/newNumber.png" className="smallImg2" />
          </div>
          <input
            readOnly
            type="text"
            className="sixth"
            onClick={handleClick}
            defaultValue={account.RELATIVE_5_PH3}
          />
        </div>
        <div className="disposition">
          <select
            className="select"
            name="RELATIVE_13_DISPOSITION"
            value={selectedDispositions.RELATIVE_13_DISPOSITION}
            onChange={handleDispositionChange}
          >
            {allDispositions.map((disposition, index) => (
              <option key={index} value={disposition}>
                {disposition}
              </option>
            ))}
          </select>
        </div>
        <div className="disposition">
          <select
            className="select"
            name="RELATIVE_14_DISPOSITION"
            value={selectedDispositions.RELATIVE_14_DISPOSITION}
            onChange={handleDispositionChange}
          >
            {allDispositions.map((disposition, index) => (
              <option key={index} value={disposition}>
                {disposition}
              </option>
            ))}
          </select>
        </div>
        <div className="disposition">
          <select
            className="select"
            name="RELATIVE_15_DISPOSITION"
            value={selectedDispositions.RELATIVE_15_DISPOSITION}
            onChange={handleDispositionChange}
          >
            {allDispositions.map((disposition, index) => (
              <option key={index} value={disposition}>
                {disposition}
              </option>
            ))}
          </select>
        </div>
        <CopyDisposition
          selectedDispositions={selectedDispositions}
          account={account}
          handleCopyClick={handleCopyClick}
        />
        <DispositionSummary
          selectedDispositions={selectedDispositions}
          account={account}
        />
      </div>
    </>
  );
}

export default Relatives;
