canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
var i = 0;
color = ["blue","black","red","yellow","green"];
rect(color[2]);
mouse_x = 270;
mouse_y = 230;
for (i=0;i<3;i++)
{
    circle(mouse_x,mouse_y,color[i]);
    mouse_x = mouse_x + 90;
}
mouse_x = 315;
mouse_y = 270;
circle(mouse_x,mouse_y,color[i]);
circle(mouse_x+90,mouse_y,color[i+1]);

function rect(clr)
{
    ctx.beginPath();
    ctx.strokeStyle = clr;
    ctx.lineWidth = 1;
    ctx.rect(150,160,430,200);
    ctx.stroke();
}
function circle(m_x,m_y,clr)
{
    ctx.beginPath();
    ctx.strokeStyle = clr;
    ctx.lineWidth = 3;
    ctx.arc(m_x, m_y, 40, 0, 2*Math.PI);
    ctx.stroke();
}