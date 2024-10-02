
let step,gameComplete;
let X=0,O=0;

const boxes=document.querySelectorAll('.box');


function startGame(){
  step=1;
  gameComplete=false;
  document.getElementById('button').innerHTML='<h3>Reset!</h3>';
  document.getElementById('turn').innerHTML=`<h3>It's Player <img class="button-img" src="https://th.bing.com/th/id/OIP.WY68zPpLRPea7iZXzeY4kwHaHa?w=175&h=180&c=7&r=0&o=5&dpr=2&pid=1.7.png"> turn</h3>`;

  pos=[0,1,2,3,4,5,6,7,8];
  for(let i=0;i<boxes.length;i++){
    boxes[i].innerHTML='';
    boxes[i].addEventListener('click',handler,{once:true});
  }
}



function handler(event){
  
  if(step%2!==0){
    
    document.getElementById(event.target.id).innerHTML='<img class="cross" src="https://th.bing.com/th/id/OIP.WY68zPpLRPea7iZXzeY4kwHaHa?w=175&h=180&c=7&r=0&o=5&dpr=2&pid=1.7.png">';
    document.getElementById('turn').innerHTML=`<h3>It's Player <img class="button-img"  src="https://cdn-icons-png.freepik.com/256/9450/9450455.png?semt=ais_hybrid.png"> turn</h3>`;//display which player turn it is.
    step++;
    pos[event.target.id]='x';
    winner('cross');
   
  }
  else{
    
  document.getElementById(event.target.id).innerHTML='<img class="nought" src="https://cdn-icons-png.freepik.com/256/9450/9450455.png?semt=ais_hybrid.png">';
  document.getElementById('turn').innerHTML=`<h3>It's Player <img class="button-img" src="https://th.bing.com/th/id/OIP.WY68zPpLRPea7iZXzeY4kwHaHa?w=175&h=180&c=7&r=0&o=5&dpr=2&pid=1.7.png"> turn</h3>`;//display which player turn it is.
  step++;
  pos[event.target.id]='o';
  winner('no');
  }

}

function winner(val){
 
  if((pos[0]===pos[1] && pos[1]===pos[2]) || (pos[0]===pos[4] && pos[4]===pos[8]) || (pos[6]===pos[4] && pos[4]===pos[2]) || (pos[6]===pos[7] && pos[7]===pos[8]) || (pos[0]===pos[3] && pos[3]===pos[6]) || (pos[3]===pos[4] && pos[4]===pos[5]) || (pos[1]===pos[4] && pos[4]===pos[7]) || (pos[2]===pos[5] && pos[5]===pos[8])){
    
    if(val==='cross'){
      
      document.getElementById('turn').innerHTML='<h3>&nbsp&nbsp<img class="button-img" src="https://th.bing.com/th/id/OIP.t1HZx6TZNLA5eTUHuTwRkwHaIP?w=143&h=180&c=7&r=0&o=5&dpr=2&pid=1.7.png"> Wins! Play Again</h3>';
      X++;
      document.getElementById('scoreX').innerHTML=`<h4>${X}</h4>`;

  
    }
    else{
  
      document.getElementById('turn').innerHTML='<h3>&nbsp&nbsp<img class="button-img"  src="https://cdn-icons-png.freepik.com/256/9450/9450455.png?semt=ais_hybrid.png"> Wins! Play Again</h3>';
      O++;
      document.getElementById('scoreO').innerHTML=`<h4>${O}</h4>`;
      
    }
     
    for(i=0;i<boxes.length;i++){
      boxes[i].removeEventListener('click',handler);
    }
    
   gameComplete=true;
  
  }
  
  else if(step===10){
    document.getElementById('turn').innerHTML="<h3>It's a DRAW! Play Again</h3>";
    gameComplete=true;
    
  }

}
startGame();

document.getElementById('turn').onclick=()=>{
  if(gameComplete){
  startGame();
  }
}
document.getElementById('button').onclick=()=>{
  reset();
}

function reset(){
  X=0;
  O=0;
  document.getElementById('scoreO').innerHTML=`<h4>${O}</h4>`;
  document.getElementById('scoreX').innerHTML=`<h4>${X}</h4>`;
  startGame();
}