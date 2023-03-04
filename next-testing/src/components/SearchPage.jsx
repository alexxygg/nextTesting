import React, { useState, useEffect } from "react";

import HeaderOtherLinks from "./HeaderOtherLinks";

import { supabase } from "../../lib/supabaseClient"; // Import Supabase client

const SearchPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchBy, setSearchBy] = useState("id");
  const [searchResults, setSearchResults] = useState(false);
  const [showNoMatches, setShowNoMatches] = useState(false);

  const handleSubmit = async (event) => {
    // Use async/await for Supabase client calls
    event.preventDefault();

    // If the search term is empty, set the search results to false
    if (searchTerm === "") {
      setSearchResults(false);
      setShowNoMatches(false);
      return;
    }

    // Fetch data from Supabase table
    const { data, error } = await supabase
      .from("accounts")
      .select("*")
      .ilike(searchBy, `%${searchTerm}%`)
      .order("id"); // Use Supabase's "ilike" to perform case-insensitive search
    if (error) {
      console.error(error);
      return;
    }

    setSearchResults(data);
    setShowNoMatches(data.length === 0);
  };

  const clearSearch = () => {
    setSearchTerm("");
    setSearchResults(false);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setSearchResults(false);
      setShowNoMatches(false);
    }, 40000);

    return () => {
      clearTimeout(timer);
    };
  }, [searchResults, showNoMatches]);

  return (
    <>
      {" "}
      <HeaderOtherLinks />{" "}
      <div className="paddedList">
        <div className="header">
          <div className="logo middle">FirePulse©</div>
        </div>{" "}
        <div className="title goldColor">Search all accounts:</div>
        <div className="searchBarDivAgain">
          <form className="searchBarDiv" action="#" onSubmit={handleSubmit}>
            <div className="searchBy">
              <label htmlFor="searchBy">Search by:</label>
              <select
                id="searchBy"
                name="searchBy"
                value={searchBy}
                onChange={(event) => setSearchBy(event.target.value)}
              >
                <option value="id">id</option>
                <option value="ACCOUNT_NUMBER">Account #</option>
                <option value="name">Name</option>
                <option value="TLO_PHONE">TLO Phone #</option>
                <option value="SSN">SSN</option>
                <option value="DOB">DOB</option>
              </select>
            </div>{" "}
            <input
              className="searchBar"
              type="text"
              placeholder=" id, Account #, Phone #, SSN, DOB..."
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
            />
            <button className="searchBtn" type="submit" value="Submit">
              Search
            </button>
          </form>
          {searchResults ? (
            searchResults.length > 0 ? (
              <div className="results">
                <div className="accountFromResults otherBg goldColor">
                  <div>id</div>
                  <div>Account #</div>
                  <div>Name</div>
                  <div>Phone #</div>
                  <div>SSN</div>
                  <div>DOB</div>
                </div>
                {searchResults.map((result) => (
                  <a
                    key={result.id}
                    className="accountFromResults"
                    href={`/accounts/${result.id}`}
                  >
                    <div>{result.id}</div>
                    <div>{result.ACCOUNT_NUMBER}</div>
                    <div>{result.name}</div>
                    <div>{result.TLO_PHONE}</div>
                    <div>{result.SSN}</div>
                    <div>{result.DOB}</div>
                  </a>
                ))}
                <button onClick={clearSearch} className="clearSearch">
                  Clear Search
                </button>
              </div>
            ) : showNoMatches ? (
              <div className="results">
                {" "}
                <div className="paddedList"> No matches found.</div>
                <button onClick={clearSearch} className="clearSearch">
                  Clear Search
                </button>
              </div>
            ) : null
          ) : null}
        </div>
      </div>
    </>
  );
};

export default SearchPage;
