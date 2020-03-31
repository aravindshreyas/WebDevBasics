var y=document.getElementById("res").innerHTML;
function calc()
{
    var a=0;
    var per=0;
    var p=0;
    var tot=0;
    var res="";
    a=parseInt(document.getElementById("amt").value);
    per=document.getElementById("percentage").value;
    p=document.getElementById("nop").value;
    tot=(a+a*per*0.01)/p;
    res=y+tot.toString();
    document.getElementById("res").innerHTML=res;
}
