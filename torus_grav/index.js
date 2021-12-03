const canvas=document.getElementsByTagName("canvas")[0];
const resetBtn=document.getElementsByTagName("button")[0];
const cansize=2000;
canvas.width=cansize;
canvas.height=cansize;
ctx=canvas.getContext("2d");
ctx.fillStyle="black";
ctx.fillRect(0,0,cansize,cansize);

const noOfBodies=prompt("enter the no of objects to simulate : ",2);
const big_g=10000;

function de(x,y){
    l=x-y;
    r=-y+x;
    return Math.min(l,r);
}

function attr(b1,b2){
    r_x=de(b1.x,b2.x);
    r_y=de(b1.y,b2.y);
    r2=r_x**2+r_y**2;
    fmod=(big_g*b1.m^b2.m)/r2;
    ricap=r_x/Math.sqrt(r2);
    rjcap=r_y/Math.sqrt(r2);
    f_x=fmod*ricap;
    f_y=fmod*rjcap;
    b1.a_x-=f_x/b1.m;b1.a_y-=f_y/b1.m;
    b2.a_x+=f_x/b2.m;b2.a_y+=f_y/b2.m;    
}

function inRand(ceil=0){return Math.floor(Math.random()*ceil);}

function randPM(){return (-1)**inRand(2);}

function drawCircle(x,y,r,c){
    ctx.beginPath();
    ctx.arc(x,y,r,2*Math.PI,false);
    ctx.fillStyle=c;
    ctx.fill();
}

class Body{
    constructor(){
        this.x=inRand(cansize);
        this.y=inRand(cansize);
        this.v_x=randPM()*inRand(10);
        this.v_y=randPM()*inRand(10);
        this.m=inRand(10);
        this.a_x=0;
        this.a_y=0;
        this.color="#0f0"
    }
    update(){
        this.v_x+=this.a_x;
        this.v_y+=this.a_y;
        if(
            this.v_x>cansize/50||
            this.v_y>cansize/50
          ){
            clearInterval(loopId);
            resetBtn.style.visibility="visible";
        }
        this.x+=this.v_x;
        this.y+=this.v_y;
        this.a_x=0;this.a_y=0;
        this.flatTorus();
        drawCircle(this.x,this.y,this.m*3,this.color);
    }
    flatTorus(){
        if(this.x<0){this.x=cansize;}
        else if(this.x>cansize){this.x=0;}
        else if(this.y<0){this.y=cansize;}
        else if(this.y>cansize){this.y=0;}
    }
}

obj=[];
for(let i=0;i<noOfBodies;i++){
    obj.push(new Body());
}

function gameLoop(){
    ctx.fillStyle="rgba(0,0,0,0.1)";
    ctx.fillRect(0,0,cansize,cansize);
    for(let i=0;i<noOfBodies;i++){
        for(let j=i+1;j<noOfBodies;j++){
            attr(obj[i],obj[j]);
        }
    }
    for(let i=0;i<noOfBodies;i++){
        obj[i].update();
    }
    
}

const loopId=setInterval(gameLoop,17);
