import React from "react";
import { Form } from "./form";

//create your first component
export function Home() {
	return (
		<div className="text-center">
			<h1>todos</h1>
			<Form />
		</div>
	);
}
