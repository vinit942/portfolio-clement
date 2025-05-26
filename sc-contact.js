function cleanForm() {
    document.getElementById("nom").value ="";
    document.getElementById("prenom").value ="";
    document.getElementById("email").value ="";
    document.getElementById("phone").value ="";
    document.getElementById("message").value ="";
}

function sendEmail() {

    var nom = document.getElementById("nom");
    var prenom = document.getElementById("prenom");
    var email = document.getElementById("email");
    var phone = document.getElementById("phone");
    var mess = document.getElementById("message");
   
    var bodyMessage ='nom: '+ nom.value +
                     '<br> Prenom: '+ prenom.value +
                     '<br> Email: ' + email.value +
                     '<br> Phone: ' + phone.value + 
                     '<br> Message: ' + mess.value;
  
    Email.send({
        Host : "smtp.gmail.com",
        Username : "clement.contact.portfolio@gmail.com",
        Password : "@zerty123",
        To : 'clement94200@gmail.com',
        From : "clement.contact.portfolio@gmail.com",
        Subject : "[ PORTFOLIO - CONTACT ]",
        Body : bodyMessage

    });
    alert('Mail envoyé');
    cleanForm();
}