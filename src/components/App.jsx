import React, { useState } from 'react';
import Section from './Section/Section';
import Statistics from './Statistics/Statistics';
import Notification from './Notification/Notification';
import { FeeedbackOptions } from './FeedbackOptions/FeedbackOptions';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const makeOpinionClick = event => {
    const { name } = event.currentTarget;
    switch (name) {
      case 'good':
        setGood(prevGood => prevGood + 1);
        break;
      case 'neutral':
        setNeutral(prevNeutral => prevNeutral + 1);
        break;
      case 'bad':
        setBad(prevBad => prevBad + 1);
        break;

      default:
        break;
    }
  };

  const total = bad + good + neutral;
  const positivePer = Math.round((good / total) * 100);

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
            onLeaveFeedback={makeOpinionClick}
          />
        </Section>

        <Section title="Statistic">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePer}
          />
          <Notification title="There is no feedback" total={total} />
        </Section>
      </div>
    </>
  );
}
