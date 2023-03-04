import React from "react";
import Others from "./AccountTemplate/Others";
import Relatives from "./AccountTemplate/Relatives/Relatives";
import TLO from "./AccountTemplate/TLO/TLO";
import StatusComp from "./StatusComp";

function TestAccount({ account, handleCopyClick }) {
  //copy to clipboard
  const handleClick = (e) => {
    navigator.clipboard.writeText(e.currentTarget.value);
    handleCopyClick();
  };

  const daysSince = () => {
    const importedOnDate =
      account.IMPORTED_ON === "-" ? "-" : new Date(account.IMPORTED_ON);
    if (importedOnDate instanceof Date && !isNaN(importedOnDate)) {
      const days = Math.floor(
        (new Date() - importedOnDate) / (1000 * 60 * 60 * 24)
      );
      return `${days} days since.`;
    } else if (importedOnDate === "-") {
      return "-";
    } else {
      return "Invalid import date.";
    }
  };

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
            defaultValue={account.IMPORTED_ON}
          />{" "}
          <div className="beforeInput thirty">Age:</div>
          <input
            readOnly
            type="text"
            className="twenty"
            onClick={handleClick}
            defaultValue={daysSince()}
          />
        </div>
      </div>
      <div className="title">DEBT</div>
      <div className="section">
        <div className="div">
          <div className="beforeInput thirty">Principal:</div>
          <input
            readOnly
            type="text"
            className="twenty"
            onClick={handleClick}
            defaultValue={account.PRINCIPAL}
          />

          <div className="beforeInput thirty">Linked Balance:</div>
          <input
            readOnly
            type="text"
            className="twenty"
            onClick={handleClick}
            defaultValue={account.LINKED_BALANCE}
          />
        </div>
        <div className="div">
          <div className="beforeInput thirty">Balance:</div>
          <input
            readOnly
            type="text"
            className="twenty"
            onClick={handleClick}
            defaultValue={account.BALANCE}
          />{" "}
          <div className="beforeInput thirty">Payment Portal:</div>
          <input
            readOnly
            type="text"
            className="twenty"
            onClick={handleClick}
            defaultValue={account.PAYMENT_PORTAL}
          />{" "}
        </div>
        <div className="div">
          <div className="beforeInput thirty">Payments:</div>
          <input
            readOnly
            type="text"
            className="twenty"
            onClick={handleClick}
            defaultValue={account.PAYMENTS}
          />

          <div className="beforeInput thirty">Last Payment:</div>
          <input
            readOnly
            type="text"
            className="twenty"
            onClick={handleClick}
            defaultValue={account.LAST_PAYMENT}
          />
        </div>
        <div className="div">
          <div className="beforeInput thirty ">Date Last Payment:</div>
          <input
            readOnly
            type="text"
            className="twenty"
            onClick={handleClick}
            defaultValue={account.DATE_LAST_PAYMENT}
          />

          <div className="beforeInput thirty ">Date of Last Charge:</div>
          <input
            readOnly
            type="text"
            className="twenty"
            onClick={handleClick}
            defaultValue={account.DATE_OF_LAST_CHARGE}
          />
        </div>
      </div>
      <div className="title">CLIENT</div>
      <div className="section">
        <StatusComp account={account} />
        <div className="subTitle">DETAILS</div>
        <div className="div">
          <div className="beforeInput thirty">Client:</div>
          <input
            readOnly
            type="text"
            className="twenty"
            onClick={handleClick}
            defaultValue={account.CLIENT}
          />

          <div className="beforeInput thirty">Account Type:</div>
          <input
            readOnly
            type="text"
            className="twenty"
            onClick={handleClick}
            defaultValue={account.ACCOUNT_TYPE}
          />
        </div>
        <div className="div">
          <div className="beforeInput thirty">Creditor:</div>
          <input
            readOnly
            type="text"
            className="twenty"
            onClick={handleClick}
            defaultValue={account.CREDITOR}
          />

          <div className="beforeInput thirty">Account #:</div>
          <input
            readOnly
            type="text"
            className="twenty"
            onClick={handleClick}
            defaultValue={account.ACCOUNT_NUMBER}
          />
        </div>
        <div className="div">
          <div className="beforeInput thirty">Originated:</div>
          <input
            readOnly
            type="text"
            className="twenty"
            onClick={handleClick}
            defaultValue={account.ORIGINATED}
          />

          <div className="beforeInput thirty">Account Received:</div>
          <input
            readOnly
            type="text"
            className="twenty"
            onClick={handleClick}
            defaultValue={account.ACCOUNT_RECEIVED}
          />
        </div>
        <div className="div">
          <div className="beforeInput thirty">Imported on:</div>
          <input
            readOnly
            type="text"
            className="twenty"
            onClick={handleClick}
            defaultValue={account.IMPORTED_ON}
          />

          <div className="beforeInput thirty">Collector:</div>
          <input
            readOnly
            type="text"
            className="twenty"
            onClick={handleClick}
            defaultValue={account.COLLECTOR}
          />
        </div>
        <div className="div">
          <div className="beforeInput thirty">Client Claim #:</div>
          <input
            readOnly
            type="text"
            className="twenty"
            onClick={handleClick}
            defaultValue={account.CLIENT_CLAIM_NUMBER}
          />

          <div className="beforeInput thirty">Charged Off:</div>
          <input
            readOnly
            type="text"
            className="twenty"
            onClick={handleClick}
            defaultValue={account.CHARGED_OFF}
          />
        </div>
        <div className="div">
          <div className="beforeInput thirty">Purchased:</div>
          <input
            readOnly
            type="text"
            className="twenty"
            onClick={handleClick}
            defaultValue={account.PURCHASED}
          />

          <div className="beforeInput thirty">Queue:</div>
          <input
            readOnly
            type="text"
            className="twenty"
            onClick={handleClick}
            defaultValue={account.QUEUE}
          />
        </div>
        <div className="div">
          <div className="beforeInput thirty">Next Work:</div>
          <input
            readOnly
            type="text"
            className="twenty"
            onClick={handleClick}
            defaultValue={account.NEXT_WORK}
          />

          <div className="beforeInput thirty ">Debtor Payment ID:</div>
          <input
            readOnly
            type="text"
            className="twenty"
            onClick={handleClick}
            defaultValue={account.DEBTOR_PMT_ID}
          />
        </div>
        <div className="div">
          <div className="beforeInput thirty">Referring:</div>
          <input
            readOnly
            type="text"
            className="twenty"
            onClick={handleClick}
            defaultValue={account.REFERRING}
          />

          <div className="beforeInput thirty">Age:</div>
          <input
            readOnly
            type="text"
            className="twenty"
            onClick={handleClick}
            defaultValue={account.AGE}
          />
        </div>
        <div className="div">
          <div className="beforeInput thirty">Delinq #1:</div>
          <input
            readOnly
            type="text"
            className="twenty"
            onClick={handleClick}
            defaultValue={account.DELINQ_1}
          />

          <div className="beforeInput thirty">Sales Rep:</div>
          <input
            readOnly
            type="text"
            className="twenty"
            onClick={handleClick}
            defaultValue={account.SALES_REP}
          />
        </div>
      </div>
      <div className="title">DEBT INFORMATION</div>
      <div className="section">
        <div className="subTitle goldColor">BANKING INFORMATION</div>
        <div className="div">
          <div className="beforeInput thirty ">Bank Account Name:</div>
          <input
            readOnly
            type="text"
            className="twenty"
            onClick={handleClick}
            defaultValue={account.BANK_ACCT_NAME}
          />
          <div className="beforeInput thirty">Bank Routing:</div>
          <input
            readOnly
            type="text"
            className="twenty"
            onClick={handleClick}
            defaultValue={account.BANK_ROUTING}
          />
        </div>
        <div className="div">
          <div className="beforeInput thirty">Bank Account #:</div>
          <input
            readOnly
            type="text"
            className="twenty"
            onClick={handleClick}
            defaultValue={account.BANK_ACCT_NUMBER}
          />
          <div className="beforeInput thirty">Last Payment:</div>
          <input
            readOnly
            type="text"
            className="twenty"
            onClick={handleClick}
            defaultValue={account.LAST_PAYMENT}
          />
        </div>
        <div className="div">
          <div className="beforeInput thirty">Original Check #:</div>
          <input
            readOnly
            type="text"
            className="twenty"
            onClick={handleClick}
            defaultValue={account.ORIGINAL_CHECK_NUMBER}
          />{" "}
          <div className="beforeInput thirty">Product:</div>
          <input
            readOnly
            type="text"
            className="twenty"
            onClick={handleClick}
            defaultValue={account.PRODUCT}
          />
        </div>
        <div className="subTitle goldColor">DOCUMENTS</div>
        <div className="div">
          <div className="beforeInput thirty">Debtor Notifications:</div>
          <input
            readOnly
            type="text"
            className="twenty"
            onClick={handleClick}
            defaultValue={account.GENERATE_DEBTOR_DOCUMENT_NOTIFICATIONS}
          />
          <div className="beforeInput thirty">PDF:</div>
          <input
            readOnly
            type="text"
            className="twenty"
            onClick={handleClick}
            defaultValue={account.PDF}
          />
        </div>
        <div className="subTitle goldColor">DOB & SSN</div>
        <div className="div">
          <div className="beforeInput thirty">DOB:</div>
          <input
            readOnly
            type="text"
            className="twenty"
            onClick={handleClick}
            defaultValue={account.DOB}
          />
          <div className="beforeInput thirty">SSN:</div>
          <input
            readOnly
            type="text"
            className="twenty"
            onClick={handleClick}
            defaultValue={account.SSN}
          />{" "}
        </div>
        <div className="div">
          <div className="beforeInput thirty">Action Codes:</div>
          <input
            readOnly
            type="text"
            className="twenty"
            onClick={handleClick}
            defaultValue={account.ACTION_CODES}
          />

          <div className="beforeInput thirty">Letter Flows:</div>
          <input
            readOnly
            type="text"
            className="twenty"
            onClick={handleClick}
            defaultValue={account.LETTER_FLOWS}
          />
        </div>
      </div>
      <Others account={account} handleCopyClick={handleCopyClick} />
      <TLO account={account} handleCopyClick={handleCopyClick} />
      <Relatives account={account} handleCopyClick={handleCopyClick} />
    </div>
  );
}

export default TestAccount;
