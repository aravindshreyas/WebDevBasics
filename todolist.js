var c=1;
function Add()
{
    var r=document.getElementById("box").value;
    if(r.length==0 || !r.trim())
    {
        alert("Invalid Input");
    }
    else{
    var prev=document.getElementById("list").innerHTML;
    document.getElementById("list").innerHTML=prev+ '<br>' + c + " -> "+r+'<br>';
    document.getElementById("box").value=" ";
    c=c+1;
    }
    

}
