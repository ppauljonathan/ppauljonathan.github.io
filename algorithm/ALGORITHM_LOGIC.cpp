#include<iostream>
using namespace std;
int x,y,a,b;
int k,k_,l,l_;
void DistanceEstimator()
{                                           //How DistanceEstimator() works
    if(x>a)                                 // these are the images of the food in all directions
    {k_=abs(x-a);k=100-abs(x-a);}           //      l_
    else                                    //      |
    {k=abs(x-a);k_=100-abs(x-a);}           //      |
    if(y>b)                                 //k_----P----k      takes the shortest path in both 
    {l_=abs(y-b);l=100-abs(y-b);}           //      |           directions
    else                                    //      |
    {l=abs(y-b);l_=100-abs(y-b);}           //      l
}
void FlatTorus()
{
    if(x<0){x=99;}
    else if(x>99){x=0;}
    else if(y<0){y=99;}
    else if(y>99){y=0;}
}
void disp()
{cout<<"("<<x<<","<<y<<")\n";}
void move()
{
    disp();
    if(k>k_)
    {
        while(x!=a)
        {x--;FlatTorus();disp();}
    }
    else
    {
        while (x!=a)
        {x++;FlatTorus();disp();}
        
    }
      if(l>l_)
    {
        while(y!=b)
        {y--;FlatTorus();disp();}
    }
    else
    {
        while (y!=b)
        {y++;FlatTorus();disp();}
        
    }
}
int main()
{
    cin>>x>>y;
    cin>>a>>b;
    DistanceEstimator();
    move();
}
