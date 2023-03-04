import React from "react";
import HeaderOtherLinks from "./HeaderOtherLinks";
import Link from "next/link";

function NotFound() {
  const handleClick = (event) => {
    event.preventDefault();
    window.history.back();
  };
  return (
    <>
      <HeaderOtherLinks />{" "}
      <div className="paddedList2">
        <div className="header ">
          <div className="logo middle">FirePulse©</div>
        </div>{" "}
        <div className="title goldColor">ERROR</div>
        <div className="notFound">
          <div className="notFoundA">Error 404</div>
          <div className="notFoundB">
            The resource you were looking for doesn't exist.
          </div>
          <Link href="#" onClick={handleClick}>
            Back
          </Link>
        </div>
      </div>
    </>
  );
}

export default NotFound;
