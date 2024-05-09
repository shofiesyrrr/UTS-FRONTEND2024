import React from "react";
import styles from "./Table.module.css";
import data from "../../utils/constants/provinces";
import { nanoid } from "nanoid";

const Table = () => {
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
            {data.provinces.map((province, idx) => (
              <tr className={styles.table__body} key={nanoid(3)}>
                <td>{idx + 1}</td>
                <td>{province.kota}</td>
                <td>{province.sembuh}</td>
                <td>{province.dirawat}</td>
                <td>{province.meninggal}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
