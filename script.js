let boxes = document.querySelectorAll(".box");
let reset = document.querySelector(".resetbtn");
let turnO = true;
let msg_container = document.querySelector(".msg_container");
let msg = document.querySelector(".msg");
let Newgame = document.querySelector(".Newgame");

const winning = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];
const resetgame = ( ) =>{
    turnO=true;
    enableBox();
    msg_container.classList.add("none");
}
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnO === true) {
            box.innerHTML = "O";
            turnO = false;
        } else {
            box.innerHTML = "X";
            turnO = true;
        }
        box.disabled = true;
        checkwinner();
    });
});


const enableBox = () => {
    for (box of boxes) {
        box.disabled = false;
        box.innerHTML="";
        
    }
};
const showWinner = (winner) => {
    msg.innerHTML = `Congratulations! The winner is ${winner}`;
    msg_container.classList.remove("none");
    disableBox();
};

const checkwinner = () => {
    for (let pattern of winning) {
        let pos1Val = boxes[pattern[0]].innerHTML;
        let pos2Val = boxes[pattern[1]].innerHTML;
        let pos3Val = boxes[pattern[2]].innerHTML;

        if (pos1Val !== "" && pos2Val !== "" && pos3Val !== "") {
            if (pos1Val === pos2Val && pos2Val === pos3Val) {
                showWinner(pos1Val);
            }
        }
    }
};
Newgame.addEventListener("click",enableBox);
