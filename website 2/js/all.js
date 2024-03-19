function addToCat(){
    alert("Thank you for buying..")
}
var myTextElement = document.getElementById("color");
myTextElement.style.color = "red";
function validateForm() {
    var name = document.getElementById('nameInput').value;
    var address = document.getElementById('addressInput').value;
    var email = document.getElementById('emailInput').value;
    var message = document.getElementById('messageInput').value;

    if (name === "" || address === "" || email === "" || message === "") {
        alert("All fields must be filled out");
        return false;
    }


    return alert("Thank you");
}