/*
! Aclaraciones:

* Es recomendado tener instalada la extensión "Better comments" para mejorar la lectura del ejercicio.

* En el apartado de ejemplos, al especificar el "output", si este contiene ">>" al principio, significa que ese resultado se mostrará por consola, de lo contrario, es el valor de retorno de la función.
Ejemplo:

    # mensaje por consola
    ? output:
    >> "mensaje"

    # retorno de la función
    ? output:
    "mensaje"
    
*/

/*
Todo: Ejercicio 4:

Crear una función llamada 'limpiarArray' que, al recibir como parámetro un array de números.
La función debe validar los números que se ingresan por el parámetro, asegurándose
de que no se repitan, y luego devolver un nuevo array sin números repetidos.

? La función debe validar:
    * Que el parámetro sea de tipo array.
    * Que dicho array solo contenga números.
    * Que no este vacío.

! De no cumplirse dichas validaciones debe de larzarse un error cuyo mensaje sea: "Array inválido."

Ejemplo:

    ? input:
    limpiarArray([1,2,3,3,4])

    ? output:
    [1,2,3,4]

*/

/*
Todo: Ejercicio 5:

Crear una función llamada 'mayorCombinacion' que, al recibir como parámetro un array de números
decubra, de todos los números que hay en el array, cuál es la dupla de números (2 números),
que como resultado resultado de la suma de estos sea la mayor combinación posible.
La función debe retornar el resultado de la suma de la mayor combinación y a su vez mostrar por consola la combinación en concreto. 

? La función debe validar:
    * Que el parámetro sea de tipo array.
    * Que dicho array solo contenga números.
    * Que contenga como mínimo 3 números en el array.
    * Que no tenga números repetidos (en caso contrario eliminar los números que se repitan).

Ejemplo 1:

    ? input:
    mayorCombinacion([1,2,3,4,5,6,7]);

    ? output:
    >> 6 y 7
    13

Ejemplo 2:
    ? input:
    mayorCombinacion([12,33,43,52,16,27,27]);

    ? output:
    >> 43 y 52
    95

Ejemplo 3:
    ? input:
    mayorCombinacion([12,16,33,59,59]);

    ? output:
    >> 33 y 59
    92   
*/

/*
Todo: Ejercicio 6:

Craer una función llamada "exitenEnFibonacci" que reciba como parámetro un array de números,
y que devuelva en un nuevo array aquellos números que pertenezcan a la sucesión de fibonacci.

? ¿Qué es la sucesión de fibonnaci?
    * La sucesión de Fibonacci es la sucesión de números que, empezando por la unidad (1), cada uno de sus términos es la suma de los dos anteriores (1,1,2,3,5,8,13,…). 

? La función debe validar:
    * Que el parámetro sea de tipo array.
    * Que dicho array solo contenga números.
    * Que contenga como mínimo 2 números en el array.
    * Que no tenga números repetidos (en caso contrario eliminar los números que se repitan).
    * Que no acepte en el array números negativos y tampoco números mayores 10^16 (10.000.000.000.000.000). 

Ejemplo 1:

    ? input:
    exitenEnFibonacci([13,32,5,319,2]);

    ? output:
    [13,5,2]

*/
