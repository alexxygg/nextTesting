import React from "react";

function DispoSummary({ object, selectedDispositions }) {
  return (
    <div className="dispositionsNote " cols="100" rows="7" readOnly>
      {object.TLO_PHONE}
      <span className="goldColor">
        &nbsp;- &nbsp;{selectedDispositions.TLO_1_DISPOSITION}
      </span>
      &nbsp;, &nbsp; {object.TLO_PHONE_2}
      <span className="goldColor">
        &nbsp; - &nbsp; {selectedDispositions.TLO_2_DISPOSITION}
      </span>
      &nbsp;, &nbsp; {object.TLO_PHONE_3}
      <span className="goldColor">
        &nbsp;- &nbsp;{selectedDispositions.TLO_3_DISPOSITION}
      </span>
      &nbsp;, &nbsp; {object.TLO_PHONE_4}
      <span className="goldColor">
        &nbsp; - &nbsp; {selectedDispositions.TLO_4_DISPOSITION}
      </span>
      &nbsp;, &nbsp; {object.TLO_PHONE_5}
      <span className="goldColor">
        &nbsp;- &nbsp;{selectedDispositions.TLO_5_DISPOSITION}&nbsp; ...........
        &nbsp;
      </span>{" "}
    </div>
  );
}

export default DispoSummary;
