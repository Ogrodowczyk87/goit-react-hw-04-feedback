import PropTypes from 'prop-types';

import css from './FeedbackOptions.module.css';

const Feedback = ({ options, onLeaveFeedback }) => {
    return (
        <div>           
            <h1 className={css.feedback_title}>Please leave your feedback</h1>
            <ul >
                {options.map(option => (
                    <li className={css.good} key={option}>
                        <button name={option} onClick={() => onLeaveFeedback(option)}>
                            {option}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

Feedback.propTypes = {
    options: PropTypes.objectOf(PropTypes.string.isRequired),
    onLeaveFeedback: PropTypes.func.isRequired,
};

export default Feedback;