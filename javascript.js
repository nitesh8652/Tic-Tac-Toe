let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let imp = document.querySelector("#imp");
const msgContainer = document.querySelector(".msg-container");

let turnO = true;
const patterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

const resetg =()=>{
    turnO = true;
    // enabledbox();
    ebox();
    msgContainer.classList.add("hide");
    
}

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("clicked");
        if (turnO) {
            box.innerText = "X";
            turnO = false;
        } else {
            box.innerText = "O";
            turnO = true;
        }
        box.disabled = true;
        winner();

    });
});


const disabledbox=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
    }
// const enabledbox=()=>{
//     for(let box of boxes){
//         box.disabled=false;
//         box.innerText="";
//     }
//     }


const ebox=()=>{
for (let box of boxes){
    box.disabled=false;
    box.innerText="";
}
}

const checking_winner = (winner) => {
    msg.innerText = ` ${winner} Wins!`;
    msgContainer.classList.remove("hide");
    document.getElementById("hehe").style.backgroundColor = " red";
    disabledbox();

}


const winner = () => {
    for (let wins of patterns) {
        console.log(boxes[patterns[0]], boxes[patterns[1]], boxes[patterns[2]]);
        let position0 = boxes[wins[0]].innerText;
        let position1 = boxes[wins[1]].innerText;
        let position2 = boxes[wins[2]].innerText;

        if (position0 != "" && position1 != "" && position2 !== "") {
            if (position0 == position1 && position1 == position2) {
                console.log("Winnrrrr", position0);

                checking_winner(position0);
            }
        }
    }
}



document.addEventListener('DOMContentLoaded', function() {
    const reset = document.getElementById('reset');
    reset.addEventListener("click", resetg);
});


