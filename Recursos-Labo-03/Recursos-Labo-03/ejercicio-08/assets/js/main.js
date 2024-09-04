const fibonacciCalculate = (value) => {
    console.log("Generando secuencia de Fibonacci hasta:"+ value);
    let fib = [0, 1]; // arreglo para la secuencia
    for (let i = 2; i < value; i++) { //no poner el = ya que eso hara que se sobrepase que  un numero que hayas puesto
        fib.push(fib[i - 1] + fib[i - 2]); //logica de la secuencia haciendo push al final del array el siguiente numero que salga
    }
    alert(fib);
};

const requestQuantity = () => {
   let value;
   do {
       try {
           value = prompt("¿Hasta qué número deseas generar la secuencia de Fibonacci?");
           value = Number(value); // Convertir el valor a número
           if (value === null || value === "" || value < 0 || !Number.isInteger(value)) { //combueba que es entero y no negativo
               throw new Error("El valor no puede ser negativo y tiene que ser un entero."); 
           }
           return value;
       } catch (error) {
           alert(error.message);
       }
   } while (true);
   
};

const main = () => {
    const value = requestQuantity();
    fibonacciCalculate(value);
};

main();
