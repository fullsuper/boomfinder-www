import Document, { Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <html>
        <Head>
          <link rel="shortcut icon" href="/favicon.ico" />
          <link rel="stylesheet" href="/loader.css" />
          <script src="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=places,geometry,drawing&key=AIzaSyA72EHVeUE3qZ4eG6BnHgxgfIWH48dTEDA" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
