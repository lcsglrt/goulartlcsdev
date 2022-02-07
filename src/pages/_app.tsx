import { AppProps } from 'next/app';
import Modal from 'react-modal';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import '../styles/global.scss';

Modal.setAppElement('#__next');

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp
