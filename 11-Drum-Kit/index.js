const button = document.getElementById("button");
button.addEventListener("click", () => {
    alert("Please click on the Letters!")
})

let boxSound = document.getElementsByClassName("box");
   
for (let i = 0; i < boxSound.length; i++) {
    boxSound[i].addEventListener("click", function () {
       this.style.color = "gold";
    })
}