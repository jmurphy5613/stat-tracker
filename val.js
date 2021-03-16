const myForm = document.getElementById("getInfo");

myForm.addEventListener("submit", (e) => {
    e.preventDefault();
    checkInputs();
});

function checkInputs()
{
    var usernameValue = document.getElementById("usernameBox").value;
    console.log(usernameValue);
}