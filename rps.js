var user=0;
var comp=0;
function play(x)
{
    var y=Math.floor(Math.random()*3);
    if(x==y)
        document.getElementById("ress").innerHTML="Draw";
    else if(x==0 && y==2)
    {
        document.getElementById("ress").innerHTML="Computer played scissors,You Won!";
        user=user+1;
        document.getElementById("resu").innerHTML=user + " : ";
    }
    else if(x==0 && y==1)
    {
        document.getElementById("ress").innerHTML="Computer played Paper,Computer Won!";
        comp=comp+1;
        document.getElementById("resc").innerHTML=comp;
    }
    else if(x==1 && y==0)
    {
        document.getElementById("ress").innerHTML="Computer played rock,You Won!";
        user=user+1;
        document.getElementById("resu").innerHTML=user + " : ";
    }
    else if(x==1 && y==2)
    {
        document.getElementById("ress").innerHTML="Computer played scissors,Computer Won!";
        comp=comp+1;
        document.getElementById("resc").innerHTML=comp;
    }
    else if(x==2 && y==1)
    {
        document.getElementById("ress").innerHTML="Computer played paper,You Won!";
        user=user+1;
        document.getElementById("resu").innerHTML=user + " : ";
    }
    else if(x==2 && y==0)
    {
        document.getElementById("ress").innerHTML="Computer played rock,Computer Won!";
        comp=comp+1;
        document.getElementById("resc").innerHTML=comp;
    }
}