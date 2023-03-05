function UserSigned({ handleLogout }) {
  return (
    <div className="userSigned blackBg">
      {" "}
      <div className="bold">Logged in </div>
      <button onClick={handleLogout} className="weirdBtn borderLeft">
        Log out
      </button>{" "}
    </div>
  );
}

export default UserSigned;
