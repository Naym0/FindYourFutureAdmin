firebase.auth().onAuthStateChanged(function(user){
    if(user){
        console.log("User signed in");
    }
    else{
        window.location.replace("page-signin.html");
    }
});

function logout(){
    firebase.auth().signOut().then(() => {
        console.log("User has signed out");
        window.location.replace("page-signin.html");
    }).catch((error) => {
        var errorMessage = error.message;
        window.alert("Error: " +errorMessage);
        console.log("Error: " +errorMessage);
    });
}