const button = document.getElementById("button");
button.addEventListener("click", () => {
    alert("Please click on the Letters!")
})

let boxSound = document.getElementsByClassName("box");
   
for (let i = 0; i < boxSound.length; i++) {
    boxSound[i].addEventListener("click", function () {
       this.classList.add("pressed");

    });

}

this.addEventListener("keydown", function(event) {
    console.log(event.key)
})


const button2 = document.getElementsByClassName("box");
for (let i = 0; i < button2.length; i++) {
    
    button2[i].addEventListener("click", function (event){
        console.log(event);
    });
    
}