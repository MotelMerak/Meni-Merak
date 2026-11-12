
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";

import {
    getDatabase,
    ref,
    set,
    onValue
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-database.js";

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAoJNttoKqneiWkRtKZqwbtjFAwOz-LsK8",
    authDomain: "magacin-f5bff.firebaseapp.com",
    databaseURL: "https://magacin-f5bff-default-rtdb.firebaseio.com",
    projectId: "magacin-f5bff",
    storageBucket: "magacin-f5bff.firebasestorage.app",
    messagingSenderId: "21280506209",
    appId: "1:21280506209:web:62552f1e8b360948e80520",
    measurementId: "G-17MQNY09FD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

// Save data
window.saveFirebase = function(key, value) {
    return set(ref(database, "magacin/" + key), value);
};

// Load data
onValue(ref(database, "magacin"), (snapshot) => {

    if (snapshot.exists()) {
        window.loadFirebaseData(snapshot.val());
    } else {
        set(ref(database, "magacin"), {
            kolicina: 0,
            kolicina1: 0,
            malavoda: 0,
            golema_gazirana: 0
        });
    }

}, (error) => {
    console.error("Firebase error:", error);
});
