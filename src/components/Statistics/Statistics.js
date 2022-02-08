import PropTypes from "prop-types";
import styles from "./Statistics.module.css";

function Statistics(props) {
  const { good, neutral, bad, total, positivePercentage } = props;

  return (
    <ul className={styles.statsList}>
      <li className={styles.statsListItem}>
        <p className={styles.itemText} key="id-1">
          Good: {good}
        </p>
      </li>
      <li className={styles.statsListItem}>
        <p className={styles.itemText} key="id-2">
          Neutral: {neutral}
        </p>
      </li>
      <li className={styles.statsListItem}>
        <p className={styles.itemText} key="id-3">
          Bad: {bad}
        </p>
      </li>
      <li className={styles.statsListItem}>
        <p className={styles.itemText} key="id-4">
          Total: {total}
        </p>
      </li>
      <li className={styles.statsListItem}>
        Positive feedback:
        {good ? positivePercentage(good, neutral, bad) : 0}%
        <p className={styles.itemText} key="id-5"></p>
      </li>
    </ul>
  );
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
export default Statistics;
