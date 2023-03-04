import Link from "next/link";

function Login({
  loginFunction,
  username,
  setUsername,
  password,
  setPassword,
}) {
  return (
    <div className="paddedList2">
      <form onSubmit={loginFunction} className="loginPage">
        <div>
          <div></div>
          <div className="logo outlineWhite boxShadowed">FirePulse©</div>
          <div> Welcome back!</div>
        </div>
        <input
          type="email"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
        <input
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <button type="submit" className="weirdBtn borderLeft">
          Sign in
        </button>

        <div>
          <p className="glass">Not an existing user? &nbsp;</p>
          <br />
          <Link href="/signup" className="blue glass">
            Sign up
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Login;
