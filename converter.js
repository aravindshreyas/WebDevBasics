let base=2;
let number;
let r2=/0-1/;
let r8=/8-9/;
let r16=/0-9A-Fa-f/;
let tr=1;
let ans=document.getElementById("res").innerHTML;
function base1(x){ 
    base=x;
}
function convert(x){
    
        if(base==16)
            number=document.getElementById("numberinput").value;
        else
            number=parseInt(document.getElementById("numberinput").value);
            test=document.getElementById("numberinput").value;
        
        if(base===8)
        {      
                if(test.match(r8)!=null)
                {   alert(test.match(r8));
                    tr=0;
                    alert("invalid input");
                
                }
            
        }
        else if(base===2)
        {       alert(test.match(r2));
        
                if(test.match(r2)==null)
                {   
                    tr=0;
                    alert("invalid input");
                }

            
        }
        else{
                if(test.match(r16)!=null)
                {
                    tr=0;
                    alert("Invalid input");
                }
        }
        if(tr==1)

        {   
            test=parseInt(test);
            var op=parseInt(number,base).toString(x);
            document.getElementById("res").innerHTML=ans+" "+op;
        }
}