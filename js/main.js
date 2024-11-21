//Clases 
    class Personaje {
        constructor(nombrePersonaje, razaPersonaje, clasePersonaje, nivelPersonaje, profesionPersonaje){
        this.nombre = nombrePersonaje;
        this.raza = razaPersonaje;
        this.clase = clasePersonaje;
        this.nivel = nivelPersonaje;
        this.profesion = profesionPersonaje;
        }
        }

/*QUIERO LIMIRAR LAS OPCIONES EN LOS ELEMENTOS RAZA, CLASE, NIVEL, PROFESION, Y ENTIENDO QUE DEBERIA UTILIZAR METODOS
PERO NO ESTOY SEGURO COMO HACERLO, SI ME PUEDES DAR UNA PISTA LO TRABAJARE PARA LA PROXIMA*/

// Funciones
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

//Personajes de ejemplo
const personajesPredefinidosComoEjemplo = "Aqui algunos ejemplos de como deberian verse los personajes";
console.log(personajesPredefinidosComoEjemplo);
const personajeUno = new Personaje ("Valdir del Olmo", "Halfling" ,"Guerrero", "3", "Joyero");
console.log(personajeUno);
const personajeDos = new Personaje ("Raffikky", "Enano", "Clerigo", "7", "Carpintero");
console.log(personajeDos);
const personajeTres = new Personaje ("Urktar", "Humano", "Mago", "1", "Alquimista");
console.log(personajeTres);

//Creacion de Personaje
const nuevoPersonaje = new Personaje (
    this.nombre = prompt("Ingrese el nombre de su personaje"),
    this.raza = prompt("Ingrese la raza que desea jugar"),
    this.clase = prompt("Ingrese la clase que desea jugar"),
    this.nivel = parseInt(prompt("Ingrese el nivel del personaje")),
    this.profesion = prompt("Ingrese la profesion del personaje")
)
console.log(nuevoPersonaje);

// //Escoger Raza
const razasDisponibles = "Las razas disponibles son Humanos, Elfos, Enanos, Halflings"
console.log(razasDisponibles);
const opcionesRazas = "Indique el numero correspondiente a la raza deseada"
alert(opcionesRazas);
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

// Definir resultado de tiradas
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

// // //Definir puntuaciones de habilidad
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

// /* REPITO LOS CICLOS A PARTIR DE LA LINEA 60 PORQUE NO IDENTIFICO LA MANERA DE 
// ASIGNAR EL RESULTADO DE LAS TIRADAS QUE SE PRODUCEN A PARTIR DE LA LINEA 35 A LAS
// DISTINTAS PUNTUACIONES DE HABILIDAD DE LINEA 55 */

//Inventario Inicial
alert("El inventario inicial del personaje se compone de un pack de coste 2, un pack de coste 6, un pack de coste 4 y otro pack de coste 3");
const inventarioInicial = [
    {
        arma: "Daga",
        equipo: "Mochila",
        coste: 2,    
    },
    { 
        arma: "Espada larga",
        equipo: "Bolsa de dormir",
        coste: 6,
    },
    {
        arma: "Arco corto",
        equipo: "Cuerda de cañamo",
        coste: 4,
    },
    {
        arma: "Dardos",
        equipo: "Utensilios basicos de cocina",
        coste: 3,
    },
    {
        arma: "Cuchilla",
        equipo: "Herramientas de escalado",
        coste: 2,
    },
    {
        arma: "Rapier",
        equipo: "Tienda de campaña",
        coste: 6,
    },
    {
        arma: "Ballesta de mano",
        equipo: "Herramientas de bribon",
        coste: 4,
    },
    {
        arma: "Dagas arrojadizas",
        equipo: "Disfraces",
        coste: 3,
    },
    {
        arma: "Cerbatana",
        equipo: "Yesca y pedernal",
        coste: 2,
    },
    {
        arma: "Hacha de dos manos",
        equipo: "Mapa de la region",
        coste: 6,
    },
    {
        arma: "Jabalinas",
        equipo: "Raciones secas",
        coste: 4,
    },
    {
        arma: "Hachas arrojadizas",
        equipo: "Herramientas de reparacion",
        coste: 3,
    },
];

console.log(inventarioInicial);

const totalCoste = inventarioInicial.reduce ((acc, el) => {
    return acc + el.coste / 3;
}, 0);
console.log("EL coste total del equipamiento base es de " + totalCoste);

const costeIgualA2 = inventarioInicial.filter( (el) => {
    return el.coste === 2;
});
console.log(costeIgualA2);

const costeIgualA6 = inventarioInicial.filter( (el) => {
    return el.coste === 6;
});
console.log(costeIgualA6);

const costeIgualA4 = inventarioInicial.filter( (el) => {
    return el.coste === 4;
});
console.log(costeIgualA4);

const costeIgualA3 = inventarioInicial.filter( (el) => {
    return el.coste === 3;
});
console.log(costeIgualA3);