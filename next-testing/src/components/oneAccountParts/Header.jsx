function Header({ account }) {
  return (
    <div className="header">
      <div className="logo">DEBTDYNAMIC©</div>
      <div>
        <div>
          Name: <span className="goldColor">{account.name}</span>{" "}
        </div>
        <div>
          Status: <span className="goldColor">{account.STATUS}</span>{" "}
        </div>
      </div>
    </div>
  );
}

export default Header;
