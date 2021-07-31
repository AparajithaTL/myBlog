function addUser() 
{
    p1_name = document.getElementById("name1_input").value;
    p2_name = document.getElementById("name2_input").value;
    localStorage.setItem("player1_name",p1_name);
    localStorage.setItem("player2_name",p2_name);
    window.location="Quiz_Game.html";
}