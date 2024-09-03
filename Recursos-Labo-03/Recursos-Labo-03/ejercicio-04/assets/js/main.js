const createCounter = (number) => { //poner las alertas en el contador para mas facilidad
    let counter = 0;
    for(let i = 0; i < number; i++){
        counter++;
        alert(counter)
    }
    return counter;
}

const showCounter = () => { //no
    createCounter(number);
    for (let index = 0; index < number; index++) {
        alert(counter);
    }
}

const requestNumber=()=>{
    const number = prompt("Introduce un numero entero el cual desee contar: ");
    return number;
}

const main = () => {
  const number = requestNumber();

  createCounter(number);

}

main();
