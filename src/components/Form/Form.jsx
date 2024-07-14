import React, { useState } from 'react';
import styles from './Form.module.css';
import icon2 from '../../assets/image/icon2.png';

const Form = ({ setProvinces }) => {
  const [formData, setFormData] = useState({
    provinsi: '',
    status: 'sembuh', // Default value
    jumlah: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const { provinsi, status, jumlah } = formData;

    setProvinces((prevProvinces) => {
      const updatedProvinces = [...prevProvinces];
      const provinceIndex = updatedProvinces.findIndex(
        (province) => province.kota === provinsi
      );
      if (provinceIndex === -1) {
        updatedProvinces.push({ kota: provinsi, [status]: parseInt(jumlah) });
      } else {
        updatedProvinces[provinceIndex][status] = (updatedProvinces[provinceIndex][status] || 0) + parseInt(jumlah);
      }

      return updatedProvinces;
    });

    // Reset form
    setFormData({
      provinsi: '',
      status: 'sembuh',
      jumlah: ''
    });
  };

  return (
    <div id="form" className={styles.container}>
      <section className={styles.form}>
        <form className={styles.form__right} onSubmit={handleSubmit}>
          <h2 className={styles.title}>Form Covid</h2>
          <div className={styles.formGroup}>
            <label htmlFor="provinsi">Provinsi</label>
            <input 
              type="text" 
              id="provinsi" 
              name="provinsi" 
              value={formData.provinsi}
              onChange={handleChange}
              className={styles.formInput} 
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="status">Status</label>
            <select 
              id="status" 
              name="status" 
              value={formData.status}
              onChange={handleChange}
              className={styles.formInput}
            >
              <option value="sembuh">Sembuh</option>
              <option value="dirawat">Dirawat</option>
              <option value="meninggal">Meninggal</option>
            </select>
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="jumlah">Jumlah</label>
            <input 
              type="number" 
              id="jumlah" 
              name="jumlah" 
              value={formData.jumlah}
              onChange={handleChange}
              className={styles.formInput} 
            />
          </div>
          <button type="submit" className={styles.submitButton}>
            Submit
          </button>
        </form>
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