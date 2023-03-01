import React, { useEffect, useState } from "react";
import { supabase } from "../../lib/supabaseClient";

function TestingSupabase() {
  const [accounts, setAccounts] = useState([]);

  useEffect(() => {
    async function fetchAccounts() {
      const { data: accounts, error } = await supabase
        .from("accounts")
        .select("name, id, STATUS");
      if (error) {
        console.log(error);
      } else {
        setAccounts(accounts);
      }
    }
    fetchAccounts();
  }, []);

  return (
    <div>
      {accounts.map((account) => (
        <div key={account.id}>
          {account.name} -{account.id}- {account.STATUS}
        </div>
      ))}
    </div>
  );
}
export default TestingSupabase;
