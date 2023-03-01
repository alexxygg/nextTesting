import React from "react";
import Others from "./AccountTemplate/Others";
import Relatives from "./AccountTemplate/Relatives/Relatives";
import TLO from "./AccountTemplate/TLO/TLO";
import StatusComp from "./StatusComp";

function TestAccount({ object, handleCopyClick }) {
  //copy to clipboard
  const handleClick = (e) => {
    navigator.clipboard.writeText(e.currentTarget.value);
    handleCopyClick();
  };

  const importedOnDate = new Date(object.IMPORTED_ON);
  const daysSince = Math.floor(
    (new Date() - importedOnDate) / (1000 * 60 * 60 * 24)
  );

  return (
    <div className="account accountFields">
      <div className="title">...</div>
      <div className="section">
        <div className="div">
          <div className="beforeInput thirty">Imported on:</div>
          <input
            readOnly
            type="text"
            className="twenty"
            onClick={handleClick}
            defaultValue={object.IMPORTED_ON}
          />{" "}
          <div className="beforeInput thirty">Age:</div>
          <input
            readOnly
            type="text"
            className="twenty"
            onClick={handleClick}
            defaultValue={`${daysSince} days since.`}
          />
        </div>
      </div>
      <div className="title">Debt</div>
      <div className="section">
        <div className="div">
          <div className="beforeInput thirty">Principal:</div>
          <input
            readOnly
            type="text"
            className="twenty"
            onClick={handleClick}
            defaultValue={object.PRINCIPAL}
          />

          <div className="beforeInput thirty">Linked Balance:</div>
          <input
            readOnly
            type="text"
            className="twenty"
            onClick={handleClick}
            defaultValue={object.LINKED_BALANCE}
          />
        </div>
        <div className="div">
          <div className="beforeInput thirty">Balance:</div>
          <input
            readOnly
            type="text"
            className="twenty"
            onClick={handleClick}
            defaultValue={object.BALANCE}
          />{" "}
          <div className="beforeInput thirty">Payment Portal:</div>
          <input
            readOnly
            type="text"
            className="twenty"
            onClick={handleClick}
            defaultValue={object.PAYMENT_PORTAL}
          />{" "}
        </div>
        <div className="div">
          <div className="beforeInput thirty">Payments:</div>
          <input
            readOnly
            type="text"
            className="twenty"
            onClick={handleClick}
            defaultValue={object.PAYMENTS}
          />

          <div className="beforeInput thirty">Last Payment:</div>
          <input
            readOnly
            type="text"
            className="twenty"
            onClick={handleClick}
            defaultValue={object.LAST_PAYMENT}
          />
        </div>
        <div className="div">
          <div className="beforeInput thirty ">Date Last Payment:</div>
          <input
            readOnly
            type="text"
            className="twenty"
            onClick={handleClick}
            defaultValue={object.DATE_LAST_PAYMENT}
          />

          <div className="beforeInput thirty ">Date of Last Charge:</div>
          <input
            readOnly
            type="text"
            className="twenty"
            onClick={handleClick}
            defaultValue={object.DATE_OF_LAST_CHARGE}
          />
        </div>
      </div>
      <div className="title">Client</div>
      <div className="section">
        <StatusComp object={object} />

        <div className="div">
          <div className="beforeInput thirty">Client:</div>
          <input
            readOnly
            type="text"
            className="twenty"
            onClick={handleClick}
            defaultValue={object.CLIENT}
          />

          <div className="beforeInput thirty">Account Type:</div>
          <input
            readOnly
            type="text"
            className="twenty"
            onClick={handleClick}
            defaultValue={object.ACCOUNT_TYPE}
          />
        </div>
        <div className="div">
          <div className="beforeInput thirty">Creditor:</div>
          <input
            readOnly
            type="text"
            className="twenty"
            onClick={handleClick}
            defaultValue={object.CREDITOR}
          />

          <div className="beforeInput thirty">Account #:</div>
          <input
            readOnly
            type="text"
            className="twenty"
            onClick={handleClick}
            defaultValue={object.ACCOUNT_NUMBER}
          />
        </div>
        <div className="div">
          <div className="beforeInput thirty">Originated:</div>
          <input
            readOnly
            type="text"
            className="twenty"
            onClick={handleClick}
            defaultValue={object.ORIGINATED}
          />

          <div className="beforeInput thirty">Account Received:</div>
          <input
            readOnly
            type="text"
            className="twenty"
            onClick={handleClick}
            defaultValue={object.ACCOUNT_RECEIVED}
          />
        </div>
        <div className="div">
          <div className="beforeInput thirty">Imported on:</div>
          <input
            readOnly
            type="text"
            className="twenty"
            onClick={handleClick}
            defaultValue={object.IMPORTED_ON}
          />

          <div className="beforeInput thirty">Collector:</div>
          <input
            readOnly
            type="text"
            className="twenty"
            onClick={handleClick}
            defaultValue={object.COLLECTOR}
          />
        </div>
        <div className="div">
          <div className="beforeInput thirty">Client Claim #:</div>
          <input
            readOnly
            type="text"
            className="twenty"
            onClick={handleClick}
            defaultValue={object.CLIENT_CLAIM_NUMBER}
          />

          <div className="beforeInput thirty">Charged Off:</div>
          <input
            readOnly
            type="text"
            className="twenty"
            onClick={handleClick}
            defaultValue={object.CHARGED_OFF}
          />
        </div>
        <div className="div">
          <div className="beforeInput thirty">Purchased:</div>
          <input
            readOnly
            type="text"
            className="twenty"
            onClick={handleClick}
            defaultValue={object.PURCHASED}
          />

          <div className="beforeInput thirty">Queue:</div>
          <input
            readOnly
            type="text"
            className="twenty"
            onClick={handleClick}
            defaultValue={object.QUEUE}
          />
        </div>
        <div className="div">
          <div className="beforeInput thirty">Next Work:</div>
          <input
            readOnly
            type="text"
            className="twenty"
            onClick={handleClick}
            defaultValue={object.NEXT_WORK}
          />

          <div className="beforeInput thirty ">Debtor Payment ID:</div>
          <input
            readOnly
            type="text"
            className="twenty"
            onClick={handleClick}
            defaultValue={object.DEBTOR_PMT_ID}
          />
        </div>
        <div className="div">
          <div className="beforeInput thirty">Referring:</div>
          <input
            readOnly
            type="text"
            className="twenty"
            onClick={handleClick}
            defaultValue={object.REFERRING}
          />

          <div className="beforeInput thirty">Age:</div>
          <input
            readOnly
            type="text"
            className="twenty"
            onClick={handleClick}
            defaultValue={object.AGE}
          />
        </div>
        <div className="div">
          <div className="beforeInput thirty">Delinq #1:</div>
          <input
            readOnly
            type="text"
            className="twenty"
            onClick={handleClick}
            defaultValue={object.DELINQ_1}
          />

          <div className="beforeInput thirty">Sales Rep:</div>
          <input
            readOnly
            type="text"
            className="twenty"
            onClick={handleClick}
            defaultValue={object.SALES_REP}
          />
        </div>
      </div>
      <div className="title">Debt Information</div>
      <div className="section">
        <div className="subTitle goldColor">Banking Information</div>
        <div className="div">
          <div className="beforeInput thirty ">Bank Account Name:</div>
          <input
            readOnly
            type="text"
            className="twenty"
            onClick={handleClick}
            defaultValue={object.BANK_ACCT_NAME}
          />
          <div className="beforeInput thirty">Bank Routing:</div>
          <input
            readOnly
            type="text"
            className="twenty"
            onClick={handleClick}
            defaultValue={object.BANK_ROUTING}
          />
        </div>
        <div className="div">
          <div className="beforeInput thirty">Bank Account #:</div>
          <input
            readOnly
            type="text"
            className="twenty"
            onClick={handleClick}
            defaultValue={object.BANK_ACCT_NUMBER}
          />
          <div className="beforeInput thirty">Last Payment:</div>
          <input
            readOnly
            type="text"
            className="twenty"
            onClick={handleClick}
            defaultValue={object.LAST_PAYMENT}
          />
        </div>
        <div className="div">
          <div className="beforeInput thirty">Original Check #:</div>
          <input
            readOnly
            type="text"
            className="twenty"
            onClick={handleClick}
            defaultValue={object.ORIGINAL_CHECK_NUMBER}
          />{" "}
          <div className="beforeInput thirty">Product:</div>
          <input
            readOnly
            type="text"
            className="twenty"
            onClick={handleClick}
            defaultValue={object.PRODUCT}
          />
        </div>
        <div className="subTitle goldColor">Documents</div>
        <div className="div">
          <div className="beforeInput thirty">Debtor Doc. Notifications:</div>
          <input
            readOnly
            type="text"
            className="twenty"
            onClick={handleClick}
            defaultValue={object.GENERATE_DEBTOR_DOCUMENT_NOTIFICATIONS}
          />
          <div className="beforeInput thirty">PDF:</div>
          <input
            readOnly
            type="text"
            className="twenty"
            onClick={handleClick}
            defaultValue={object.PDF}
          />
        </div>
        <div className="subTitle goldColor">DOB and SSN</div>
        <div className="div">
          <div className="beforeInput thirty">DOB:</div>
          <input
            readOnly
            type="text"
            className="twenty"
            onClick={handleClick}
            defaultValue={object.DOB}
          />
          <div className="beforeInput thirty">SSN:</div>
          <input
            readOnly
            type="text"
            className="twenty"
            onClick={handleClick}
            defaultValue={object.SSN}
          />{" "}
        </div>
        <div className="div">
          <div className="beforeInput thirty">Action Codes:</div>
          <input
            readOnly
            type="text"
            className="twenty"
            onClick={handleClick}
            defaultValue={object.ACTION_CODES}
          />

          <div className="beforeInput thirty">Letter Flows:</div>
          <input
            readOnly
            type="text"
            className="twenty"
            onClick={handleClick}
            defaultValue={object.LETTER_FLOWS}
          />
        </div>
      </div>
      <Others object={object} handleCopyClick={handleCopyClick} />
      <TLO object={object} handleCopyClick={handleCopyClick} />
      <Relatives object={object} handleCopyClick={handleCopyClick} />
    </div>
  );
}

export default TestAccount;
