import React from "react";
import { ContactCard } from "../component/ContactCard";
import "../../styles/home.css";
import rigoImage from "../../img/rigo-baby.jpg";

export const Home = () => (
	<div className="d-flex flex-column justify-center mt-5">
		<h1>Hello Rigo!</h1>
		<div className="list-group contact-list">
			<ContactCard
				name={"Leo"}
				address={"Medellin"}
				email={"leo@hotmail.com"}
				phone={"3761589"}
				img={rigoImage}
			/>
			<ContactCard
				name={"Leo"}
				address={"Medellin"}
				email={"leo@hotmail.com"}
				phone={"3761589"}
				img={rigoImage} />
			<ContactCard
				name={"Leo"}
				address={"Medellin"}
				email={"leo@hotmail.com"}
				phone={"3761589"}
				img={rigoImage} />
		</div>

	</div>
);
