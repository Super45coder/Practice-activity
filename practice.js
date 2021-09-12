
//ADD YOUR FIREBASE LINKS
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAuG7CpyRG_wLgJaJWSdPMis23NDHcZGuo",
    authDomain: "practice-activity-4683d.firebaseapp.com",
    databaseURL: "https://practice-activity-4683d-default-rtdb.firebaseio.com",
    projectId: "practice-activity-4683d",
    storageBucket: "practice-activity-4683d.appspot.com",
    messagingSenderId: "536764081820",
    appId: "1:536764081820:web:2ba771ee1eb20a56b66f59"
  };
  
  
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
  // Function for storing value in database
  function addUser()
  {
      user_name = document.getElementById("user_name").value;
      firebase.database().ref("/").child(user_name).update({
          purpose : "Adding user"
      });
      console.log("Added in database");
  }