import PropTypes from 'prop-types';
import { BtnWrap, Btn } from './FeedBackOption.styled';
export const FeeedbackOptions = ({ options, onLeaveFeedback }) => (
  <BtnWrap>
    {options.map(option => {
      return (
        <Btn type="button" name={option} onClick={onLeaveFeedback} key={option}>
          {option}
        </Btn>
      );
    })}
  </BtnWrap>
);

FeeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
};
