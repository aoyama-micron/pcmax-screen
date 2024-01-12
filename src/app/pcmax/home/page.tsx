import Header from "@/app/pcmax/home/header";
import { FC } from "react";

type HomeProps = {};

const Home: FC<HomeProps> = (props) => {
	return (
		<>
			<Header />
			<h1>ホーム</h1>
		</>
	);
};

export default Home;
