var mouseEvent ="empty";
var last_position_of_x,last_position_of_y;
canvas =document.getElementById('myCanvas');
var ctx =canvas.getContext("2d");
color = "black";
width_of_line =1;
radius = 5;
canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e)
{
    color = document.getElementById("color").value;
    if (color == "")
    {
        color = "black";
    }
    width_of_line = document.getElementById("width_of_line").value;
    if (width_of_line == "")
    {
        width_of_line = 1;
    }
    radius = document.getElementById("radi").value;
    if (radius == "")
    {
        radius = 3;
    }
    console.log(color);
    console.log(width_of_line);
    console.log(radius);
    mouseEvent="mouseDown";
}
canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e)
{
    current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
    current_position_of_mouse_y = e.clientY - canvas.offsetTop;
    if(mouseEvent == "mouseDown")
    {
      ctx.beginPath();
      ctx.strokeStyle=color;
      ctx.lineWidth=width_of_line;
      //console.log("Last position of x and y : ")
      //console.log("x= "+ last_position_of_x + " y = "+ last_position_of_y);
      ctx.moveTo(last_position_of_x,last_position_of_y);
      console.log("Current position of x and y : ")
      console.log("x= "+ current_position_of_mouse_x + " y = "+ current_position_of_mouse_y);
      ctx.arc(current_position_of_mouse_x,current_position_of_mouse_y,radius,0,2*Math.PI);
      //ctx.lineTo(current_position_of_mouse_x,current_position_of_mouse_y);
      ctx.stroke();
    }
    last_position_of_x=current_position_of_mouse_x;
    last_position_of_y=current_position_of_mouse_y;
}
canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup(e)
{
    mouseEvent="mouseUp";
}
canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(e)
{
    mouseEvent="mouseLeave";
}

function clearArea()
{
    canvas.height = "600";
    canvas.width = "800";
}