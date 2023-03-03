function Header({ account, user, handleLogout }) {
  return (
    <>
      <div className="header ">
        <div className="logo">FirePulse©</div>
        <div>
          {/* <div>
          Name: <span className="goldColor">{account.name}</span>{" "}
        </div>
        <div>
          Status: <span className="goldColor">{account.STATUS}</span>{" "}
        </div> */}
        </div>
      </div>
      <div className="header2">
        {" "}
        <div>
          User: &nbsp;<span className="blue">{user.username}</span>
        </div>
        <button onClick={handleLogout} className="searchBtn borderLeft">
          Logout
        </button>{" "}
      </div>
    </>
  );
}

export default Header;
