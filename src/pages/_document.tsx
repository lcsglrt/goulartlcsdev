import Document, { Html, Head, Main, NextScript} from "next/document";
import Modal from 'react-modal';

Modal.setAppElement('#__next');

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap" rel="stylesheet" />
          <title>Goulart LCS</title>
          <link rel="shortcut icon" href="/assets/icons/favicon.svg" type="image/svg" />
        </Head>
        <body>
          <Main />
          <NextScript />
          <div id='react-modals'></div>
        </body>
      </Html>
    )
  }
}