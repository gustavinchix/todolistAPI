import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

export function Form() {
	const [list, setList] = useState([]); // el primer elemento es la variable a cambiar (si necesito cambiar su valor, obvio xd) /// El segundo es la funcion que hay que llamar para poder cambiarlo (AJURO HAY QUE LLAMARLA *dunno why*) // El tercero (o el igual) es el valor inicial del primer elemento

	//Aqui lo que hice fue crear una funcion (constante/flecha) que dijera que si en el input(porque ahi es donde la llamo)-
	//hubiese una KEYPRESS de "Enter" Y tambien el valor del input no fuera "" (o sea completamente vacio) ENTONCES-
	//hago el setList (o sea cambiarle el valor de list) a lo que tenga el input, junto con lo que list ya tenia anteriormente (por eso los puntos suspensivos)-
	//cabe destacar que event.set.value se usa en el contexto en el cual se esta llamando la funcion, en este caso se refiere al valor que tenga dentro de la etiqueta <input>
	const agregarTodo = event => {
		if (event.key == "Enter" && event.target.value != "") {
			setList([...list, event.target.value]);
		}
	};

	const eliminarTarea = indexItem => {
		setList(() => list.filter((todo, index) => index !== indexItem));
	};

	return (
		<div>
			<input
				type="text"
				onKeyPress={agregarTodo}
				className="shadow"
				placeholder="What needs to be done?"
			/>
			<br />

			<ul>
				{list.map((item, index) => (
					<li key={index}>
						{item}
						<button
							className="btn"
							onClick={() => eliminarTarea(index)}>
							<i>
								<FontAwesomeIcon icon={faTimes} />
							</i>
						</button>
					</li>
				))}
			</ul>
		</div>
	);
	//En el {list.map} lo que estoy haciendo es basicamente recorriendo los valores de list ya existentes e imprimiendolos dentro de una etiqueta <li>-
	//lo que significa que si el valor de list cambiara, entonces se seguirian imprimiendo mas y mas  <li>{item}</li> (el item es el valor de list *creo*)
}
