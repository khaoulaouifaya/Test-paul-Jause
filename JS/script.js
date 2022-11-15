var ps = document.getElementById("pswd1").value;
var ps2 = document.getElementById("pswd2").value;


function checkVal(){

    if(ps.length < 9){
        document.getElementById("message1").style.color="red";
        
       
    }else{
        document.getElementById("message1").style.color="green";
    }
}

function isMatched(){
    
    if(ps == ps2){

        document.getElementById("message2").style.color="green";
        document.getElementById("message2").innerHTML="is matched !";

    }else{

        document.getElementById("message2").style.color="red";
        document.getElementById("message2").innerHTML="not matched !";


    }

}