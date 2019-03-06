// ej 5
// crea un array con la gente que empieza por J
// Sin utilizar el método filter de los arrays
// Utilizad el bucle for of
// y muéstralo por consola.

var gente = [{
        nombre: 'Jamiro',
        edad: 45
    },
    {
        nombre: 'Juan',
        edad: 35
    },
    {
        nombre: 'Pacor',
        edad: 34
    },
    {
        nombre: 'Peper',
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

var miArrayEmpiezaJ = []

for (var persona of gente) {
    if (persona.nombre[persona.nombre.length-1] === 'r'){   //termina con r[-1]. Pero hay que saber el lenght de la palabra
        miArrayEmpiezaJ.push (persona)
    }
}

console.log(miArrayEmpiezaJ)