import { Html, Head, Main, NextScript } from "next/document";
import Link from "next/link";
import Script from "next/script";
// import "flowbite";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <Link
          href="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.6/flowbite.min.css"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.6/flowbite.min.js"></Script>
      </body>
    </Html>
  );
}
