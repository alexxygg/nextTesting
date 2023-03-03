import React from "react";
import HeaderOtherLinks from "./HeaderOtherLinks";

function AboutPage() {
  return (
    <>
      <HeaderOtherLinks />

      <div id="paddedList2">
        <div className="aboutPage">
          <div className="header">
            <div className="logo middle">FirePulse©</div>
          </div>{" "}
          <div>About Page</div>
        </div>
      </div>
    </>
  );
}

export default AboutPage;
