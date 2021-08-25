var firebaseConfig = {
    apiKey: "AIzaSyAMnOWLBLEPQajVnjRrKcLN1VBdN5iqGkk",
    authDomain: "puiter-4d64d.firebaseapp.com",
    databaseURL: "https://puiter-4d64d-default-rtdb.firebaseio.com",
    projectId: "puiter-4d64d",
    storageBucket: "puiter-4d64d.appspot.com",
    messagingSenderId: "880804498276",
    appId: "1:880804498276:web:5e2c4a8f34234a8310c871",
    measurementId: "G-XG3JFWZS1M"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  function getData() {
    firebase.database().ref("/").on('value', function(snapshot) 
    {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) 
    {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code
    //End code
    });});}
getData();