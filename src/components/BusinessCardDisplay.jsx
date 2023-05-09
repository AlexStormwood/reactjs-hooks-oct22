
export default function BusinessCardDisplay(props){
	return (
		<div>
			<h1>{props.name}</h1>
			<h3>{props.email}</h3>
		</div>
	)
}