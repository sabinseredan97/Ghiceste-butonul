let submitBtn = document.getElementById("submitBtn");
let randomNumber;
let messageElement = document.getElementById("message");
let generatedBtn = document.getElementById("GeneratedBtn");

submitBtn.addEventListener('click', addButton);

displayMessage("Please click on a button");

function addButton() {
    let addedBtn = document.getElementById("number");
    let n = addedBtn.value;
    randomNumber = Math.floor(Math.random() * n) + 1;
    while (n > 0) {
        let button = document.createElement("button");
        button.innerHTML = "Click me";
        button.id = "GeneratedBtn";
        button.value = n;
        document.body.appendChild(button);
        --n;
    }
    let btns = document.querySelectorAll("#GeneratedBtn");
    for (let i = 0; i < btns.length; ++i) {
        btns[i].addEventListener('click', function () {
            if (btns[i].value == randomNumber) {
                displayMessage("You chosed the correct button");
                return true;
            }
            displayMessage("You chosed the wrong  button");
            return false;
        });
    }
}

function displayMessage(message) {
    messageElement.innerText = message;
}