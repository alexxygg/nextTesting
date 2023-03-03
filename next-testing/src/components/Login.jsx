import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { supabase } from "lib/supabaseClient";

import Link from "next/link";

function Login({ user, setUser, onLoginSuccess }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  useEffect(() => {
    // check if user is logged in
    if (!user && router.pathname !== "/login") {
      window.sessionStorage.setItem("prevUrl", router.asPath);
      router.push("/login");
    } else if (
      user &&
      router.pathname === "/login" &&
      window.sessionStorage.getItem("prevUrl")
    ) {
      const prevUrl = window.sessionStorage.getItem("prevUrl");
      router.push(prevUrl);
      window.sessionStorage.removeItem("prevUrl");
    }
  }, [user, router]);

  const loginFunction = async (event) => {
    event.preventDefault();
    const { data, error } = await supabase
      .from("users")
      .select()
      .eq("username", username)
      .eq("password", password);
    if (error) {
      alert(error);
    } else {
      if (data.length > 0) {
        onLoginSuccess(); // call the onLoginSuccess prop
        // handleLogin(user);
        setUser(data[0]); // set the user state to the logged-in user
        alert("Logged in successfully");
      } else {
        alert("Invalid username or password");
      }
    }
  };

  return (
    <div id="paddedList2">
      <form onSubmit={loginFunction} className="loginPage">
        <div>
          <div> Welcome to </div>
          <div className="logo outlineWhite boxShadowed">FirePulse©</div>
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
        <button type="submit" className="searchBtn borderLeft">
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
