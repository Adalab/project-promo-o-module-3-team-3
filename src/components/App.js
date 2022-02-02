import "../styles/App.scss";

import { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import postToApi from "../services/Api";
import ls from "../services/LocalStorage";
import Header from "./Header";
import Footer from "./Footer";
import Form from "./form/Form";
import Preview from "./preview/Preview";

function App() {
	const handleSubmit = (ev) => {
		ev.preventDefault();
	};

	// const [avatar, setAvatar] = useState("");
	const [data, setData] = useState(
		ls.get("data", {
			name: "",
			job: "",
			email: "",
			phone: "",
			linkedin: "",
			github: "",
			photo: "",
			palette: "1",
		})
	);

	useEffect(() => {
		ls.set("data", data);
	}, [data]);

	/* Metemos en una constante el input sobre el que está actuando la usuaria con el ev.currentTarget.name. Llamamos a esa constante para cambiar el valor de la propiedad del objeto data */

	const handleInput = (name, value) => {
		const inputChanged = name;
		setData({
			...data,
			[inputChanged]: value,
		});
	};

	/* Al hacer click en el reset, llamamos a handleReset que vacía todas las propiedades del objeto */

	const handleReset = () => {
		setData({
			name: "",
			job: "",
			email: "",
			phone: "",
			linkedin: "",
			github: "",
			photo: "",
			palette: "1",
		});
	};

	// const handleClick = (ev) =>{
	//   const clickButton = ev.currentTarget;

	//   // if (clickButton === )

	const updateAvatar = (avatar) => {
		setData({
			...data,
			photo: avatar,
		});
	};

	return (
		<div>
			<main className="cards__main--wrapper">
				<Header />
				<section className="card__wrapper">
					<Preview data={data} handleReset={handleReset} />
					<Form updateAvatar={updateAvatar} data={data} handleInput={handleInput} />
				</section>
				<Footer />
			</main>
		</div>
	);
}

export default App;
