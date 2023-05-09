import React from "react";

export default function BusinessCardForm(props) {

	function handleChangeInput (event) {
		props.updateState(event.target.name, event.target.value);
	}

	return(
		<form>
			<label>Name:</label>
			<input type="text" name="name"  value={props.name} onChange={handleChangeInput} />
			<label>Email:</label>
			<input type="text" name="email"  value={props.email} onChange={handleChangeInput} />
		</form>
	)
}
