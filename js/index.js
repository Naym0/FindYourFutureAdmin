firebase.auth().onAuthStateChanged(function(user){
    if(user){
        window.location.replace("index.html");
    }
    else{
        // window.location.replace("./page-signin.html");
    }
});

function login(event){
    event.preventDefault();
    var useremail = document.getElementById("email").value;
    var userpass = document.getElementById("password").value;

    if(validateEmailField()){
        firebase.auth().signInWithEmailAndPassword(useremail, userpass)
        .then((user) => {
            console.log(email);
            window.location.replace("index.html");
        })
        .catch((error) => {
            var errorMessage = error.message;
            window.alert(errorMessage);
            // function displayerror(){
            //   if(errorMessage != null){
            //     var x = document.getElementById("alert").style.display="block";
            //     document.getElementById("text").innerHTML(errorMessage);
            //   }
            // }
            // displayerror();
        });
    }
    else
        window.alert("Please use a valid find your future email address");
}

var acceptlist = [ "findyourfuture.com" , "Findyourfuture.com" ];

function validateEmailField(){
    var useremail = document.getElementById("email").value;
    var splitArray = useremail.split('@'); // To Get Array
    if(acceptlist.indexOf(splitArray[1]) >= 0){
        // Means it has the accepted domains
        return true;
    }
    return false;
}