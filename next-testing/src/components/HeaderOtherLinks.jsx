import React from "react";
import Link from "next/link";
function HeaderOtherLinks() {
  return (
    <div className="otherSites ">
      <Link href="/">About FirePulse©</Link>
      <Link href="/accounts">All Accounts</Link>
      <Link href="/accounts/search">Search All</Link>
      {/* {ifUser(globalUser)} */}
    </div>
  );
}

export default HeaderOtherLinks;
