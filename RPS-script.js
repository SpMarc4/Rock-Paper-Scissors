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
let humanScore = 0;
let computerScore = 0;

// Función en el que se escoge el ganador de la ronda. Tiene de
// variables de entradas la selección del usuario y PC.

function playRound (humanChoice, computerChoice) {
    // Se crean todas las combinaciones del juego en formato codicional.
    if ((humanChoice == 'rock' || humanChoice == 'paper' || humanChoice == 'scissors') && humanChoice == computerChoice) {
        console.log(`It's a tie! You both chose ${humanChoice.charAt(0)+humanChoice.slice(1)}.`);
        return `It's a tie! You both chose ${humanChoice.charAt(0)+humanChoice.slice(1)}.`;
    }
    else if ((humanChoice == 'rock' && computerChoice == 'scissors') ||
     (humanChoice == 'scissors' && computerChoice == 'paper') ||
      (humanChoice == 'paper' && computerChoice == 'rock')) {
        ++humanScore
        console.log(`You win! ${humanChoice.charAt(0).toUpperCase()+humanChoice.slice(1)} beats ${computerChoice.charAt(0).toUpperCase()+computerChoice.slice(1)}.`);
        return `You win! ${humanChoice.charAt(0).toUpperCase()+humanChoice.slice(1)} beats ${computerChoice.charAt(0).toUpperCase()+computerChoice.slice(1)}.`;
      }
    else {
        ++computerScore
        console.log(`You lose! ${computerChoice.charAt(0).toUpperCase()+computerChoice.slice(1)} beats ${humanChoice.charAt(0).toUpperCase()+humanChoice.slice(1)}.`);
        return `You lose! ${computerChoice.charAt(0).toUpperCase()+computerChoice.slice(1)} beats ${humanChoice.charAt(0).toUpperCase()+humanChoice.slice(1)}.`;
    };
};

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection,computerSelection);