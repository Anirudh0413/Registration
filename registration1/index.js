document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
   
    var fullName = document.getElementById('fullName').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var dob = document.getElementById('dob').value;
    var acceptedTerms = document.getElementById('acceptedTerms').checked;
   
    if (acceptedTerms) {
       var date = new Date();
       var currentYear = date.getFullYear();
       var age = currentYear - dob.slice(0, 4);
   
       if (age >= 18 && age <= 55) {
         var entry = `
           <tr>
             <td>${fullName}</td>
             <td>${email}</td>
             <td>${password}</td>
             <td>${dob}</td>
             <td>${acceptedTerms}</td>
           </tr>
         `;
   
         document.getElementById('entriesTable').innerHTML += entry;
       } else {
         alert('Please ensure that you are between 18 and 55 years old.');
       }
    } else {
       alert('Please accept the terms and conditions.');
    }
   });