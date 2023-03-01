import "./App.css";

import Accounts from "./Accounts";
import AccountsList from "./AccountsList";
import HomePage from "./HomePage";
import AboutPage from "./AboutPage";

import allAccounts from "./allAccounts";
//react router
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";

import NotFound from "./NotFound";
import Footer from "./Footer";
import { Login } from "./Login";
import SearchPage from "./SearchPage";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  // // Handle the page unload event
  // window.onbeforeunload = function () {
  //   // Set the local storage value to false
  //   setLoggedIn(false);
  // };

  return (
    <>
      {" "}
      <div className="App">
        <Router>
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route path="/accounts/search" element={<SearchPage />} />
            {allAccounts.map((object) => (
              <Route
                key={object.id}
                path={`/accounts/${object.id}`}
                element={<Accounts key={object.id} object={object} />}
              />
            ))}
            <Route path="/accountsList" element={<AccountsList />} />
            <Route
              element={<Login loggedIn={loggedIn} setLoggedIn={setLoggedIn} />}
              path="/login"
            />
            <Route path="/about" element={<AboutPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </div>
      <Footer />
    </>
  );
}

export default App;
