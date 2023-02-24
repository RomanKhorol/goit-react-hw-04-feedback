import Section from './Section/Section';
import Statistics from './Statistics/Statistics';
import Notification from './Notification/Notification';
import { FeeedbackOptions } from './FeedbackOptions/FeedbackOptions';
const { Component } = require('react');
class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  makeOpinionClick = option => {
    this.setState(prevState => {
      return {
        [option]: prevState[option] + 1,
      };
    });
  };
  render() {
    const total = this.state.bad + this.state.good + this.state.neutral;
    const positivePer = Math.round((this.state.good / total) * 100);

    return (
      <>
        <div
          style={{
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: 20,
            color: '#010101',
          }}
        >
          <Section title="Please live feedback">
            <FeeedbackOptions
              options={['good', 'neutral', 'bad']}
              onLeaveFeedback={this.makeOpinionClick}
            />
          </Section>

          <Section title="Statistic">
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={total}
              positivePercentage={positivePer}
            />
            <Notification title="There is no feedback" total={total} />
          </Section>
        </div>
      </>
    );
  }
}
export default App;
