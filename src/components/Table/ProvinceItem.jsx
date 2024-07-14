import styles from "./Table.module.css";
import { nanoid } from "nanoid";

const ProvinceItem = ({ province, idx }) => (
  <tr className={styles.table__body} key={nanoid(3)}>
    <td>{idx + 1}</td>
    <td>{province.kota}</td>
    <td>{province.sembuh}</td>
    <td>{province.dirawat}</td>
    <td>{province.meninggal}</td>
  </tr>
);

export default ProvinceItem;
