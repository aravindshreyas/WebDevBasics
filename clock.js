function showTime(){
    var date= new Date();
    var h=date.getHours();
    var m=date.getMinutes();
    var s= date.getSeconds();
    H=h.toString(2);
    M=m.toString(2);
    S=s.toString(2);
    H1 = ((H[0] == 1)? "1️⃣":"0️⃣") + ((H[1] == 1)? "1️⃣":"0️⃣") + ((H[2] == 1)? "1️⃣":"0️⃣") + ((H[3] == 1)? "1️⃣":"0️⃣") + ((H[4] == 1)? "1️⃣":"0️⃣") + ((H[5] == 1)? "1️⃣":"0️⃣") ;
    M1= ((M[0] == 1)? "1️⃣":"0️⃣") + ((M[1] == 1)? "1️⃣":"0️⃣") + ((M[2] == 1)? "1️⃣":"0️⃣") + ((M[3] == 1)? "1️⃣":"0️⃣") + ((M[4] == 1)? "1️⃣":"0️⃣") + ((M[5] == 1)? "1️⃣":"0️⃣") ;
    S1 = ((S[0] == 1)? "1️⃣":"0️⃣") + ((S[1] == 1)? "1️⃣":"0️⃣") + ((S[2] == 1)? "1️⃣":"0️⃣") + ((S[3] == 1)? "1️⃣":"0️⃣") + ((S[4] == 1)? "1️⃣":"0️⃣") + ((S[5] == 1)? "1️⃣":"0️⃣") ;
    var time = H1 + ":" + M1+ ":" + S1;
    document.getElementById("Display").InnerText=time;
    document.getElementById("Display").textContent=time;
    setTimeout(showTime,1000);
}
showTime();