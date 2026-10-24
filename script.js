let digitElem = document.querySelectorAll(".digit");
console.log(digitElem)
let addBtn = document.getElementById("add-btn");

let count = 0;
addBtn.addEventListener("click", function () {
    count++;

    let text = String(count).padStart(4, "0");
    digitElem.forEach((digit, index) => {
        digit.textContent = text[index];
    });
    console.log(text);
});

// HANDLE SUBTRACTION
let minusBtn =document.getElementById("minus-btn");

minusBtn.addEventListener("click", function () {
    if (count !== 0) {
        count--;
    }
    let text = String(count).padStart(4, "0");
    digitElem.forEach((digit, index) => {
        digit.textContent = text[index];
    });
    console.log(text)
    // let text =String( count).padStart
})