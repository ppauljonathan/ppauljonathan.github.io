var a=document.getElementById("player"),a_x=10,a_y=10;
var b=document.getElementById("computer"),b_x=84,b_y=84;
var c=document.getElementById("target"),c_x=45,c_y=45;
var keys,k,k_,l,l_,score1=0,score2=0;
function random(m,n)
{return Math.floor(m+((n-m+1)*Math.random()))}
function getTarget(n)
{
    if(n)
    {score1++;}
    else
    {score2++}
    c_x=random(1,93);
    c_y=random(1,93);
    distanceEstimator();
}
function distanceEstimator()
{
    if(b_x>c_x)                                               // these are the images of the food in all directions
    {k_=Math.abs(b_x-c_x);k=100-Math.abs(b_x-c_x);}           //      l_
    else                                                      //      |
    {k=Math.abs(b_x-c_x);k_=100-Math.abs(b_x-c_x);}           //      |
    if(b_y>c_y)                                               //k_----P----k      takes the shortest path in both 
    {l_=Math.abs(b_y-c_y);l=100-Math.abs(b_y-c_y);}           //      |           directions
    else                                                      //      |
    {l=Math.abs(b_y-c_y);l_=100-Math.abs(b_y-c_y);}           //      l
}
function moveComputerY()
{
    if(l>=l_)
    {b_y--;}
    else
    {b_y++;}
    flatTorus();
}
function moveComputerX()
{
    if(k>=k_)
    {b_x--;}
    else
    {b_x++;}
    flatTorus();
}
function moveComputer()
{ 
    if(b_x==c_x&&b_y==c_y)
    {
        getTarget(false);
    }
    else
    {
        if(b_x!=c_x&&b_y!=c_y)
        moveComputerY();
        else if(b_x!=c_x&&b_y==c_y)
        moveComputerX();
    }
}
function movePlayer(k)
{
    if(k=="ArrowUp")
    {a_y--;}
    else if(k=="ArrowDown")
    {a_y++;}
    else if(k=="ArrowLeft")
    {a_x--;}
    else if(k=="ArrowRight")
    {a_x++;}
    flatTorus();
    if(((c_x+3>a_x)&&(c_x-3<(a_x)))&&((c_y+3>a_y)&&(c_y-3<(a_y))))
    {getTarget(true)}
}
function assign()
{
    a.style.left=`${a_x}%`;
    a.style.top=`${a_y}%`;
    b.style.left=`${b_x}%`;
    b.style.top=`${b_y}%`;
    c.style.left=`${c_x}%`;
    c.style.top=`${c_y}%`;
}
function flatTorus()
{
    if(a_x<0){a_x=94;}
    else if(a_x>94){a_x=0;}
    else if(a_y<0){a_y=94;}
    else if(a_y>94){a_y=0;}
    if(b_x<0){b_x=94;}
    else if(b_x>94){b_x=0;}
    else if(b_y<0){b_y=94;}
    else if(b_y>94){b_y=0;}
}
function main(event)
{
    keys=event.key;
    if(keys=="ArrowUp"||keys=="ArrowDown"||keys=="ArrowLeft"||keys=="ArrowRight"||keys=="Escape")
    {
        if(keys=="Escape")
        {
            //alert(`GAME OVER\nYOUR SCORE:${score1}\nCOMPUTER SCORE:${score2}`);
            if(confirm("DO YOU REALLY WANT TO QUIT?")==1)
            {window.close();}
            else
            {location.reload();}
        }
        else
        {movePlayer(keys);moveComputer();assign();}
    }
}
