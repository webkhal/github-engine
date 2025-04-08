import Users from "../components/Users/users.jsx";
import Search from "./search/search";
import Loading from "./Loading";
import { useContext } from "react";
import GithubContext from "../contexts/GitHub/githubContext";

function Home() {
	const { loading } = useContext(GithubContext);

	return (
		<>
			<Search />
			{loading ? <Loading /> : <Users />}
		</>
	);
}

export default Home;
