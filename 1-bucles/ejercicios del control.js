var f = function() {
    var i = 4;  // i --> 4
    while (i < 7) {  // es correcta entonces continúo. Si no es correcta entonces paro y eso es el console.log.
        i = i + 2;  // Primero i --> 6 y vuelvo al while. Despues  i ---> 8 y vuelvo al while y me quedo ahí. 
     }
     console.log(i); // 8
}


var ejecutaUnBucleHasta = hasta => {
    for ( var i = 1; i <= hasta; i++) {
        if (i % 3 === 0) {
            console.log(i); // i --> 3 (solo muestra por consola el número final)
        }
    }
}


function f(a,b,c) {   //a es -2, b es true y c es 4
    if (b) {   // b == false, b === undefined 
        return 'b vale: ' + b;   // b vale: true
    }
    if (a < 0) {   // es correcto, es -2
        console.log ('a es menor que 0');  // entonces lo muestra
    }
    while (c) {
        console.log(c--);
    }
}

f(-2, true, 4) // 'b vale: true'


//a -2
//b true
//c 4


//-----------------------



function f2(i, j) {
    while (i--) {
        while (j--) {
            console.log(i, j);  // 1 2  , 1 1
        }
    }
}
f2(2, 3)

// i 2  1 0
// j 3 2 1 0 -1



function f3 () {
    for (var i = 0; i < 2; i++) {
        for (var j = 0; j < 3; j++){
            console.log(i, j); // 0 0, 0 1, 0 2, 0 3, 1 3, 2
        }
    }
}
f3(i, j)
//i 
//j 