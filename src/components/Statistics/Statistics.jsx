import PropTypes from 'prop-types';
import Notification from '../Notification/Notification';
import css from './Statistics.module.css';

const Statistics = ({ good, neutral, bad }) => {
    const total = bad + good + neutral;
    const positivePercent = (good * 100) / total;

    if (good > 0 || neutral > 0 || bad > 0) {
        return (
            <div >
                <h2 >Statistics</h2>
                <ul >
                    <li >Good: {good}</li>
                    <li >Neutral: {neutral}</li>
                    <li >Bad: {bad}</li>
                </ul>
                <h2 >Total: {total}</h2>
                <h3 >
                    Positive feedback: {Math.floor(positivePercent)}%
                </h3>
            </div>
        );
    } else {
        return <Notification />;
    }
};

Statistics.propTypes = {
    stats: PropTypes.shape({
        good: PropTypes.number.isRequired,
        neutral: PropTypes.number.isRequired,
        bad: PropTypes.number.isRequired,
    }),
};

export default Statistics;