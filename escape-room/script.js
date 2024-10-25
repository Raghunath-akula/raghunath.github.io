// Elements
const startButton = document.getElementById("start-button");
const gameScreen = document.getElementById("game-screen");
const startScreen = document.getElementById("start-screen");
const endScreen = document.getElementById("end-screen");
const roomTitle = document.getElementById("room-title");
const roomDescription = document.getElementById("room-description");
const answerInput = document.getElementById("answer-input");
const submitAnswerButton = document.getElementById("submit-answer");
const hint = document.getElementById("hint");
const restartButton = document.getElementById("restart-button");

// Rooms data
const rooms = [
    {
        title: "La Biblioteca Antigua",
        description: "Encuentra el libro con el título 'Sabiduría Infinita'.",
        answer: "Sabiduría Infinita",
        hint: "El conocimiento es poder; busca en el título."
    },
    {
        title: "La Galería de Arte",
        description: "Encuentra la obra con un detalle secreto que falta.",
        answer: "Detalles Ocultos",
        hint: "Cada obra tiene una historia única."
    },
    {
        title: "La Sala de Reliquias",
        description: "Desvela el secreto de la reliquia antigua.",
        answer: "Reliquia Antigua",
        hint: "Solo los sabios descifran el pasado."
    }
];

let currentRoom = 0;

// Start game
startButton.addEventListener("click", () => {
    startScreen.style.display = "none";
    gameScreen.style.display = "block";
    loadRoom();
});

// Load current room
function loadRoom() {
    if (currentRoom < rooms.length) {
        roomTitle.textContent = rooms[currentRoom].title;
        roomDescription.textContent = rooms[currentRoom].description;
        hint.textContent = rooms[currentRoom].hint;
        answerInput.value = "";
    } else {
        endGame();
    }
}

// Check answer
submitAnswerButton.addEventListener("click", () => {
    const answer = answerInput.value.trim();
    if (answer.toLowerCase() === rooms[currentRoom].answer.toLowerCase()) {
        currentRoom++;
        loadRoom();
    } else {
        alert("Respuesta incorrecta. Intenta de nuevo.");
    }
});

// End game
function endGame() {
    gameScreen.style.display = "none";
    endScreen.style.display = "block";
}

// Restart game
restartButton.addEventListener("click", () => {
    currentRoom = 0;
    endScreen.style.display = "none";
    startScreen.style.display = "block";
});
