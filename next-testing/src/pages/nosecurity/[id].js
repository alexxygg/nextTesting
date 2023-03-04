import Accounts from "@/components/Accounts";
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
      <Accounts />
      <Footer />
    </>
  );
}

export default AccountsPage;
