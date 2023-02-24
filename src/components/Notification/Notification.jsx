import PropTypes from 'prop-types';

const Notification = ({ title, total }) => (
  <div>{total === 0 && <p>{title}</p>}</div>
);
Notification.propTypes = {
  title: PropTypes.string.isRequired,
};
export default Notification;
