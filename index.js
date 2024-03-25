const cellsAll = document.querySelectorAll(".cell");
let firstPlayer = "X";
let move = 0;
let winnerPerson = document.querySelector(".result");
const winningPositions =[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
]

//onst clickFunction = (cellId)=>{
//console.log(cellId);
//};

for(let i=0; i<cellsAll.length;i++){
cellsAll[i].addEventListener('click', ()=>{
    if(cellsAll[i].textContent) return;
    move+=1;
    cellsAll[i].textContent = firstPlayer;
    checkWinner();
    firstPlayer = firstPlayer === "X" ? "O" : "X";

});
}


const checkWinner = ()=>{
    if(move===cellsAll.length){
        winnerPerson.textContent = "It's a draw!";
        //console.log("It's a draw");
    }
     for(let i=0;i<winningPositions.length;i++){
        if(cellsAll[winningPositions[i][0]].textContent===firstPlayer && cellsAll[winningPositions[i][1]].textContent===firstPlayer && cellsAll[winningPositions[i][2]].textContent === firstPlayer){
            winnerPerson.textContent = "winner is "+firstPlayer;
            //console.log("winner is "+firstPlayer);
            resetGame();
        }
     }
};
const resetGame = () =>{
    move = 0;
    for(let i=0; i < cellsAll.length; i++){
        cellsAll[i].textContent = "";
        }
};