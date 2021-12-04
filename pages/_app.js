import '../styles/globals.css';
import { ThemeContext, AuthContext } from "../store";
import { useState, useEffect } from 'react';
import { fetchData } from "../helper/useFetcher";

// TODO: after login page
const myUser = "muratakca9";

function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = useState("");
  const [currentUser, setcurrentUser] = useState({});

  useEffect(() => {
    // get last theme from local
    const lastTheme = localStorage.getItem("THEME");
    setTheme(lastTheme);

    // const lastUser = localStorage.getItem("LASTUSER");
    // setcurrentUser(JSON.parse(lastUser));
    // fetch data of the current user
    fetchData(`/api/user/${myUser}`)
      .then((res) => {
        setcurrentUser(res);
        // localStorage.setItem("LASTUSER", JSON.stringify(res));
      })
      .catch(err => console.log(`err`, err))
  }, [])

  // change html class according to theme
  useEffect(() => {
    const $html = document.querySelector("html");
    $html.className = theme;
  }, [theme])

  const setUser = (val) => {
    setcurrentUser(val);
  }

  const changeTheme = (value) => {
    setTheme(value);
    localStorage.setItem("THEME", value)
  };


  return (
    <AuthContext.Provider value={{ currentUser, setUser }}>
      <ThemeContext.Provider value={{ theme, changeTheme }}>
        <Component {...pageProps} />
      </ThemeContext.Provider>
    </AuthContext.Provider>
  )
}

export default MyApp;
