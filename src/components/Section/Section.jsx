import PropTypes from 'prop-types';
import { SectionBtnTitle } from './Section.styled';
const Section = ({ title, children }) => (
  <section>
    <SectionBtnTitle>{title}</SectionBtnTitle>
    {children}
  </section>
);
Section.propTypes = {
  title: PropTypes.string.isRequired,
};
export default Section;
