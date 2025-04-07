import { Link } from "react-router-dom";
function Navbar() {
	return (
		<nav>
			<Link to="/">Github Search</Link>
			<Link to="/contact">Contact Us</Link>
		</nav>
	);
}

export default Navbar;
