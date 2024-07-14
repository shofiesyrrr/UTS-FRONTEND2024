import React from "react";
import styles from "./Table.module.css";
import data from "../../utils/constants/provinces";
import ProvinceItem from "./ProvinceItem";


const Table = ({provinces}) => {
  return (
    <div id="table" className={styles.container}>
      <div className="tableheader">
        <h1 className={styles.title}>Provinsi</h1>
        <p className={styles.indonesia__subtitle}>
          Data Covid Berdasarkan Indonesia
        </p>
      </div>
      <div className={styles.containerTable}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th className={styles.head}>No</th>
              <th className={styles.head}>Provinsi</th>
              <th className={styles.head}>Sembuh</th>
              <th className={styles.head}>Dirawat</th>
              <th className={styles.head}>Meninggal</th>
            </tr>
          </thead>
          <tbody>
            {provinces.map((province, idx) => (
              <ProvinceItem province={province} idx={idx} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
