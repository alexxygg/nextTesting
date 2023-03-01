import React from "react";

function DispoSummary({ object, selectedDispositions }) {
  return (
    <div className="dispositionsNote " cols="100" rows="7" readOnly>
      {object.RELATIVE_1_PH1}
      <span className="goldColor">
        &nbsp;- &nbsp;{selectedDispositions.RELATIVE_1_DISPOSITION}
      </span>
      &nbsp;, &nbsp; {object.RELATIVE_1_PH2}
      <span className="goldColor">
        &nbsp; - &nbsp; {selectedDispositions.RELATIVE_2_DISPOSITION}
      </span>
      &nbsp;, &nbsp; {object.RELATIVE_1_PH3}
      <span className="goldColor">
        &nbsp;- &nbsp;{selectedDispositions.RELATIVE_3_DISPOSITION}
      </span>
      &nbsp;, &nbsp; {object.RELATIVE_2_PH1}
      <span className="goldColor">
        &nbsp; - &nbsp; {selectedDispositions.RELATIVE_4_DISPOSITION}
      </span>
      &nbsp;, &nbsp; {object.RELATIVE_2_PH2}
      <span className="goldColor">
        &nbsp;- &nbsp;{selectedDispositions.RELATIVE_5_DISPOSITION}
      </span>
      &nbsp;, &nbsp; {object.RELATIVE_2_PH3}
      <span className="goldColor">
        &nbsp; - &nbsp; {selectedDispositions.RELATIVE_6_DISPOSITION}
      </span>
      &nbsp;, &nbsp; {object.RELATIVE_3_PH1}
      <span className="goldColor">
        &nbsp;- &nbsp;{selectedDispositions.RELATIVE_7_DISPOSITION}
      </span>
      &nbsp;, &nbsp; {object.RELATIVE_3_PH2}
      <span className="goldColor">
        &nbsp; - &nbsp; {selectedDispositions.RELATIVE_8_DISPOSITION}
      </span>
      &nbsp;, &nbsp; {object.RELATIVE_3_PH3}
      <span className="goldColor">
        &nbsp;- &nbsp;{selectedDispositions.RELATIVE_9_DISPOSITION}
      </span>
      &nbsp;, &nbsp; {object.RELATIVE_4_PH1}
      <span className="goldColor">
        &nbsp; - &nbsp; {selectedDispositions.RELATIVE_10_DISPOSITION}
      </span>
      &nbsp;, &nbsp; {object.RELATIVE_4_PH2}
      <span className="goldColor">
        &nbsp;- &nbsp;{selectedDispositions.RELATIVE_11_DISPOSITION}
      </span>
      &nbsp;, &nbsp; {object.RELATIVE_4_PH3}
      <span className="goldColor">
        &nbsp; - &nbsp; {selectedDispositions.RELATIVE_12_DISPOSITION}
      </span>
      &nbsp;, &nbsp; {object.RELATIVE_5_PH1}
      <span className="goldColor">
        &nbsp;- &nbsp;{selectedDispositions.RELATIVE_13_DISPOSITION}
      </span>
      &nbsp;, &nbsp; {object.RELATIVE_5_PH2}
      <span className="goldColor">
        &nbsp; - &nbsp; {selectedDispositions.RELATIVE_14_DISPOSITION}
      </span>
      &nbsp;, &nbsp; {object.RELATIVE_5_PH3}
      <span className="goldColor">
        &nbsp; - &nbsp; {selectedDispositions.RELATIVE_15_DISPOSITION}&nbsp;
        ........... &nbsp;
      </span>
    </div>
  );
}

export default DispoSummary;
