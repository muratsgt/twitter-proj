import '../styles/globals.css';
import ThemeContext from "../store";
import { useState, useEffect} from 'react';

function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = useState("");
  const changeTheme = (value) => {
    setTheme(value);
    localStorage.setItem("THEME", value)
  };

  useEffect(() => {
    const lastTheme = localStorage.getItem("THEME");
    setTheme(lastTheme);
  }, [])

  useEffect(() => {
    const $html = document.querySelector("html");
    $html.className = theme;
  }, [theme])

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      <Component {...pageProps} />
    </ThemeContext.Provider>
  )
}

export default MyApp
