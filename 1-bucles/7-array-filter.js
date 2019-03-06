// ej 7
// crea un array con la gente que su nombre
// empieza por J y sean menores de 40 años
// utilizando el método filter de los arrays
// y muéstralo por consola.


let gente = [{
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
        nombre: 'Pepe',
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
        nombre: 'jenny',
        edad: 10
    },
]

var miArrayJyMenos40 = []

for (var persona of gente) {
    var startWithJ = (persona.nombre[0] === 'J'  || persona.nombre[0] === 'j' );
     if (persona.edad < 40 && startWithJ) {
         miArrayJyMenos40.push (persona)
     }
}

console.log(miArrayJyMenos40)