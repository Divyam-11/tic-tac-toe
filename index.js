turnX = true;
const box1 = document.querySelectorAll(".box");
let msgContainer = document.querySelector(".msg-container");
let msg1 = document.querySelector("#msg");
box1.forEach(boxy => {
    boxy.addEventListener('click',()=>{
        console.log("button was clicked");
        if(turnX){
            boxy.innerText = "X";
            turnX = false;
        }   
        else {
            boxy.innerText = "0";
            turnX = true;
        }
        boxy.disabled = true;
        count++;
        if(count == 9){
            gameDraw();
        }
        winner_checker();
    })
                                    
});
let count = 0;
const disableBoxes = () => {
    for (let box of boxes) {
      box.disabled = true;
    }
  };
  
  const enableBoxes = () => {
    for (let box of boxes) {
      box.disabled = false;
      box.innerText = "";
    }
  };
  

const showWinner = (winner) => {
    msg1.innerText = `Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
};
const gameDraw = () => {
    msg1.innerText = `Game was a Draw.`;
    msgContainer.classList.remove("hide");
    disableBoxes();
  };
let winningIndices = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],  // Horizontal
    [0, 3, 6], [1, 4, 7], [2, 5, 8],  // Vertical
    [0, 4, 8], [2, 4, 6]              // Diagonal
];
const winner_checker = () =>{
    for( patterns of winningIndices){
        let pos1val = box1[patterns[0]].innerText;
        let pos2val = box1[patterns[1]].innerText;
        let pos3val = box1[patterns[2]].innerText;
        if(pos1val != "" && pos2val != ""&&pos3val !=""){
            if(pos1val == pos2val && pos2val == pos3val){
                console.log("winner" ,pos1val);
                showWinner(pos1val);
            }
        }
    }
}