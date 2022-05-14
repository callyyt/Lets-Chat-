
// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyAbZDuucWfQ1Qe3dxD6unHNTXcEnkVVRCM",
      authDomain: "lets-chat-305e9.firebaseapp.com",
      projectId: "lets-chat-305e9",
      storageBucket: "lets-chat-305e9.appspot.com",
      messagingSenderId: "502161116108",
      appId: "1:502161116108:web:1f52726d6e7fd54fca2b69"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
