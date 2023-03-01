// import fetch from "node-fetch";

import allAccounts from "../../../allAccounts";

export default async function handler(req, res) {
  const { id } = req.query;

  const account = allAccounts.find((account) => account.id === id);

  if (account) {
    res.status(200).json(account);
    console.log(account);
  } else {
    res.status(404).json({ message: `Account with id ${id} not found.` });
    console.log(account);
  }
}
