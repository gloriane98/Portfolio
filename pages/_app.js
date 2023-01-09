import Navbar from '../components/Navbar';
import '../styles/globals.css';
import i18next from 'i18next';
import {initReactI18next} from "react-i18next";
import Backend from "i18next-http-backend";




function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar/>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
