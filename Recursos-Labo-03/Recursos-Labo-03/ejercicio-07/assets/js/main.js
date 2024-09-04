const requestValue = () => {
    let value;
    do {
        try {
            value = prompt("Introduce un valor a:");
            if (value === null || value.trim() === "") {
                throw new Error("El valor no puede estar vacío o ser nulo."); //mensaje en caso que sea nulo o vacio
            }
            return value;
        } catch (error) {
            alert(error.message); // lanza el mensaje
        }
    } while (true);
}

const main = () => {
    let number = [];
    
    number.push(requestValue());
    
    number.push(requestValue());
    
    // Intercambiar las posiciones del primer y segundo valor en el array
    [number[0], number[1]] = [number[1], number[0]];
    
    alert("Array con posiciones intercambiadas: a = " + number[0] + ", b = " + number[1]);
}

main();
