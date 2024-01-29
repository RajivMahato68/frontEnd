function sendMail(){
    var params = {
        name: document.getElementById("name").value ,
        email: document.getElementById("email").value ,
        message: document.getElementById("message").value ,
    };

const serviceID = "service_2s7oikp";
const templateID = "template_lee6b17"

emailjs.send(serviceID, templateID, params)
.then(
    res =>{
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";
    console.log(res);
    alert("Your message send sucessfully");
})
 .catch((err) => console.log(err));
}