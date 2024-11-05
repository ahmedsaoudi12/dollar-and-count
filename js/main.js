//start counter//
var counter = 0;

function increament(){


    counter++;
    document.getElementById("demo").innerHTML= counter;
  
}

function decreament(){


    counter--;
    document.getElementById("demo").innerHTML= counter;
   
}
//end counter//


//start dollar//
function validate(){
    var x = document.getElementById("dollar").value;
    var result = document.getElementById("a");
   
    if(x==""){
        result.innerHTML="please enter number";
        return false;
    }
    else if(isNaN(x))
    {
        result.innerHTML="Enter number not text";
        return false;

    } 
    else if (x<0)
    {
        result.innerHTML="Enter positive number";
        return false;
    }
    else {
        result.innerHTML = x*50 + " " + "Egyptian pound";
        return false;
    }

   


}
// end dollar//