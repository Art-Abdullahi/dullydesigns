import { useState } from "react";
import Navbar from "../components/navigation/Navbar";
import Navigation from "../components/navigation/Navigation";
import SideBar from "../components/navigation/SideBar";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../components/context/Global";
import { lightTheme, darkTheme } from "../components/context/theme";

function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
  return (
    <>
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <GlobalStyles />
        <Navigation toggleTheme={toggleTheme} />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
