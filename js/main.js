//Funciones
function definirPuntuacionDeHabilidad (puntuacion) {
    let puntajeHabilidad = 0;
for (let i = 0; i < 3; i++) {
    let tirada = parseInt(prompt("Ingrese el resultado de una tirada, entre 1 y 6"));
    while (isNaN(tirada) || tirada < 1 || tirada > 6) {
        alert("El dato ingresado no es un numero o esta fuera de los valores indicados")
        tirada = parseInt(prompt("Ingrese el resultado de una tirada, entre 1 y 6"))
    }
    puntajeHabilidad = puntajeHabilidad + tirada;
}
    alert("El resultado de " + puntuacion + " es = " + puntajeHabilidad);
    console.log("El resultado de " + puntuacion + " es = " + puntajeHabilidad);
}

//Escoger Raza
const razasDisponibles = "Las razas disponibles son Humanos, Elfos, Enanos, Halflings"
console.log(razasDisponibles);
const opcionesRazas = "Indique el numero correspondiente a la raza deseada"
alert(opcionesRazas)
let seleccionRaza = parseInt(prompt("1- Humanos, 2- Elfos, 3- Enanos, 4- Halflings"));
while (isNaN(seleccionRaza) || seleccionRaza < 1 || seleccionRaza > 4) {
    alert("El valor ingresado no es correcto");
    seleccionRaza = prompt("1- Humanos, 2- Elfos, 3- Enanos, 4- Halflings") } 
    if (seleccionRaza == 1) {
        console.log("Usted ha seleccionado la raza de los Humanos");
    } else if (seleccionRaza == 2) {
        console.log("Usted ha seleccionado la raza de los Elfos");
    } else if (seleccionRaza == 3) {
        console.log("Usted ha seleccionado la raza de los Enanos");
    } else if (seleccionRaza == 4) {
        console.log("Usted ha seleccionado la raza de los Halflings");
    }

//Definir resultado de tiradas
alert("Ahora definiremos el resultado de las tiradas, sumando los tres valores que hayas obtenido en los dados para cada una de ellas");
const primerResultadoSumaDados = "la primer tirada"
definirPuntuacionDeHabilidad (primerResultadoSumaDados);
//Puntuacion de Constitucion
const segundoResultadoSumaDados = "la segunda tirada"
definirPuntuacionDeHabilidad (segundoResultadoSumaDados);
//Puntuacion de Destreza
const tercerResultadoSumaDados = "la tercer tirada"
definirPuntuacionDeHabilidad (tercerResultadoSumaDados);
//Puntuacion de Sabuduria
const cuartoResultadoSumaDados = "la cuarta tirada"
definirPuntuacionDeHabilidad (cuartoResultadoSumaDados);
//Puntuacion de Inteligencia
const quintoResultadoSumaDados = "la quinta tirada"
definirPuntuacionDeHabilidad (quintoResultadoSumaDados);
//Puntuacion de Carisma
const sextoResultadoSumaDados = "la sexta tirada"
definirPuntuacionDeHabilidad (sextoResultadoSumaDados);

// //Definir puntuaciones de habilidad
const asignarPuntuacion = "Asigne un resultado de los obtenidos anteriormente a cada habilidad, hasta haber utilizado el producto de todas las tiradas";
alert(asignarPuntuacion);

//Puntuacion de Fuerza
let puntuacionDeFuerza = "Fuerza";
Fuerza = parseInt(prompt("Ingrese le puntuacion de Fuerza"));
while (isNaN(Fuerza) || Fuerza <= 0 || Fuerza > 18) {
    alert("La puntuacion ingresada no es valida");
    Fuerza = parseInt(prompt("Ingrese correctamente la puntuacion de Fuerza"));
}
console.log("La puntuacion de Fuerza es : " + Fuerza);

// //Puntuacion de Constitucion
let puntuacionDeConstitucion = "Constitucion";
Constitucion = parseInt(prompt("Ingrese le puntuacion de Constitucion"));
while (isNaN(Constitucion) || Constitucion <= 0 || Constitucion > 18) {
    alert("La puntuacion ingresada no es valida");
    Constitucion = parseInt(prompt("Ingrese correctamente la puntuacion de Constitucion"));
}
console.log("La puntuacion de Constitucion es : " + Constitucion);

// //Puntuacion de Destreza
let puntuacionDeDestreza = "Destreza";
Destreza = parseInt(prompt("Ingrese le puntuacion de Destreza"));
while (isNaN(Destreza) || Destreza <= 0 || Destreza > 18) {
    alert("La puntuacion ingresada no es valida");
    Destreza = parseInt(prompt("Ingrese correctamente la puntuacion de Destreza"));
}
console.log("La puntuacion de Destreza es : " + Destreza);

// //Puntuacion de Sabuduria
let puntuacionDeSabiduria = "Sabiduria";
Sabiduria = parseInt(prompt("Ingrese le puntuacion de Destreza"));
while (isNaN(Sabiduria) || Sabiduria <= 0 || Sabiduria > 18) {
    alert("La puntuacion ingresada no es valida");
    Sabiduria = parseInt(prompt("Ingrese correctamente la puntuacion de Sabiduria"));
}
console.log("La puntuacion de Sabiduria es : " + Sabiduria);

// //Puntuacion de Inteligencia
let puntuacionDeInteligencia = "Inteligencia";
Inteligencia = parseInt(prompt("Ingrese le puntuacion de Inteligencia"));
while (isNaN(Inteligencia) || Inteligencia <= 0 || Inteligencia > 18) {
    alert("La puntuacion ingresada no es valida");
    Inteligencia = parseInt(prompt("Ingrese correctamente la puntuacion de Inteligencia"));
}
console.log("La puntuacion de Inteligencia es : " + Inteligencia);

// //Puntuacion de Carisma
let puntuacionDeCarisma = "Carisma";
Carisma = parseInt(prompt("Ingrese le puntuacion de Carisma"));
while (isNaN(Carisma) || Carisma <= 0 || Carisma > 18) {
    alert("La puntuacion ingresada no es valida");
    Carisma = parseInt(prompt("Ingrese correctamente la puntuacion de Carisma"));
}
console.log("La puntuacion de Carisma es : " + Carisma);


/* REPITO LOS CICLOS A PARTIR DE LA LINEA 60 PORQUE NO IDENTIFICO LA MANERA DE 
ASIGNAR EL RESULTADO DE LAS TIRADAS QUE SE PRODUCEN A PARTIR DE LA LINEA 35 A LAS
DISTINTAS PUNTUACIONES DE HABILIDAD DE LINEA 55 */