console.log("Hello World")

// Función sin variables de entrada ya que el ordenador decide de forma aleatoria.

function getComputerChoice () {
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
        return "scissors";
    };
    

};

// Función sin variables de entrada.

function getHumanChoice () {
    // Se crea una variable que almacena un input pasado por el usuario.
    const humanNum = prompt("Choose rock, paper or scissors:").toLowerCase()
    if ((humanNum == "rock") || (humanNum == "paper") || (humanNum == "scissors")) {
        return humanNum;
    }
    else {
        alert("Wrong choice!");
    };
};

// Se declaran las variables para almacenar las puntuaciones del usuario
// y PC.


// Función en el que se escoge el ganador de la ronda. Tiene de
// variables de entradas la selección del usuario y PC.

function playRound (humanChoice, computerChoice) {
    // Se crean todas las combinaciones del juego en formato codicional.
    // Si hay empate se devuelve 'tie'
    if ((humanChoice == 'rock' || humanChoice == 'paper' || humanChoice == 'scissors') && humanChoice == computerChoice) {
        console.log(`It's a tie! You both chose ${humanChoice.charAt(0)+humanChoice.slice(1)}.`);
        return 'tie';
    }
    // Si el humano gana devuelve 'wim'
    else if ((humanChoice == 'rock' && computerChoice == 'scissors') ||
     (humanChoice == 'scissors' && computerChoice == 'paper') ||
      (humanChoice == 'paper' && computerChoice == 'rock')) {
        console.log(`You win! ${humanChoice.charAt(0).toUpperCase()+humanChoice.slice(1)} beats ${computerChoice.charAt(0).toUpperCase()+computerChoice.slice(1)}.`);
        return 'win';
      }
    // Si el humano pierde se devuelve 'lose'
    else {
        console.log(`You lose! ${computerChoice.charAt(0).toUpperCase()+computerChoice.slice(1)} beats ${humanChoice.charAt(0).toUpperCase()+humanChoice.slice(1)}.`);
        return 'lose';
    };
    // Los return values de esta función se utilizarán en los condicionales de la función "playGame".
};

function playGame() {
    // Designación de variables, puntuaciones para cada jugador y resultado del juego de una ronda.
    let humanScore = 0;
    let computerScore = 0;
    let result = '';
    // Bucle en el que se juega 1 vez por iteración, llamando a la función playGround.
    for (let i = 0 ; i < 5; i++ ) {
        // Con la llamada de la función playGround se almacena una valor resultado que determina quien ha ganado al ronda.
        result = playRound(getHumanChoice(),getComputerChoice());
        // El resultado se utiliza en los condicionales para actualizar el resultado de la partida.
        if (result == 'win') {
            humanScore++
            console.log(`Human wins this round! | Scoreboard : Human (${humanScore}) - Computer (${computerScore})`)
        }
        else if (result == 'lose') {
            computerScore++
            console.log(`Computer wins this round! | Scoreboard : Human (${humanScore}) - Computer (${computerScore})`)
        }
        else {
            console.log(`It's a tie! | Scoreboard : Human (${humanScore}) - Computer (${computerScore})`)
        }
        ;
    };
    // Se crea otro condicional para declarar un ganador/perdedor/empate en función del resultado final.
    if (humanScore > computerScore) {
        console.log(`Human wins! | Scoreboard : Human (${humanScore}) - Computer (${computerScore})`)
    }
    else if (humanScore < computerScore) {
        console.log(`Computer wins! | Scoreboard : Human (${humanScore}) - Computer (${computerScore})`)
    }

    else {
        console.log(`It's a tie! | Scoreboard : Human (${humanScore}) - Computer (${computerScore})`)
    }
};

playGame()