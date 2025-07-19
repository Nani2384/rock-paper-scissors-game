document.addEventListener("DOMContentLoaded", () => {
    let userscore = 0;
    let computerscore = 0;

    const choices = document.querySelectorAll('.choice');
    const msg = document.querySelector("#message");

    const userScorePara = document.querySelector("#user-score");
    const compScorePara = document.querySelector("#computer-score");

    const genCompChoice = () => {
        const options = ['rock', 'paper', 'scissors'];
        const randomIndex = Math.floor(Math.random() * 3);
        return options[randomIndex];
    };

    const playGame = (userChoice) => {
        console.log("User choice:", userChoice);
        const compChoice = genCompChoice();
        console.log("Computer choice:", compChoice); 


        msg.classList.remove("win", "lose", "draw"); 

        if (userChoice === compChoice) {
            console.log("Draw");
            msg.innerText = "It's a draw! Play again.";
            msg.classList.add("draw");
        } else if (
            (userChoice === "rock" && compChoice === "scissors") ||
            (userChoice === "paper" && compChoice === "rock") ||
            (userChoice === "scissors" && compChoice === "paper")
        ) {
            console.log("You win!");
            msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
            msg.classList.add("win");
            userscore++;
            userScorePara.textContent = userscore;

        } else {
            console.log("You lose!");
            msg.innerText = `You lose! ${compChoice} beats ${userChoice}`;
            msg.classList.add("lose");
            computerscore++;
            compScorePara.textContent = computerscore;
        }
    };

    choices.forEach((choice) => {
        choice.addEventListener('click', () => {
            const userChoice = choice.getAttribute("id");
            playGame(userChoice);
        });
    });
});