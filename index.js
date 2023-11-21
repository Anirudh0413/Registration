document.getElementById("myForm").addEventListener("submit", function(event){
    event.preventDefault();
     
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var dob = document.getElementById("dob").value;
    var acceptedTerms = document.getElementById("acceptTerms").checked;
     
    var table = document.getElementById("myTable");
    var row = table.insertRow(-1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
     
    cell1.innerHTML = email;
    cell2.innerHTML = password;
    cell3.innerHTML = dob;
    cell4.innerHTML = name;
     
    if (acceptedTerms === true) {
    alert("Form submitted successfully.");
    } else {
    alert("Please accept the terms and conditions.");
    }
   });