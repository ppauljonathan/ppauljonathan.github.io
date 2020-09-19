
var p =document.getElementById("player"),t=document.getElementById("target");
var p_x=100,p_y=150,t_x=100,t_y=100;
var count=0,score=0;

function  move(event)
{
    flatTorus();
    assign();
    var k=event.key;
   switch(k)
    {
        case "ArrowUp":
            p_y-=5;
            break;
        case "ArrowDown":
            p_y+=5;
            break;
        case "ArrowLeft":
            p_x-=5;
            break;
        case "ArrowRight":
            p_x+=5;
            break;
        default:
            break;
    }
    count++;
    if(((t_x+10>p_x)&&(t_x-10<(p_x)))&&((t_y+10>p_y)&&(t_y-10<(p_y))))
    {getTarget();}
}
function assign()
{
    p.style.left=`${p_x}px`;
    p.style.top=`${p_y}px`;
}
function randomer(a,b)
{
    return (a+Math.floor((b-a+1)*Math.random()));
}
function getTarget()
{
    t_x=randomer(t.clientWidth,window.innerWidth-t.clientWidth);
    t_y=randomer(t.clientHeight,window.innerHeight-t.clientHeight);
    score++;
    t.style.left=`${t_x}px`;
    t.style.top=`${t_y}px`;
    count=0;
}
function flatTorus()
{
    if(p_x<0){p_x=window.innerWidth-p.clientWidth;}
    else if(p_x>window.innerWidth-p.clientWidth){p_x=0;}
    else if(p_y<0){p_y=window.innerHeight-p.clientHeight;}
    else if(p_y>window.innerHeight-p.clientHeight){p_y=0;}    
}
