function validateLogin(){
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if(username === "admin" && password === "1234"){
        alert("Login successful");
        window.location.href = "landing.html";
        return false;
    } else {
        alert("Invalid credentials");
        return false;
    }
}

function logout(){
    alert("You have logged out");
    window.location.href = "index.html";
}