import PropTypes from "prop-types";
import styles from "./FeedbackOptions.module.css";

const FeedbackOptions = (props) => {
  const { options, onLeaveFeedback } = props;
  return (
    <>
      {Object.keys(options).map((name) => (
        <button
          className={styles.button}
          key={name}
          name={name}
          type="button"
          onClick={() => onLeaveFeedback(name)}
        >
          {name}
        </button>
      ))}
    </>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.object.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
export default FeedbackOptions;
