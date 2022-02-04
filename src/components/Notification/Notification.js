import PropTypes from 'prop-types';
import styles from './Notification.module.css';

export default function Notification({ message }) {
  return <h3 className={styles.notificationTitle}>{message}</h3>;
}

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
