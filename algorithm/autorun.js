var p2=document.getElementById("player"),t=document.getElementById("target");
var x=45,y=80,a=48,b=48;
var k=3,k_=window.innerWidth-3,l=68,l_=window.innerHeight-68;
setInterval(main,2);
function abs(num)
{
    if(num<0)
    {return (0-num);}
    else
    {return num;}
}
function DistanceEstimator()
{
    if(x>a)                                               // these are the images of the food in all directions
    {k_=abs(x-a);k=window.innerWidth-abs(x-a);}           //      l_
    else                                                  //      |
    {k=abs(x-a);k_=window.innerWidth-abs(x-a);}           //      |
    if(y>b)                                               //k_----P----k      takes the shortest path in both 
    {l_=abs(y-b);l=window.innerHeight-abs(y-b);}          //      |           directions
    else                                                  //      |
    {l=abs(y-b);l_=window.innerHeight-abs(y-b);}          //      l
}
function FlatTorus()
{
    if(x<0){x=window.innerWidth-p2.clientWidth;}
    else if(x>window.innerWidth-p2.clientWidth){x=0;}
    else if(y<0){y=window.innerHeight-p2.clientHeight;}
    else if(y>window.innerHeight-p2.clientHeight){y=0;}
}
function assign()
{
    p2.style.left=`${x}px`;
    p2.style.top=`${y}px`;
}
function movex()
{
    if(k>k_)
    {
        //while(x!=a)
        x--;FlatTorus();assign();
    }
    else
    {
        //while (x!=a)
        x++;FlatTorus();assign();
        
    }
}
function movey()
{
      if(l>l_)
    {
        //while(y!=b)
        y--;FlatTorus();assign();
    }
    else
    {
        //while (y!=b)
        y++;FlatTorus();assign();
        
    }
}
function random(m,n)
{return Math.floor(m+((n-m+1)*Math.random()))}

function GetTarget()
{
    a=random(t.clientWidth,window.innerWidth-t.clientWidth);
    b=random(t.clientHeight,window.innerHeight-t.clientHeight);
    t.style.left=`${a}px`;
    t.style.top=`${b}px`;
}
function main()                         //SOMETIMES THIS FREEZES............IDK Y?? AROUND 2% OF THE TIME
{
    DistanceEstimator();
    if(x==a&&y==b)
    {
        GetTarget();
        
    }
    else
    {
        if(x!=a&&y!=b)
        movey();
        else if(x!=a&&y==b)
        movex();
    }   
}
