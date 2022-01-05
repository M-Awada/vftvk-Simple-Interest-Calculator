function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval+"%";
}
        

function compute()
{
    var principal = document.getElementById("principal").value;

    if(principal==""){
            alert("Please enter amount");
            document.getElementById("principal").focus();
            return false;
        }
    
    if(principal<1){
            alert("Enter a positive number");
            document.getElementById("principal").focus();
            return false;
        }

    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var amount = principal * years * rate /100;
    var year = new Date().getFullYear()+parseInt(years);
    document.getElementById("result1").innerHTML="If you deposit ";
    document.getElementById("result2").innerHTML=principal;
    document.getElementById("result3").innerHTML=",\<br\>at an interest rate of ";
    document.getElementById("result4").innerHTML=rate+"%";
    document.getElementById("result5").innerHTML="\<br\>You will receive an amount of ";
    document.getElementById("result6").innerHTML=amount;
    document.getElementById("result7").innerHTML=",\<br\>in the year ";
    document.getElementById("result8").innerHTML=year
    document.getElementById("result9").innerHTML="\<br\>";

}
        