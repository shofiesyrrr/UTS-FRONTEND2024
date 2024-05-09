import React from 'react';
import styles from './Indonesia.module.css';
import DataCard from './Card/DataCard';
import dataCovid from '../../utils/constants/indonesia'
import data from '../../utils/constants/provinces';


const Indonesia = () => {
  return (
    <div id="indonesia" className={styles.container}>
      <h1 className={styles.title}>Indonesia</h1>
      <p className={styles.indonesia__subtitle}>Data Covid Berdasarkan Indonesia</p>
      <div className={styles.status__boxes}>
        {
          dataCovid.indonesia.map((data) => (
            <DataCard data={data}/>
          ))
        }
      </div>
    </div>
  );
};

export default Indonesia;
