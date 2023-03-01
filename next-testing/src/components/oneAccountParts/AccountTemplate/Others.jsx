import React from "react";

function Others({ object, handleCopyClick }) {
  //copy to clipboard
  const handleClick = (e) => {
    navigator.clipboard.writeText(e.currentTarget.value);
    handleCopyClick();
  };
  return (
    <>
      <div className="title">Other</div>
      <div className="section">
        <div className="subTitle goldColor">Items</div>
        <div className="div">
          <div className="beforeInput sixth">Item A:</div>
          <input
            readOnly
            type="text"
            className="sixth"
            onClick={handleClick}
            defaultValue={object.ITEM_A}
          />
          <div className="beforeInput sixth">Item B:</div>
          <input
            readOnly
            type="text"
            className="sixth"
            onClick={handleClick}
            defaultValue={object.ITEM_B}
          />

          <div className="beforeInput sixth">Item C:</div>
          <input
            readOnly
            type="text"
            className="sixth"
            onClick={handleClick}
            defaultValue={object.ITEM_C}
          />
        </div>
        <div className="subTitle goldColor">Props</div>
        <div className="div">
          <div className="beforeInput thirty ">Prop Owner Address:</div>
          <input
            readOnly
            type="text"
            className="twenty"
            onClick={handleClick}
            defaultValue={object.PROP_OWNER_ADDRESS}
          />

          <div className="beforeInput thirty">Prop:</div>
          <input
            readOnly
            type="text"
            className="twenty"
            onClick={handleClick}
            defaultValue={object.PROP}
          />
        </div>
        <div className="div">
          <div className="beforeInput thirty ">Prop Loan Amount:</div>
          <input
            readOnly
            type="text"
            className="twenty"
            onClick={handleClick}
            defaultValue={object.PROP_LOAN_AMOUNT}
          />

          <div className="beforeInput thirty ">Prop Owner Lender:</div>
          <input
            readOnly
            type="text"
            className="twenty"
            onClick={handleClick}
            defaultValue={object.PROP_OWNER_LENDER}
          />
        </div>
        <div className="subTitle">Co-Signer</div>
        <div className="div">
          <div className="beforeInput sixth">Co-Signer First:</div>
          <input
            readOnly
            type="text"
            className="sixth"
            onClick={handleClick}
            defaultValue={object.CO_SIGNER_FIRST}
          />

          <div className="beforeInput sixth">Co-Signer Last:</div>
          <input
            readOnly
            type="text"
            className="sixth"
            onClick={handleClick}
            defaultValue={object.CO_SIGNER_LAST}
          />

          <div className="beforeInput sixth">Co-Signer SSN:</div>
          <input
            readOnly
            type="text"
            className="sixth"
            onClick={handleClick}
            defaultValue={object.CO_SIGNER_SSN}
          />
        </div>
        <div className="subTitle">Legal</div>
        <div className="div">
          <div className="beforeInput sixth">Attorney:</div>
          <input
            readOnly
            type="text"
            className="sixth"
            onClick={handleClick}
            defaultValue={object.ATTORNEY}
          />

          <div className="beforeInput sixth">Bankruptcy:</div>
          <input
            readOnly
            type="text"
            className="sixth"
            onClick={handleClick}
            defaultValue={object.BANKRUPTCY}
          />

          <div className="beforeInput sixth">Discharged:</div>
          <input
            readOnly
            type="text"
            className="sixth"
            onClick={handleClick}
            defaultValue={object.DISCHARGED}
          />
        </div>
      </div>
    </>
  );
}

export default Others;
