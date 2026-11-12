
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";

import {
    getDatabase,
    ref,
    set,
    onValue
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-database.js";


// FIREBASE CONFIGURATION

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


// CONNECT TO FIREBASE

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

const inventoryRef = ref(database, "magacin");


// INVENTORY DATA

let inventory = {
    kolicina: 0,
    kolicina1: 0,
    malavoda: 0,
    golema_gazirana: 0
};


// HTML INPUTS

const inputs = {
    kolicina: document.getElementById("input"),
    kolicina1: document.getElementById("input1"),
    malavoda: document.getElementById("malavoda"),
    golema_gazirana: document.getElementById("golema_gazirana")
};


// UPDATE HTML

function updateHTML() {

    for (let key in inventory) {
        inputs[key].value = inventory[key];
    }

}


// SAVE TO FIREBASE

function saveData() {

    set(inventoryRef, inventory)
        .catch(error => {
            console.error("Firebase save error:", error);
        });

}


// RECEIVE DATA FROM FIREBASE

onValue(inventoryRef, (snapshot) => {

    if (snapshot.exists()) {

        inventory = {
            ...inventory,
            ...snapshot.val()
        };

        updateHTML();

    } else {

        saveData();

    }

}, (error) => {

    console.error("Firebase read error:", error);

});


// CHANGE QUANTITY

function changeQuantity(key, amount) {

    let newValue = Math.max(0, inventory[key] + amount);

    inventory[key] = newValue;

    updateHTML();

    saveData();

}


// BUTTONS

document.getElementById("minus1").addEventListener("click", () => {
    changeQuantity("kolicina", -1);
});

document.getElementById("plus1").addEventListener("click", () => {
    changeQuantity("kolicina", 1);
});


document.getElementById("minus2").addEventListener("click", () => {
    changeQuantity("kolicina1", -1);
});

document.getElementById("plus2").addEventListener("click", () => {
    changeQuantity("kolicina1", 1);
});


document.getElementById("minus3").addEventListener("click", () => {
    changeQuantity("malavoda", -1);
});

document.getElementById("plus3").addEventListener("click", () => {
    changeQuantity("malavoda", 1);
});


document.getElementById("minus4").addEventListener("click", () => {
    changeQuantity("golema_gazirana", -1);
});

document.getElementById("plus4").addEventListener("click", () => {
    changeQuantity("golema_gazirana", 1);
});
