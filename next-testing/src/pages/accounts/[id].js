import Accounts from "@/components/Accounts";
import allAccounts from "../../../allAccounts";
import Footer from "@/components/Footer";
import { supabase } from "lib/supabaseClient";
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
  return (
    <>
      {account && <Accounts account={account} />}
      <Footer />
    </>
  );
}

export default AccountsPage;
