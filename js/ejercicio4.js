let estudiantes = [
	{ nombre: "Ana Torres", edad: 14, curso: "9A" },
	{ nombre: "Mateo Ruiz", edad: 15, curso: "10B" },
	{ nombre: "Lucía Gómez", edad: 13, curso: "8A" },
	{ nombre: "Samuel Díaz", edad: 16, curso: "11A" },
	{ nombre: "Valentina Cruz", edad: 14, curso: "9B" },
	{ nombre: "Diego Herrera", edad: 15, curso: "10A" },
	{ nombre: "Sofía Morales", edad: 14, curso: "9C" }
];

let formulario = document.querySelector("#formulario-busqueda");
let campoNombre = document.querySelector("#nombre");
let resultado = document.querySelector("#resultado");
let listaEstudiantes = document.querySelector("#lista-estudiantes");

estudiantes.forEach((estudiante) => {
	let elemento = document.createElement("li");
	elemento.textContent = estudiante.nombre;
	listaEstudiantes.append(elemento);
});

function normalizarNombre(nombre) {
	return nombre
		.trim()
		.normalize("NFD")
		.replace(/[\u0300-\u036f]/g, "")
		.toLocaleLowerCase("es");
}

formulario.addEventListener("submit", (evento) => {
	evento.preventDefault();

	let nombreBuscado = normalizarNombre(campoNombre.value);
	let estudiante = estudiantes.find(
		(estudiante) => normalizarNombre(estudiante.nombre) === nombreBuscado
	);

	if (!estudiante) {
		resultado.textContent = "No encontramos ese estudiante. Revisa el nombre e inténtalo de nuevo.";
		return;
	}

	resultado.textContent = `${estudiante.nombre}: ${estudiante.edad} años, curso ${estudiante.curso}.`;
});

