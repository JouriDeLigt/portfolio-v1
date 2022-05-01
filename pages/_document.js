import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        {process.env.NEXT_PUBLIC_MODE == "production" && (
          <meta name="robots" content="all" />
        )}

        <link rel="icon" href="/static/logo/favicon.jpg" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
