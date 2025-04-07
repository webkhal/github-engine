function Alert(props) {
	console.log(props);
	return (
		<>
			{/* Logical AND */}
			{props.alert != null && (
				<p className={`alert-${props.alert.type}`}>{props.alert.msg}</p>
			)}

			{/* ternary operator */}
			{/* {(props.alert != null) ? <p>{props.alert.msg}</p> : ""} */}
		</>
	);
}

export default Alert;
