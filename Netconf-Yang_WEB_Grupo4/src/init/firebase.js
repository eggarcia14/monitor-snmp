import app from "firebase/app";
import "firebase/auth";
import firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyBAnVbkUQ7grZClDBWtP0W-CVJ6JGxvf0w",
    authDomain: "monitoreo-snmp.firebaseapp.com",
    projectId: "monitoreo-snmp",
    storageBucket: "monitoreo-snmp.appspot.com",
    messagingSenderId: "679640953050",
    appId: "1:679640953050:web:de9305f28b1b57490df5e3",
    measurementId: "G-9WRB8MZSLB"
  };

  class Firebase{
      constructor(){
          app.initializeApp(firebaseConfig);
          this.firebaseAuth=firebase.auth();
      }
  }

  export default Firebase;