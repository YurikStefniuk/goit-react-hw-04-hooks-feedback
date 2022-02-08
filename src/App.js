import React, { useState } from "react";

import Section from "./components/Section/Section";
import FeedbackOptions from "./components/FeedbackOptions/FeedbackOptions";
import Statistics from "./components/Statistics/Statistics";
import Notification from "./components/Notification/Notification";

const App = () => {
  const [good, setGood] = useState(0);
  const [bad, setBad] = useState(0);
  const [neutral, setNeutral] = useState(0);

  const onLeaveFeedback = (name) => {
    switch (name) {
      case "good":
        setGood((prev) => prev + 1);
        break;
      case "neutral":
        setNeutral((prev) => prev + 1);
        break;
      case "bad":
        setBad((prev) => prev + 1);
        break;

      default:
        return;
    }
  };

  const countTotalFeedback = () => {
    const total = good + neutral + bad;
    return total;
  };

  const positivePercentage = (bad, good, neutral) => {
    const countPositiveFeedbackPercentage =
      (good / countTotalFeedback(good, neutral, bad)) * 100;
    return Math.round(countPositiveFeedbackPercentage);
  };
  const options = {
    bad,
    good,
    neutral,
  };
  const feedbacksTotalAmount = countTotalFeedback();
  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions options={options} onLeaveFeedback={onLeaveFeedback} />
      </Section>
      <Section title="Statistics">
        {feedbacksTotalAmount === 0 && (
          <Notification message="No feedback given" />
        )}

        {feedbacksTotalAmount > 0 && (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={feedbacksTotalAmount}
            positivePercentage={positivePercentage}
          />
        )}
      </Section>
    </>
  );
};
export default App;
// export default class App extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0
//   };

// feedbackHandler = e => {
//   this.setState(prevState => {
//     const buttonId = e.target.id;
//     return {
//       [buttonId]: prevState[buttonId] + 1,
//     };
//   });
// };

//   countTotalFeedback = () =>
//     Object.values(this.state).reduce((acc, value) => acc + value, 0);

// countPositiveFeedbackPercentage = () => {
//   return Math.round((100 / this.countTotalFeedback()) * this.state.good);
// };

//   render() {
//     const { good, neutral, bad } = this.state;
//     const feedbacksTotalAmount = this.countTotalFeedback();
//     return (
//       <>
//         <Section title="Please leave feedback">
//           <FeedbackOptions
//             options={this.state}
//             onLeaveFeedback={this.feedbackHandler}
//           />
//         </Section>
//         <Section title="Statistics">
//           {feedbacksTotalAmount === 0 && (
//             <Notification message="No feedback given" />
//           )}

//           {feedbacksTotalAmount > 0 && (
//             <Statistics
//               good={good}
//               neutral={neutral}
//               bad={bad}
//               total={feedbacksTotalAmount}
//               positivePercentage={this.countPositiveFeedbackPercentage()}
//             />
//           )}
//         </Section>
//       </>
//     );
//   }
// }
