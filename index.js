const diceEl = document.getElementById("dice");
const buttonEl = document.getElementById("roll-button");
const historyEl = document.getElementById("roll-history");

let historyList = []
/* burdaki fonkisyon ile matamtiksel olarak dögü yarattık  hisstorde gösterimi için */
function rollDice() {
    const randomNumber = Math.floor(Math.random() * 6) + 1;
    const diceFace = getdiceFace(randomNumber);
    diceEl.innerHTML = diceFace;
    historyList.push(randomNumber);
    updateHistory();
}
/* burdaki fonksiyon ile gösteriminii nasıl olcagını tanıttık */
function updateHistory() {
    historyEl.innerHTML = "";
    for (let i = 0; i < historyList.length; i++) {
        const listItem = document.createElement("li");
        listItem.innerHTML = `Roll ${i + 1}: <span>${getdiceFace(historyList[i])}</span>`;
        historyEl.appendChild(listItem);
    }
}

function getdiceFace(randomNumber) {
    switch (randomNumber) {
        case 1:
            return "&#9856;";
        case 2:
            return "&#9857;";
        case 3:
            return "&#9858;";
        case 4:
            return "&#9859;";
        case 5:
            return "&#9860;";
        case 6:
            return "&#9861;"
        default:
            return "";

    }
}

buttonEl.addEventListener("click", () => {
    diceEl.classList.add("roll-animation");
    setTimeout(() => {
        diceEl.classList.remove("roll-animation");
        rollDice();

    }, 1000)
}
);
