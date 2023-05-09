import { useEffect, useState } from "react";
import BusinessCardDisplay from "./BusinessCardDisplay";
import BusinessCardForm from "./BusinessCardForm";

export default function BusinessCardParent() {

	const [name, setName] = useState("Default Name");
	const [email, setEmail] = useState("test@email.com");
	const [editMode, setEditMode] = useState(false);


	useEffect(() => {
		console.log("Name was updated!");
	}, [name]);

	useEffect(() => {
		console.log("Email was updated!");
	}, [email]);

	useEffect(() => {
		console.log("Name OR Email was updated!");
	}, [name, email]);

	// constructor(props){
	// 	super(props);
	// 	this.state = {
	// 		name: "Default Name",
	// 		email: "Default Email",
	// 		editMode: false
	// 	}
	// }

	// updateName
	// updateEmail

	
	/**
	 * 
	 * @param {string} stateKey Some key from the component state.
	 * @param {string} newValue A new value relevant to that key.
	 * 
	 * Usage:
	 * 
	 * updateState("email", "test@email.com")
	 * 
	 * updateState("name","Alex")
	 */
	const updateState = (stateKey, newValue) => {
		// this.setState({
		// 	[stateKey]: newValue
		// });

		switch (stateKey) {
			case "name":
				setName(newValue);
				break;
			case "email":
				setEmail(newValue);
				break;
			default:
				console.error("Invalid state key used.");
				break;
		}
	}

	const toggleEditMode = () => {
		// this.setState({
		// 	editMode: !this.state.editMode
		// })
		setEditMode(!editMode);
	}

	return (
		<div>
			{
				editMode ? (
					<div>
						<BusinessCardForm
							name={name}
							email={email}
							updateState={updateState}
						/>
						<button onClick={toggleEditMode}>Toggle Edit Mode</button>
					</div >
				) : (
					<div>
						<BusinessCardDisplay name={name} email={email} />
						<button onClick={toggleEditMode}>Toggle Edit Mode</button>
					</div>
				)
			}
		</div>
	)

	// render(){
	// 	if (this.state.editMode){
	// 		// show the form
	// 		return(
	// 			<div>
	// 				<BusinessCardForm 
	// 					name={this.state.name}
	// 					email={this.state.email}
	// 					updateState={this.updateState}
	// 				/>
	// 				<button onClick={this.toggleEditMode}>Toggle Edit Mode</button>
	// 			</div>
	// 		)
	// 	} else {
	// 		// show the read-only data 
	// 		return (
	// 			<div>
	// 				<BusinessCardDisplay name={this.state.name} email={this.state.email} />
	// 				<button onClick={this.toggleEditMode}>Toggle Edit Mode</button>
	// 			</div>
	// 		)
	// 	}
	// }
}