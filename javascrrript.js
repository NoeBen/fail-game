//* CASOS DE PRUEBA DE JUEGO*// 
 //*El numero a adivinar es el 11, si el jugador acierta en tres intentos o menos se le obsequiá un vale*//
  //*Si el numero no es adivinado el jugador queda descalificado*//
    //*Si el jugador adivina los numeros especiales obtiene una chance extra!*//

    let min = "1"
    let max = "100"
    let attempts = "0"
    let maxAttempts = "3"
    let secretNumber = "11"
    document.getElementById("boton").addEventListener("click",start);

        const randomNumber = Math.floor((Math.random * 100)+1);
            if (randomNumber > secretNumber) {
                alert ('Try a smaller number than that')

            } else if (randomNumber < secretNumber) {
                console.log ('Try a bigger number than that')

            } else if (number="48","36","88","54","21","92","8","77","69") {
                alert('You guess the secret number that provides you an extra life.')

            } if (randomNumber == secretNumber) {
                alert ('Congrats, you do it!')

            } if (randomNumber > max) {
                alert ('Sorry, that number is not allowed')

            } for (maxAttempts(maxAttempts < 3;maxAttempts++))