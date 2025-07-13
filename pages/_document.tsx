import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* Your other head elements */}
        </Head>
        <body>
          {/* NoScript iframe */}
          <noscript>
            <iframe
              src="https://www.googletagmanager.com/ns.html?id=GTM-K4328TRB"
              height="0"
              width="0"
              style={{ display: 'none', visibility: 'hidden' }}
            ></iframe>
          </noscript>

          {/* Main content of your page */}
          <Main />

          {/* Next.js Scripts */}
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
