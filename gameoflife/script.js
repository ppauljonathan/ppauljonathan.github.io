
var gol=document.getElementById("gol");
res=gol.width;
      var w=5,r=false;
      var ctx=gol.getContext("2d");
      ctx.fillStyle="white";
      var sim=new Array(Math.floor(res/w));
      for(i=0;i<res;i++){sim[i]=new Array(Math.floor(res/w));}
      var simc=new Array(Math.floor(res/w));
      for(i=0;i<res;i++){simc[i]=new Array(Math.floor(res/w));}
function runner()
{
   if(r==false)
       {r=true;setInterval(()=>{run();},50);}
    
}
      function fill()
      {
          for(i=0;i<Math.floor(res/w);i++)
          {
              for(j=0;j<Math.floor(res/w);j++)
              {
                if(sim[i][j]==1)
               {ctx.fillRect(i*w,j*w,w,w);}
              }
          }
      }
    var off=90;
      function init()
      {
          
          for(i=1;i<(Math.floor(res/w))-1;i++)
              {for(j=1;j<(Math.floor(res/w))-1;j++)
              {sim[i][j]=Math.floor(Math.random()*1.25);}}
          fill();
      }
      function run()
      {
          ctx.clearRect(0,0,Math.floor(res),Math.floor(res));
        for(i=0;i<Math.floor(res/w);i++)                  //copying to temporary matrix
        {
            for(j=0;j<Math.floor(res/w);j++)
            {
                simc[i][j]=sim[i][j];
            }
        }
        
        for(i=0;i<Math.floor(res/w);i++)
        {
            for(j=0;j<Math.floor(res/w);j++)
            {
                count=0;
                for(x=-1;x<=1;x++)
                {
                    for(y=-1;y<=1;y++)
                    {
                        l=i-x;m=j-y;
                        if(l==-1){l=(Math.floor(res/w))-1;}
                        else if(l==Math.floor(res/w)){l=0;}
                        else if(m==-1){m=(Math.floor(res/w))-1;}
                        else if(m==Math.floor(res/w)){m=0;}
                        if(!(x==0&&y==0))
                            {if(simc[l][m]==1){count++;}}
                    }
                }
                if(simc[i][j]==1)
                {
                    if(count<2){sim[i][j]=0;}
                    else if(count>3){sim[i][j]=0;}
                    else{sim[i][j]=1;}
                }
                else
                    {
                        if(count==3){sim[i][j]=1;}
                        else{sim[i][j]=0;}
                    }
                
            }
        }
        fill();
      }