import styles from "./Navbar.module.css";
import '@fontsource/poppins';

const Navbar = () => {
    return (
        <div id="navbar" className={styles.container}>
            <nav className={styles.navbar}>
                <div>
                    <h2 className={styles.navbar__brand}>Covid ID</h2>
                </div>
                <ul className={styles.navbar__list}>
                    <li className={styles.navbar__item}> <a href="#beranda">Tentang</a></li>
                    <li className={styles.navbar__item}> <a href="#indonesia">Indonesia</a></li>
                    <li className={styles.navbar__item}> <a href="#table">Provinsi</a></li>
                    <li className={styles.navbar__item}> <a href="#form">Formulir</a></li>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;