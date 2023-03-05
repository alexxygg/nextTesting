import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <title>FirePulse</title>
      {/* <!-- our google font --> */}

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
