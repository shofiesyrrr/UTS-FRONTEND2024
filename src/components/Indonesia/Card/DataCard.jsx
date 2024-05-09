import styles from "./DataCard.module.css";

const DataCard = ({ data }) => {
  const statusClass = `${data.status}`;
  return (
    <div className={styles.status__box}>
      <h3 className={styles.status__label}>{data.status}</h3>
      <p className={styles[`status__${statusClass}`]}>{data.total}</p>{" "}
    </div>
  );
};

export default DataCard;
