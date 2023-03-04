import Accounts from "@/components/Accounts";
import Footer from "@/components/Footer";
import UserSigned from "@/components/UserSigned";
import Login from "@/components/Login";

import { supabase } from "lib/supabaseClient";

import { useState, useEffect } from "react";
import { useRouter } from "next/router";

export async function getServerSideProps({ params }) {
  const { data, error } = await supabase
    .from("accounts")
    .select()
    .eq("id", params.id)
    .single();

  if (error) {
    console.log(error);
    return { notFound: true };
  }

  return { props: { account: data } };
}

function AccountsPage({ account }) {
  const [user, setUser] = useState(null);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

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
        // handleLogin(user);
        setUser(data[0]); // set the user state to the logged-in user
        localStorage.setItem("user", JSON.stringify(data[0])); // save the user state to local storage
        alert("Logged in successfully");
      } else {
        alert("Invalid username or password");
      }
    }
  };

  const handleLogout = async () => {
    // remove user from state and local storage
    setUser(null);
    localStorage.removeItem("user");
    await router.push("/");
  };

  // Check if there is a user state saved in local storage when the component is mounted
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);
  return (
    <>
      {user ? (
        <>
          <Accounts />
          <Footer />
        </>
      ) : (
        // render the rest of your app here
        <Login
          loginFunction={loginFunction}
          username={username}
          setUsername={setUsername}
          password={password}
          setPassword={setPassword}
        />
      )}
    </>
  );
}

export default AccountsPage;
