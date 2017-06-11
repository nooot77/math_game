//------------------------------------------------------------//

var playing=false;
var score;
var timeremaining;
//if we click on the start/reset
document.getElementById("startreset").onclick=function() {
  //if we are playing
  if (playing==true) {
    location.reload();  //reload page
  }else { //if we are'nt playing

    playing = true;
    score =0; // set score to 0
    document.getElementById("scorevalue").innerHTML=score;
    show("timeremaining");

    //hide game over box
        hide("gameover");

  //show countdown box

    timeremaining = 60 ;
    document.getElementById("timeremainingvalue").innerHTML=timeremaining;
    document.getElementById("startreset").innerHTML="Reset Game"; //change button to reset

  startCountdown();

generateQA();

}
}

//Clicking on an answer box
      for(i=1; i<5; i++){
          document.getElementById("box"+i).onclick = function(){
//check if we are playing
      if(playing == true){//yes
        if(this.innerHTML == correctAnswer){
//correct answer

//increase score by 1
      score++;
      document.getElementById("scorevalue").innerHTML = score;
//hide wrong box and show correct box
        hide("wrong");
          show("correct");
            setTimeout(function(){
              hide("correct");
                        }, 1000);
//Generate new Q&A
      generateQA();
      }else{
//wrong answer
      hide("correct");
        show("wrong");
          setTimeout(function(){
            hide("wrong");
                }, 1000);
}
  }
    }
      }
//functions


//start counter
function startCountdown() {
  action = setInterval(function(){
  timeremaining-=1;
  document.getElementById("timeremainingvalue").innerHTML=timeremaining;
  if (timeremaining ==0) {
    stopCountdown();

      show("gameover");
    document.getElementById("gameover").innerHTML="your score is "+score;


      hide("timeremaining");
      hide("correct");
      hide("wrong");
      playing=false;
      document.getElementById("startreset").innerHTML="Start Game";
  }
  },1000);
}


//stop counter
function stopCountdown() {
clearInterval(action);
}

// hide an element
function hide(Id){
  document.getElementById(Id).style.display="none";
}

//show an element
function show(Id){
  document.getElementById(Id).style.display="block";
}

//generate question and answer

function generateQA() {
var x = 1+Math.round(9*Math.random());
var y = 1+Math.round(9*Math.random());

correctAnswer =x*y;
document.getElementById("question").innerHTML= x + "x"+y;
var correctPosition=1+Math.round(3*Math.random());
//fill one box by correctAnswer ;
document.getElementById("box"+correctPosition).innerHTML= correctAnswer;

var answers = [correctAnswer];

for (i = 1; i < 5; i++) {
  if (i!=correctPosition) {
    var wrongAnswer ;

    do{
      wrongAnswer=(1+Math.round(9*Math.random()))*(1+Math.round(9*Math.random()));
    }while (answers.indexOf(wrongAnswer)>=1)




    document.getElementById("box"+i).innerHTML=wrongAnswer;


    answers.push(wrongAnswer);
  }

}
}



//------------------------------------------------------------//
