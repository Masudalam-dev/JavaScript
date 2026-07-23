const button = document.getElementById("button");
button.addEventListener("click", function() {
    alert("Please Click on the Letters!")
})

let boxNumber = document.getElementsByClassName("box");

for (let i = 0; i < boxNumber.length; i++) {
    boxNumber[i].addEventListener("click", gotClicked);

}

function gotClicked() {
    alert("I got clicked!")
}
    
