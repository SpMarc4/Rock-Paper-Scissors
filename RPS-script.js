console.log("Hello World")

function getComputerChoice () {
    // Función sin variables de entrada ya que el ordenador decide de forma aleatoria.
    const randomNum = Math.random();
    // Se crea una variable con un numero del 0 a 1 con Math.random.
    // Se crea lógica condicional-
    // Si valor entre 0 - 1/3 devuelve "rock".
    if (randomNum >= 0 && randomNum < 1/3) {
        return "rock";
    }
    // Si valor entre 1/3 - 2/3 devuelve "paper"
    else if (randomNum >= 1/3 && randomNum < 2/3) {
        return "paper";
    }
    // Si valor entre 2/3 - (Math.random) devuelve "paper"
    else {
        return "scissors"
    };
    

}

function getHumanChoice () {
    // Función sin variables de entrada.
    // Se crea una variable que almacena un input pasado por el usuario.
    const humanNum = prompt("Choose rock, paper or scissors:").toLocaleLowerCase()
    if ((humanNum == "rock") || (humanNum == "paper") || (humanNum == "scissors")) {
        return humanNum
    }
    else {
        alert("Wrong choice!")
    };
}

console.log(getComputerChoice())
console.log(getHumanChoice())