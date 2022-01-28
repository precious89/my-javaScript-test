var a = [];
var b = [];

function Submit() {

   const a = document.getElementById("name").value;
   const b = document.getElementById("pin").value;

   if (a == "") {
      alert("Email cannot be empty");
      return;
   }

   if (b == "") {
      alert("Password cannot be empty");
      return;
   }

   if (a == "user@gmail.com" && b == "mypassword") {
      console.log(a, b);
      location.href = "./home.html";
   }

   else {
      alert("email and password is incorrect");
   }

}