import React from "react";
import PropTypes from "prop-types";

const ListInput = ({ handleKeyPress, task, handleChange, todos }) => {
	return (
		/* <form
			onSubmit={(e) => {
				e.preventDefault();
			}}> */
		<li className="list-group-item">
			<input
				type="text"
				value={task}
				placeholder="Whats needs to be done?"
				className="form-control Custom"
				name="input"
				onKeyPress={handleKeyPress}
				onChange={handleChange}
			/>
		</li>
		//</form>
	);
};

ListInput.propTypes = {
	handleKeyPress: PropTypes.func,
	task: PropTypes.string,
	handleChange: PropTypes.func,
	todos: PropTypes.array,
};

export default ListInput;
