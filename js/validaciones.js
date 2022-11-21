const formulario = document.getElementById('formulario')
const inputs = document.querySelectorAll('#formulario input')
const textarea = document.getElementById('textarea')
const tipo = document.getElementById('problema')

const expresiones = {
    usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	password: /^.{4,12}$/, // 4 a 12 digitos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
}
const campos = {
	usuario: false,
	nombre: false,
	password: false,
	correo: false,
	telefono: false
}

const validarFormulario = (e) => {
	switch (e.target.name) {
		case "usuario"  :
			if(expresiones.usuario.test(e.target.value)){
                
            }
		break;
		case "nombre":
			validarCampo(expresiones.nombre, e.target, 'nombre');
		break;
		case "password":
			validarCampo(expresiones.password, e.target, 'password');
			validarPassword2();
		break;
		case "correo":
			validarCampo(expresiones.correo, e.target, 'correo');
		break;

	}
}
inputs.forEach((input) => {
    input.addEventListener('keyup', validarFormulario)

});
formulario.addEventListener('submit', (e) =>{
    e.preventDefault();
}
)
