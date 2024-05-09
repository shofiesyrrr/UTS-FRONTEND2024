import styles from "./Beranda.module.css";
import icon1 from "../../assets/image/icon1.png";

const Beranda = () => {
  return (
    <div id="beranda" className={styles.container}>
      <section className={styles.beranda}>
        <div className={styles.beranda__left}>
          <h2 className={styles.beranda__title}>Covid ID</h2>
          <h3 className={styles.beranda__monitoring}>
            Monitoring Perkembangan Covid
          </h3>
          <p className={styles.beranda__description}>
            Infeksi menyebar dari satu orang ke orang lain melalui percikan
            pernapasan dari saluran pernapasan yang sering dihasilkan saat batuk
            atau bersin. Waktu dari paparan virus hingga timbulnya
            gejala klinis berkisar antara 1–14 hari dengan rata-rata 5 hari.
          </p>
          <button className={styles.beranda__button}>Vaccine</button>
        </div>
        <div className={styles.beranda__right}>
          <img className={styles.beranda__image} src={icon1} alt="example" />
        </div>
      </section>
    </div>
  );
};

export default Beranda;
