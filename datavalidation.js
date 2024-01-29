////form validation///////
function validation()
{
    var mail = document.getElementById("email");
    var add = document.getElementById("address");
    var num = document.getElementById("number");
    var qty = document.getElementById("Quantity");

    if( mail.value.trim() == "" || add.value.trim() == "" || num.value.trim() == "" || qty.value.trim() == "")
    {
        alert("No Blank Value Allowed");
        return false;
        console.log("hello")
    }
    else{
        alert("Thanks for Order We will very soon develer")
        return true;
    }
}