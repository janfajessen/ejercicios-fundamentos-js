// ej 4
// crea un array con la gente mayor de 25 años.
// y muéstralo por consola.
// Sin utilizar el método filter de los arrays
// Utilizad el bucle for of

var gente = [{
    nombre: 'Jamiro',
    edad: 45
},
{
    nombre: 'Juan',
    edad: 35
},
{
    nombre: 'Paco',
    edad: 34
},
{
    nombre: 'Pepe',     // Esto son 2 claves dentro de 1 Objeto dentro de array 
    edad: 14
},
{
    nombre: 'Pilar',
    edad: 24
},
{
    nombre: 'Laura',
    edad: 24
},
{
    nombre: 'Jenny',
    edad: 10
},
]

var miArrayMayores = []
for (var persona of gente) {    // persona es el objeto
    if (persona.edad > 25){
        miArrayMayores.push (persona)   // para añadir la variable persona
    }
}
console.log(miArrayMayores)