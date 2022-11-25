const nombre = document.getElementById("usuario")
const email = document.getElementById("correo")
const password = document.getElementById("password")
const PersonFav = document.getElementById("PersonFav")
const form = document.getElementById("formulario")
const parrafo = document.getElementById("warnings")
const tipo = document.getElementById("problema")

const expresiones = {
    usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	password: /^.{4,12}$/, // 4 a 12 digitos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
}

const Personajes = 'Mariano Bondar'

console.log(Personajes)
form.addEventListener('submit', (e) =>{
    e.preventDefault();
	let warnings = ""
	let regexusuario = /^[a-zA-Z0-9\_\-]{4,16}$/;
	let regexemail =  /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
	parrafo.innerHTML=""
	if(!regexusuario.test(nombre.value)){
		warnings += `Letras y espacios, pueden llevar acentos <br/>`
		entrar = true
	} else if (nombre.value.length < 8){
		warnings +=`No Introduciste mas de 8 caracteres <br>`
		entrar = true
	}
	if(!regexemail.test(email.value)){
		warnings += `El email no es valido <br>`
		entrar.true
	}
	if(tipo.value == "-"){
		warnings +=`Porfavor introduzca un problema valido y haga una descripcion del mismo sino se le considera como invalido`
		entrar = true
	}
	if(entrar){
		parrafo.innerHTML = warnings
	}
}
)
