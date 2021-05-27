function compute()
{
     var principal = document.getElementById("principal").value; 
     var years = document.getElementById("years").value;
     var rate = document.getElementById("rate").value;
     var future = +years + 2021;
     var int = principal * years * rate/100;
    
                if (principal <= 0) {
                    alert("Please enter positive value");
                    document.getElementById("principal").focus();
                    }
                    
                    else{    
                    interest =document.getElementById("result"); 
               interest.innerHTML = "If you deposit " + (principal) + "," + ("<br>") + "at an interest rate of " + (rate) + "%." + ("<br>") + "You will receive an amount of " + (int) + "," +("<br>") + "in the year " + (future);
                    }
            
}
