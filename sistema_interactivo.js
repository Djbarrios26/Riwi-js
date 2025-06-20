//Inicializacion del Programa
console.log ('Bienvenido al Sistema Interactivo de Mensaje')

//Paso 1: Solicitamos nombre y edad al usuario
let nombreUsuario  = prompt('Ingrese su Nombre: ')
let edadUsuario = prompt ('Ingrese su Edad: ')

//Paso 2: Convertimos la edad en numero
edadUsuario = parseInt(edadUsuario);

//Paso 3: Validamos que la edad sea un número válido
if (isNaN(edadUsuario)){
    // Si la edad no es un número, mostramos un error en consola
    console.error('Por favor, ingrese una edad valida en numeros');

    // Paso 4: Mostrar mensaje personalizado según la edad
} else if (edadUsuario < 18){
    alert(`¡Hola ${nombreUsuario}! Eres menor de edad, sigue aprendiendo y creciendo cada día.`);
} else {
    alert(`¡Hola ${nombreUsuario}! Eres mayor de edad. Preparate para grandes oportunidades en el mundo de la programacion`);

}