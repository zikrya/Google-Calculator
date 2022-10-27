let action = document.getElementById("inputext");

let calculate = (num) => {
    action.value = action.value + num;

}
let results = () => {
    try {
        action.value = eval(action.value);
    }
    catch(err) {
        alert("Not Valid")
    }
}

function clr() {
    action.value = "0";
}

function sin() {
    action.value = Math.sin(action.value);
}
function cos() {
    action.value = Math.cos(action.value);
}
function tan () {
    action.value = Math.tan(action.value);
}
function square() {
    action.value = Math.pow(action.value,action.value);
}
function sqaureroot() {
    action.value = Math.pow(action.value,1/2);
}
function log() {
    action.value = Math.log(action.value);
}
