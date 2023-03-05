function Header({ account, handleLogout }) {
  return (
    <div className="header ">
      <div className="logo">FirePulse©</div>
      <div>
        <div>
          Name: <span className="goldColor">{account.name}</span>{" "}
        </div>
        <div>
          Status: <span className="goldColor">{account.STATUS}</span>{" "}
        </div>
      </div>
      <div>
        <div className="userSigned ">
          {" "}
          <div></div>
          <button onClick={handleLogout} className="weirdBtn borderLeft">
            Log out
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
