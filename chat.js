// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCGqo2IafAEZ0ftFm_BpToKNfbjvqQa1ro",
    authDomain: "sammm-abf41.firebaseapp.com",
    databaseURL: "https://sammm-abf41-default-rtdb.firebaseio.com",
    projectId: "sammm-abf41",
    storageBucket: "sammm-abf41.appspot.com",
    messagingSenderId: "864278416060",
    appId: "1:864278416060:web:58a5a176088f41bb6b1eb9"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);              


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function addUser() {

    user_name = document.getElementById("user_name").Value;

    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";




}



