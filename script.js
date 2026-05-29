// Welcome Message
const name = "Kimberley";
const welcome = document.getElementById("welcome");
welcome.textContent = "Welcome, " + name + "!";

// Study Counter
let count = 0;
const counter = document.getElementById("counter");
const addBtn = document.getElementById("addBtn");
const resetBtn = document.getElementById("resetBtn");

addBtn.addEventListener("click", function() {
    count++;
    counter.textContent = "Study sessions today: " + count;
});

resetBtn.addEventListener("click", function() {
    count = 0;
    counter.textContent = "Study sessions today: " + count;
});

// Weekly Goal Checker
const goals = ["Read and rewrite notes", "Finish assignments", "Practice JavaScript"];
const showGoalsBtn = document.getElementById("showGoals");
const goalList = document.getElementById("goalList");

// Print to console using loop
for (let i = 0; i < goals.length; i++) {
    console.log(goals[i]);
}

showGoalsBtn.addEventListener("click", function() {
    goalList.innerHTML = "";
    for (let i = 0; i < goals.length; i++) {
        const li = document.createElement("li");
        li.textContent = goals[i];
        goalList.appendChild(li);
    }
});

// Simple Decision
const hoursStudied = 3;

if (hoursStudied >= 3) {
    console.log("Good progress");
} else {
    console.log("You should study more");
}