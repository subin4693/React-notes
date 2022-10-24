import React from 'react';
import './InputField.css';

const InputField = ({ setInputItems }) => {
	const [value, setValue] = React.useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		if (value.trim().length > 0) {
			setInputItems((prev) => {
				return [...prev, {
					"text": value,
					"key": Math.floor(Math.random() * 1000000),
				}];
			})
		}
		setValue("");
		// console.log(value);
	}

	return (
		<>
			<form onSubmit={handleSubmit}>
				<input type="text" name="input" value={value} placeholder="Notes..." onChange={e => setValue(e.target.value)} />
				<button type="submit"> send </button>
			</form>
		</>
	);
}

export default InputField;