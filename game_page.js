player1_name=localStorage.getItem("player1_name");
player2_name=localStorage.getItem("player2_name");

player1_score=0;
player2_score=0;

document.getElementById("player1_name").innerHTML=player1_name+" : ";
document.getElementById("player2_name").innerHTML=player2_name+" : ";

document.getElementById("player1_score").innerHTML=player1_score;
document.getElementById("player2_score").innerHTML=player2_score;

document.getElementById("player_question").innerHTML="Question Turn - " + player1_name;
document.getElementById("player_answer").innerHTML="Answer Turn - " + player2_name;



function send(){
    get_word=document.getElementById("word_input").value;
    word=get_word.toLowerCase();
    console.log("word in lower case- " + word);

    charAt1=word.charAt(1);
    console.log(charAt1);

    length_divide=Math.floor(word.length/2);
    charAt2=word.charAt(length_divide);
    console.log(charAt2);

    length_minus=word.length - 1;
   charAt3=word.charAt(length_minus);
   console.log(charAt3);

   remove_charAt1=word.replace(charAt1 , "_");
   remove_charAt2=remove_charAt1.replace(charAt2 , "_");
   remove_charAt3=remove_charAt2.replace(charAt3,"_");

   Question_word="<h4 id='word_display'> Q. " + remove_charAt3 + "</h4>";
   input_box="<br>Answer: <input type='text' id='input_check'>";
   button_check="<br><br><button onclick='check()' class='btn btn-danger'>Check</button>";

   row= Question_word + input_box + button_check;
   document.getElementById("output").innerHTML=row;
   document.getElementById("word_input").innerHTML="";

}
 
question_turn="player_1";
answer_turn="player_2";

function check(){
get_answer=document.getElementById("input_check").value;
answer=get_answer.toLowerCase();
console.log("answer in lower case is" + answer);
if(answer==word){
  if(answer_turn=="player_1"){
   player1_score=player1_score+1;
   document.getElementById("player1_score").innerHTML=player1_score;
  }
  else{
      player2_score=player2_score+1;
      document.getElementById("player2_score").innerHTML=player2_score;
  }
  if(answer_turn=="player_1")
  {
answer_turn="player_2";
document.getElementById("player_answer").innerHTML="Answer Turn - " + player2_name;
  }
  else{
      answer_turn="player_1";
      document.getElementById("player_answer").innerHTML="Answer Turn - " + player1_name;
  }
  if(question_turn=="player_1"){
      question_turn="player_2";
      document.getElementById("player_question").innerHTML="Question Turn - " + player2_name;
  }
  else{
    question_turn="player_1";
    document.getElementById("player_question").innerHTML="Question Turn - " + player1_name;

  }

}
}
