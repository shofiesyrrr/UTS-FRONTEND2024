import React from "react";
import styles from "./Form.module.css"; 
import icon2 from "../../assets/image/icon2.png"

const Form = () => {
  return (
    <div id="form" className={styles.container}>
      <section className={styles.form}>
        <div className={styles.form__right}>
            <h2 className={styles.title}>Form Covid</h2>
            <div className={styles.formGroup}>
              <label htmlFor="provinsi">Provinsi</label>
              <input type="text" id="provinsi" className={styles.formInput} />
            </div>
            <div className={styles.formGroup}>
            <label htmlFor="provinsi">Status</label>
              <input type="text" id="provinsi" className={styles.formInput} />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="jumlah">Jumlah</label>
              <input type="number" id="jumlah" className={styles.formInput} />
            </div>
            <button type="submit" className={styles.submitButton}>
              Submit
            </button>
        </div>
        <div className={styles.form__left}>
          <img
            className={styles.form__image}
            src={icon2}
            alt="example"
          />
        </div>
      </section>
    </div>
  );
};

export default Form;
