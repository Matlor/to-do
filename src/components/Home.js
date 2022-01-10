import { Link } from "react-router-dom";

const Home = () => {
	return (
		<div>
			<h2>Home</h2>
			<Link to={`/list`}>Show To Do List</Link>
		</div>
	);
};

export default Home;
