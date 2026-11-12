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
}
function change2(){
    x++;
    document.getElementById("input").value=x;
    localStorage.setItem("kolicina", x);
}


let y = Number(localStorage.getItem("kolicina1")) || 0;
document.getElementById("input1").value=y;
function change3(){
    if (y > 0) {
        y--;
    }
    document.getElementById("input1").value=y;
    localStorage.setItem("kolicina1", y);
}
function change4(){
    y++;
    document.getElementById("input1").value=y;
    localStorage.setItem("kolicina1", y);
}


let malavoda = Number(localStorage.getItem("malavoda")) || 0;
document.getElementById("malavoda").value=malavoda;
function change5(){
    if (malavoda > 0) {
        malavoda--;
    }
    document.getElementById("malavoda").value=malavoda;
    localStorage.setItem("malavoda", malavoda);
}
function change6(){
    malavoda++;
    document.getElementById("malavoda").value=malavoda;
    localStorage.setItem("malavoda", malavoda);
}

let golema_gazirana = Number(localStorage.getItem("golema_gazirana")) || 0;
document.getElementById("golema_gazirana").value=golema_gazirana;
function change7(){
    if (golema_gazirana > 0) {
        golema_gazirana--;
    }
    document.getElementById("golema_gazirana").value=golema_gazirana;
    localStorage.setItem("golema_gazirana", golema_gazirana);
}
function change8(){
    golema_gazirana++;
    document.getElementById("golema_gazirana").value=golema_gazirana;
    localStorage.setItem("golema_gazirana", golema_gazirana);
}



