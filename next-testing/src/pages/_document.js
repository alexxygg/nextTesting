import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <title>DebtDynamic</title>
      {/* <!-- our google font --> */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Oxygen&family=Permanent+Marker&display=swap"
        rel="stylesheet"
      />
      {/* <!-- our favicon --> */}
      <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}