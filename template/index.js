firebase.auth().onAuthStateChanged(function(user){
    if(user){
        var email = user.email;
        console.log(email);
    }
    else{
        //no user
    }
});

function anon(){
    firebase.auth().signInAnonymously()
    .then(() => {
        console.log("email");
    })
    .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log("Error:" +errorMessage);
    });
}



// function logout(){
//     firebase.auth().signOut().then(() => {
//         // Sign-out successful.
//       }).catch((error) => {
//         // An error happened.
//       });
// }