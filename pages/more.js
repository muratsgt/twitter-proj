import { useContext } from "react";
import Layout from "../components/layout/Layout";
import ThemeContext from "../store";
import styles from "./more.module.css";

function More() {
    const context = useContext(ThemeContext);
    const handleChange = (e) => {
        context.changeTheme(e.target.value);
    };

    return (
        <Layout>
            <div className={styles.more}>
                <h2 className={styles.head}>Theme</h2>
                <div className={styles.container}>
                    <label className={styles.light}>
                        <input
                            type="radio"
                            name="theme"
                            value="light"
                            checked={context.theme === "light"}
                            onChange={handleChange}
                        />
                        Light
                    </label>
                    <label className={styles.dim}>
                        <input
                            type="radio"
                            name="theme"
                            value="dim"
                            checked={context.theme === "dim"}
                            onChange={handleChange} />
                        Dim
                    </label>
                    <label className={styles.dark}>
                        <input
                            type="radio"
                            name="theme"
                            value="dark"
                            checked={context.theme === "dark"}
                            onChange={handleChange} />
                        Dark
                    </label>
                </div>
            </div>
        </Layout>
    )
};

export default More;