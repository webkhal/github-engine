import Users from "./Users";
import Search from "./Search";
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
