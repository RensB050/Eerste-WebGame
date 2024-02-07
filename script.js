// Vraag de gebruiker om zijn naam in te vullen
let playerName = prompt("Voer je naam in:");
 
// Selecteer de HTML-elementen waar we naar willen verwijzen
const playerText = document.querySelector("#playerText");
const computerText = document.querySelector("#computerText");
const resultText = document.querySelector("#resultText");
const playerWinsSpan = document.querySelector("#playerWins");
const computerWinsSpan = document.querySelector("#computerWins");
const resetBtn = document.querySelector("#resetBtn");
const Btn = document.querySelectorAll(".Btn");
 
// Initialiseer variabelen om de keuze van de speler, de keuze van de computer en het resultaat van het spel bij te houden
let player;
let computer;
let result;
 
// Initialiseer variabelen om het aantal gewonnen spellen voor de speler en de computer bij te houden
let playerWins = 0;
let computerWins = 0;
 
// Vervang "Player" door de ingevoerde naam op de HTML-pagina
playerText.textContent = `${playerName}:`;
playerWinsSpan.textContent = `${playerName} Wins: 0`;
computerWinsSpan.textContent = `Computer Wins: 0`;
 
// Voeg event listeners toe aan de knoppen met de klasse "Btn"
Btn.forEach(button => button.addEventListener("click", () => {
    // Haal de tekst van de gekozen knop op en sla deze op in de variabele 'player'
    player = button.textContent;
 
    // Laat de computer een willekeurige keuze maken
    computerTurn();
 
    // Update de tekst op de HTML-pagina met de keuzes van de speler en de computer
    playerText.textContent = `${playerName}: ${player}`;
    computerText.textContent = `Computer: ${computer}`;
 
    // Bepaal het resultaat van het spel en update de tekst op de HTML-pagina
    result = determineWinner();
    resultText.textContent = result;
 
    // Update het aantal gewonnen spellen voor de speler en de computer
    if (result.includes(`${playerName} Wint`)) {
        playerWins++;
    } else if (result.includes(`${playerName} Verliest`)) {
        computerWins++;
    }
 
    // Update de weergave van het aantal gewonnen spellen op de HTML-pagina
    playerWinsSpan.textContent = `${playerName} Wins: ${playerWins}`;
    computerWinsSpan.textContent = `Computer Wins: ${computerWins}`;
 
    // Controleer of een speler 10 punten heeft bereikt en reset het spel indien nodig
    if (playerWins === 10 || computerWins === 10) {
        // Toon een melding wie als eerste 10 punten heeft bereikt
        alert(`${(playerWins === 10) ? playerName : "Computer"} heeft gewonnen!`);
        resetGame();
    }
}));
 
// Functie om de computer een willekeurige keuze te laten maken
function computerTurn() {
    const randNum = Math.floor(Math.random() * 5) + 1;
 
    switch (randNum) {
        case 1:
            computer = "🪨";
            break;
        case 2:
            computer = "📃";
            break;
        case 3:
            computer = "✂️";
            break;
        case 4:
            computer = "🔨";
            break;
        case 5:
            computer = "🪛";
            break;
    }
}
 

function determineWinner() {
    if (player === computer) {
        return "Gelijkspel!";
    }

    const winCombinations = {
        "🪨": ["✂️", "🪛"],
        "📃": ["🪨", "🔨"],
        "✂️": ["📃", "🪛"],
        "🔨": ["🪨", "✂️"],
        "🪛": ["🔨", "📃"],
    };

    if (winCombinations[player].includes(computer)) {
        return `${playerName} Wint`;
    } else {
        return `${playerName} Verliest!`;
    }
}


 
// Voeg een event listener toe aan de resetknop
resetBtn.addEventListener("click", resetGame);
 
// Functie om het spel te resetten
function resetGame() {
    // Zet de scores terug naar 0
    playerWins = 0;
    computerWins = 0;
 
    // Update de weergave van het aantal gewonnen spellen op de HTML-pagina
    playerWinsSpan.textContent = `${playerName} Wins: 0`;
    computerWinsSpan.textContent = `Computer Wins: 0`;
 
    // Reset de tekst op de HTML-pagina
    playerText.textContent = `${playerName}:`;
    computerText.textContent = "Computer:";
    resultText.textContent = "Result:";
 
    // Laat de speler opnieuw kiezen
    player = null;
    computer = null;
}