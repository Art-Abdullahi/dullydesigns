import Navbar from "../components/navigation/Navbar";
import Navigation from "../components/navigation/Navigation";
import SideBar from "../components/navigation/SideBar";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navigation />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
