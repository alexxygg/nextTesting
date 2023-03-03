import { useState } from "react";
import { useRouter } from "next/router";
import { supabase } from "lib/supabaseClient";

import Link from "next/link";

export default function SignUp() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSignUp = async (event) => {
    event.preventDefault();
    const id = Math.floor(Math.random() * 2000) + 1;
    // Insert a new user into the `users` table
    const { error } = await supabase.from("users").insert({
      id,
      username,
      password,
    });

    if (error) {
      console.log(error);
    } else {
      router.push("/");
    }
  };

  return (
    <div id="paddedList2">
      <form onSubmit={handleSignUp} className="loginPage">
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
          Sign up
        </button>
        <div>
          <p className="glass">Already an existing user? &nbsp;</p>
          <br />
          <Link href="/login" className="blue glass">
            Sign In
          </Link>
        </div>
      </form>
    </div>
  );
}
