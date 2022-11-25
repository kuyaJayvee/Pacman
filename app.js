var beginSound = document.getElementById("begin");
let eatSound = document.getElementById("eat");
let victorySound = document.getElementById("victory");


let board=[
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,0,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1],
    [1,2,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1],
    [1,2,1,2,2,1,1,2,2,2,2,2,2,2,1,1,2,2,2,2,2,1],
    [1,2,1,2,2,2,1,2,1,0,0,0,1,2,1,2,2,2,2,2,2,1],
    [1,2,1,2,2,2,1,2,1,0,0,0,1,2,1,2,2,2,1,2,2,1],
    [1,2,1,1,2,1,1,2,1,1,1,1,1,2,1,2,2,2,1,2,2,1],
    [1,2,2,2,2,2,1,2,2,2,2,2,2,2,1,2,2,2,1,2,2,1],
    [1,2,1,1,1,2,1,1,1,1,1,1,1,1,1,2,2,1,1,1,2,1],
    [1,2,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,2,1],
    [1,2,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,2,1],
    [1,2,1,2,2,2,2,2,2,2,2,2,2,1,2,2,2,2,2,1,2,1],
    [1,2,1,1,1,1,1,1,1,2,1,1,1,1,2,1,1,1,1,1,2,1],
    [1,2,2,2,2,2,2,2,2,2,1,2,2,2,2,2,2,2,2,2,2,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
];

let pacman = {
    x:1,
    y:1
};

function displayBoard(){
    let output='';
    for(let i=0; i<board.length; i++){
        output += '<div class="row">';
        for(let j=0; j<board[i].length; j++){
            if(board[i][j]==1)
                output += '<div class="wall"></div>';
            else if(board[i][j]==0)
                output += '<div class="empty"></div>';
            else if(board[i][j]==2)
                output += '<div class="coin"></div>';
        }
        output += '</div>'
    }
    
    document.getElementById('layout').innerHTML=output;
}


function displayPacman(){
    document.getElementById('pacman').style.top=pacman.y*30+"px";
    document.getElementById('pacman').style.left=pacman.x*30+"px";

}

let score = 0;

function playEat() {
    eatSound.play();
}
function playVictory(){
    victorySound.play();
}
function playBegin() {
        beginSound.play(); //play the audio file
        document.querySelector(".container").style.visibility = "visible"
        document.getElementById("btn-play").style.display = "none"
        document.querySelector(".title").style.visibility = "visible"
        document.querySelector(".score").style.visibility = "visible"
        document.body.style.backgroundColor = "blue"
}
setTimeout(()=>{
 document.onkeydown = function(e){    
     
     if(e.key =='ArrowRight' && board[pacman.y][pacman.x+1] !== 1){
        pacman.x++;
     document.getElementById('pacman').style.transform = "rotate(2deg)";
    }else if(e.key =='ArrowLeft' && board[pacman.y][pacman.x-1] !== 1){
        pacman.x--;
     document.getElementById('pacman').style.transform = "rotateY(180deg)";
    }else if(e.key =='ArrowUp' && board[pacman.y-1][pacman.x] !== 1){
        pacman.y--;
      document.getElementById('pacman').style.transform = "rotate(270deg)";
    }else if(e.key =='ArrowDown' && board[pacman.y+1][pacman.x] !== 1){
        pacman.y++;
         document.getElementById('pacman').style.transform = "rotate(-270deg)";
    }
      
    if(board[pacman.y][pacman.x]==2){
        board[pacman.y][pacman.x]=0;       
        playEat();
        score++;
        if(score === 182) {
          playVictory();
          document.body.querySelector('.finish').classList.add("add");
          document.getElementById("final-score").textContent = score;
          document.querySelectorAll(".hide").forEach((val) => {
            val.classList.add("hid")
          })

        }
        document.getElementById('score').textContent = score;
    }

     displayBoard();
     displayPacman();
  }
},5000)

displayBoard();
displayPacman();