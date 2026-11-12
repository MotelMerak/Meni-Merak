
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";

import {
    getDatabase,
    ref,
    set,
    onValue
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-database.js";

const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    databaseURL: "https://magacin-f5bff-default-rtdb.firebaseio.com/",
    projectId: "magacin-f5bff",
    appId: "YOUR_APP_ID"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

// Save data to Firebase
window.saveFirebase = function(key, value) {
    set(ref(database, "magacin/" + key), value);
};

// Load data from Firebase
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
});
