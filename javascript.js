let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");

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
const winner = () => {
    for (let wins of patterns) {
        console.log(boxes[patterns[0]], boxes[patterns[1]], boxes[patterns[2]]);
        let position0 = boxes[wins[0]].innerText;
        let position1 = boxes[wins[1]].innerText;
        let position2 = boxes[wins[2]].innerText;

        if (position0 != "" && position1 != "" && position2 !== "") {
            if (position0 == position1 && position1 == position2) {
                console.log("Winnrrrr", position0);
            }
        }
    }
}









