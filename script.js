
function change(){
    document.getElementById("naslov").textContent="matej"
}

let x = Number(localStorage.getItem("kolicina")) || 0;
document.getElementById("input").value=x;

function change1(){
    if (x > 0) {
        x--;
    }
    document.getElementById("input").value=x;
    localStorage.setItem("kolicina", x);
    window.saveFirebase("kolicina", x);
}

function change2(){
    x++;
    document.getElementById("input").value=x;
    localStorage.setItem("kolicina", x);
    window.saveFirebase("kolicina", x);
}


let y = Number(localStorage.getItem("kolicina1")) || 0;
document.getElementById("input1").value=y;

function change3(){
    if (y > 0) {
        y--;
    }
    document.getElementById("input1").value=y;
    localStorage.setItem("kolicina1", y);
    window.saveFirebase("kolicina1", y);
}

function change4(){
    y++;
    document.getElementById("input1").value=y;
    localStorage.setItem("kolicina1", y);
    window.saveFirebase("kolicina1", y);
}


let malavoda = Number(localStorage.getItem("malavoda")) || 0;
document.getElementById("malavoda").value=malavoda;

function change5(){
    if (malavoda > 0) {
        malavoda--;
    }
    document.getElementById("malavoda").value=malavoda;
    localStorage.setItem("malavoda", malavoda);
    window.saveFirebase("malavoda", malavoda);
}

function change6(){
    malavoda++;
    document.getElementById("malavoda").value=malavoda;
    localStorage.setItem("malavoda", malavoda);
    window.saveFirebase("malavoda", malavoda);
}


let golema_gazirana = Number(localStorage.getItem("golema_gazirana")) || 0;
document.getElementById("golema_gazirana").value=golema_gazirana;

function change7(){
    if (golema_gazirana > 0) {
        golema_gazirana--;
    }
    document.getElementById("golema_gazirana").value=golema_gazirana;
    localStorage.setItem("golema_gazirana", golema_gazirana);
    window.saveFirebase("golema_gazirana", golema_gazirana);
}

function change8(){
    golema_gazirana++;
    document.getElementById("golema_gazirana").value=golema_gazirana;
    localStorage.setItem("golema_gazirana", golema_gazirana);
    window.saveFirebase("golema_gazirana", golema_gazirana);
}


// Receive data from Firebase
window.loadFirebaseData = function(data) {

    x = Number(data.kolicina) || 0;
    y = Number(data.kolicina1) || 0;
    malavoda = Number(data.malavoda) || 0;
    golema_gazirana = Number(data.golema_gazirana) || 0;

    document.getElementById("input").value = x;
    document.getElementById("input1").value = y;
    document.getElementById("malavoda").value = malavoda;
    document.getElementById("golema_gazirana").value = golema_gazirana;

    localStorage.setItem("kolicina", x);
    localStorage.setItem("kolicina1", y);
    localStorage.setItem("malavoda", malavoda);
    localStorage.setItem("golema_gazirana", golema_gazirana);
};


import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";

import { initializeApp } from "firebase/app";


import {
    getDatabase,
    ref,
    set,
    onValue
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-database.js";

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

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

// Save values
window.saveFirebase = function(key, value) {
    set(ref(database, "magacin/" + key), value)
        .catch(error => console.error("Save error:", error));
};

// Receive values
onValue(ref(database, "magacin"), (snapshot) => {

    if (snapshot.exists()) {
        window.loadFirebaseData(snapshot.val());
    } else {
        set(ref(database, "magacin"), {
            kolicina: 0,
            kolicina1: 0,
            malavoda: 0,
            golema_gazirana: 0
        }).catch(error => console.error(error));
    }

}, (error) => {
    console.error("Firebase error:", error);
});
