import PropTypes from 'prop-types';
import Button from '../Button/Button';


const FeedbackOptions = ({counterFeedback}) =>{
    return (
        <div>
            <Button onClick={()=>counterFeedback('neutral')}>neutral</Button>
            <Button onClick={()=>counterFeedback('good')}>good</Button>
            <Button onClick={()=>counterFeedback('bad')}>bad</Button>
        </div>
    )
}

FeedbackOptions.propTypes = {
    counterFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;