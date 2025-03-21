
const tasks = {
    hot: [
        "Trinke zwei Schlücke Bier",
        "Treffe mit dem Ball in den Becher mit geschlossenen Augen",
        "Fordere jemanden auf, einen Becher zu trinken"
    ],
    npc: [
        "Treffe drei Becher hintereinander",
        "Spiele die nächste Runde mit der linken Hand",
        "Erfinde eine neue Bierpong-Regel"
    ],
    custom: [
        "Mische die Becher auf deinem Tisch um",
        "Treffe innerhalb von 30 Sekunden einen Becher",
        "Versuche mit dem schwächeren Arm zu werfen"
    ]
};

let timer;
let timeLeft = 60;

function startGame(level) {
    const taskContainer = document.getElementById('task-container');
    const taskText = document.getElementById('task');
    const timerText = document.getElementById('timer');

    // Aufgabe setzen
    const randomIndex = Math.floor(Math.random() * tasks[level].length);
    taskText.innerText = tasks[level][randomIndex];

    // Timer starten
    timeLeft = 60;
    timerText.innerText = timeLeft;
    taskContainer.classList.remove('hidden');

    clearInterval(timer);
    timer = setInterval(() => {
        timeLeft--;
        timerText.innerText = timeLeft;
        if (timeLeft <= 0) {
            clearInterval(timer);
            alert("Zeit abgelaufen! 😬");
            taskContainer.classList.add('hidden');
        }
    }, 1000);
}

function completeTask() {
    clearInterval(timer);
    alert("Aufgabe erledigt! ✅");
    document.getElementById('task-container').classList.add('hidden');
}
