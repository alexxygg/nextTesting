import { useState, useEffect } from "react";
import Login from "@/components/Login";
import { useRouter } from "next/router";
import Header from "@/components/oneAccountParts/Header";
export default function App({ account }) {
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    // check if user is logged in
    if (!user && router.pathname !== "/login") {
      window.sessionStorage.setItem("prevUrl", router.asPath);
      router.push("/login");
    } else if (user && router.pathname === "/login") {
      const prevUrl = window.sessionStorage.getItem("prevUrl");
      if (prevUrl) {
        router.push(prevUrl);
        window.sessionStorage.removeItem("prevUrl");
      }
    }
  }, [user, router]);

  const handleLoginSuccess = () => {
    const prevUrl = window.sessionStorage.getItem("prevUrl");
    // router.push(prevUrl);
  };
  const handleLogout = () => {
    // remove user from state or local storage
    setUser(null);
    router.push("/login");
  };
  return (
    <>
      {user ? (
        <>
          <Header account={account} user={user} handleLogout={handleLogout} />
          // render the rest of your app here
        </>
      ) : (
        <Login
          user={user}
          setUser={setUser}
          onLoginSuccess={handleLoginSuccess}
        />
      )}
    </>
  );
}
