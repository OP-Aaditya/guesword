function add_user(){
    player1_name=document.getElementById("player1_input").value;
player2_name=document.getElementById("player2_input").value;
localStorage.setItem("player1 name",player1_name);
localStorage.setItem("player2 name",player2_name);
window.location="game_page.html";
}

