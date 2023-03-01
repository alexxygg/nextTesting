import React from "react";
import HeaderOtherLinks from "./HeaderOtherLinks";
// import { Link } from "react-router-dom";

function NotFound() {
  const handleClick = (event) => {
    event.preventDefault();
    window.history.back();
  };
  return (
    <>
      <HeaderOtherLinks />{" "}
      <div id="paddedList2">
        <div className="header ">
          <div className="logo middle">DEBTDYNAMIC©</div>
        </div>{" "}
        <div className="title goldColor">ERROR</div>
        <div className="notFound">
          <div className="notFoundA">Error 404</div>
          <div className="notFoundB">
            The resource you were looking for doesn't exist.
          </div>
          <a href="#" onClick={handleClick}>
            Back
          </a>{" "}
        </div>
      </div>
    </>
  );
}

export default NotFound;
