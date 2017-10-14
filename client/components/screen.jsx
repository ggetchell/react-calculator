import React from 'react'; // import React module
import ScreenRow from './screenRow';

// create our screen component as a functional component.
// it would display two scree rows, 1 for questions and the other for the answer
// the value would be passed down from it's parent component as a prop
const Screen = (props) => {
	return (
		<div className="screen">
			<ScreenRow value={props.question}/>
			<ScreenRow value={props.answer}/>
		</div>
	);
}

// define our props expected from the parent component
Screen.propTypes = {
	question: React.PropTypes.string.isRequired,
	answer: React.PropTypes.string.isRequired
}

// export our component
export default Screen;