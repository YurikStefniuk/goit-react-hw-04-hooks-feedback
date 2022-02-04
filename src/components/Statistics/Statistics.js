import PropTypes from 'prop-types';
import styles from './Statistics.module.css';

export default function Statistics({
  good,
  bad,
  neutral,
  total,
  positivePercentage,
}) {
  return (
    <ul className={styles.statsList}>
      <li className={styles.statsListItem}>
        <p className={styles.itemText}>Good: {good}</p>
      </li>
      <li className={styles.statsListItem}>
        <p className={styles.itemText}>Neutral: {neutral}</p>
      </li>
      <li className={styles.statsListItem}>
        <p className={styles.itemText}>Bad: {bad}</p>
      </li>
      <li className={styles.statsListItem}>
        <p className={styles.itemText}>Total: {total}</p>
      </li>
      <li className={styles.statsListItem}>
        <p className={styles.itemText}>
          Positive feedback: {positivePercentage}%
        </p>
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
