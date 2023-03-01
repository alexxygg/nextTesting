import React from "react";
import Accounts from "../../components/Accounts";
import allAccounts from "allAccounts";
import Footer from "@/components/Footer";

export async function getStaticPaths() {
  const paths = allAccounts.map((account) => ({
    params: { id: account.id.toString() },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const res = await fetch(`http://localhost:3000/api/${params.id}`);
  const object = await res.json();

  return { props: { object: object } };
}

function AccountsPage({ object }) {
  return (
    <>
      <Accounts object={object} />
      <Footer />
    </>
  );
}

export default AccountsPage;
