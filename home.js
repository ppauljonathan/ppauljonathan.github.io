var a=document.getElementById("clockface");
a.height=a.width;
a.width=a.height;
var c=a.getContext("2d");
var t_h,t_m,t_s;
getDate();
setInterval(clock,1000);
function round(value, decimals) {
  return Number(Math.round(value+'e'+decimals)+'e-'+decimals);
}
function getDate()
{
    var d=Date();
    for(var i=0;i<d.length;i++)
        {
            if(d[i]==":")
                {
                    var t=d.slice(i-2,i+6);
                    t_h=parseInt(t.slice(0,2));
                    t_m=parseInt(t.slice(3,5));
                    t_s=parseInt(t.slice(6,8));
                    break;
                }
        }
    t_m+=t_s/60;
    t_h+=(t_m/60)+(t_s/3600);
    t_m=round(t_m,5);
    t_h=round(t_h,5);
}
function drawClock()
{
    c.lineWidth=4;
    c.beginPath();//second hand
        c.strokeStyle="#0ff";
        c.arc(a.width/2,a.height/2,0.48*a.width,round(1.5*Math.PI,2),round(1.5*Math.PI+0.0166*2*Math.PI*t_s,2));
        c.stroke();
    c.closePath();
    c.beginPath();//minute hand
        c.strokeStyle="#f0f";
        c.arc(a.width/2,a.height/2,0.45*a.width,round(1.5*Math.PI,2),round(1.5*Math.PI+0.0166*2*Math.PI*t_m,2));
        c.stroke();
    c.closePath();
    c.beginPath();//hour hand
        c.strokeStyle="#ff0";
        c.arc(a.width/2,a.height/2,0.42*a.width,1.5*Math.PI,round(1.5*Math.PI+0.04166*2*Math.PI*t_h,2));
        c.stroke();
    c.closePath();
}
function clock()
{
  t_s++;if(t_s>59){t_s=0;c.clearRect(0,0,a.width,a.height);}
  t_m+=1/60;t_m=round(t_m,5);if(t_m>59){t_m=0.000;getDate();}
  t_h+=1/3600;t_h=round(t_h,5);
  drawClock();
}