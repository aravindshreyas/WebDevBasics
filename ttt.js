var origBoard;
var count=0;
const playerOne="O";
const playerTwo="X";
const winCombinations =[
    [0,1,2],[3,4,5],[6,7,8],
    [0,3,6],[1,4,7],[2,5,8],
    [0,4,8],[6,4,2]
]
const cells=document.querySelectorAll('.cell');
document.getElementById("playerTurn").innerHTML="Player 1";
startGame();
function startGame(){
    count=0;
    origBoard=Array.from(Array(9).keys());
    for(var i=0;i<cells.length;i++)
    {
        cells[i].innerText='';
        cells[i].style.removeProperty('background-color');
        cells[i].addEventListener('click', turnClick,false);
    }
}
function turnClick(square){

         if((count%2==0)&&(count<9)){
            document.getElementById("playerTurn").innerHTML="Player 2";
            turn(square.target.id,playerOne);
            count++;
         }
        else if((count%2!=0)&&(count<9)){
            document.getElementById("playerTurn").innerHTML="Player 1";

            turn(square.target.id,playerTwo);
            count++
        
        }        
       
    

}
function turn(squareId,player){
    origBoard[squareId]=player;
    document.getElementById(squareId).innerText=player;
    let gameWon=checkWin(origBoard,player)
    if(gameWon) gameOver(gameWon)
}
function checkWin(board,player){
    let plays = board.reduce((a,e,i) =>
    (e==player) ? a.concat(i):a , [] );
    let gameWon=null;
    for(let[index,win] of winCombinations.entries())
    {
        if (win.every(elem=>plays.indexOf(elem)>-1)){
            gameWon={index:index,player:player}
            break;
        }
    }return gameWon;
}
function gameOver(gameWon){
    for(let index of winCombinations[gameWon.index]){
        document.getElementById(index).style.backgroundColor=
        gameWon.player==playerOne?"green":"red";
    }
    for(var i=0;i<cells.length;i++){
        cells[i].removeEventListener('click',turnClick,false);
    }
}
function checkTie(){
    if(emptySquares().length==0){
        for(var i=0;i<cells.length;i++)
        {
            cells[i].removeEventListener('click',turnClick,false)  
        }
        return true;
    }
    return false;
}

function emptySquares(){
    return origBoard.filter(s=>typeof s=='number');
}