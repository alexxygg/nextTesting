function UserSigned({ handleLogout, username }) {
  return (
    <div className="userSigned title">
      {" "}
      <div>Logged in </div>
      <button onClick={handleLogout} className="weirdBtn borderLeft">
        Log out
      </button>{" "}
    </div>
  );
}

export default UserSigned;
