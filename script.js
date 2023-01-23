let plusBtn = document.getElementById("increase");
let minusBtn = document.getElementById("decrease"); 
let resetBtn = document.getElementById("reset");
let counterDisplay = document.getElementById("counter-display");
let count = 0;

plusBtn.addEventListener("click", function increaseFunction(){
    count += 1;
    counterDisplay.innerHTML = count;
    if (count < 0) {
        counterDisplay.style.color = "red";
    } else if (count > 0) {
        counterDisplay.style.color = "green";
    } else {
        counterDisplay.style.color = "black";
    }
});

minusBtn.addEventListener("click", function decreaseFunction(){
    count -= 1;
    counterDisplay.innerHTML = count;
    if (count < 0) {
        counterDisplay.style.color = "red";
    } else if (count > 0) {
        counterDisplay.style.color = "green";
    } else {
        counterDisplay.style.color = "black";
    }
});

resetBtn.addEventListener("click", function resetFunction(){
    count = 0;
    counterDisplay.innerHTML = count;
    if (count < 0) {
        counterDisplay.style.color = "red";
    } else if (count > 0) {
        counterDisplay.style.color = "green";
    } else {
        counterDisplay.style.color = "black";
    }
});