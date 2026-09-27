
// const button = document.getElementById("button");
// button.addEventListener("click", () => {
//     alert("Please click on the Letters!")
// })

// let boxSound = document.getElementsByClassName("box");
   
// for (let i = 0; i < boxSound.length; i++) {
//     boxSound[i].addEventListener("click", function () {
//        this.classList.add("pressed");

//        // to remove pressed class and make it like animation i will use setTimeout();
//        setTimeout(function() {
//             boxSound[i].classList.remove("pressed");
//        }, 100)

//        const buttonClicked = this.innerHTML;
//        /*
//         switch(buttonClicked) {
//             case "M": 
//                 const crash = new Audio("sounds/crash.mp3");
//                 crash.play();
//             break;

//             case "A":
//                 const kickBass = new Audio("sounds/kick-bass.mp3");
//                 kickBass.play();
//             break;

//             case "S":
//                 const snare = new Audio("sounds/snare.mp3");
//                 snare.play();
//             break;

//             case "U":
//                 const tom1 = new Audio("sounds/tom-1.mp3");
//                 tom1.play();
//             break;

//             case "D":
//                 const tom2 = new Audio("./sounds/tom-2.mp3");
//                 tom2.play();
//             break;

//             case "L":
//                 const tom3 = new Audio("sounds/tom-3.mp3");
//                 tom3.play();
//             break;

//             default: console.log(buttonClicked);
//         }
//         */

//         // call the function makeSound
//         makeSound(buttonClicked);

//     });

// }


// document.addEventListener("keydown", function (event) {
    
//     const keybordButton = event.key;
//     const capitalKeyboard = keybordButton.toUpperCase();
//     /*
//     switch(capitalKeyboard) {
//        case "M": 
//             const crash = new Audio("sounds/crash.mp3");
//             crash.play();
//         break;

//         case "A":
//             const kickBass = new Audio("sounds/kick-bass.mp3");
//             kickBass.play();
//         break;

//         case "S":
//             const snare = new Audio("sounds/snare.mp3");
//             snare.play();
//         break;

//         case "U":
//             const tom1 = new Audio("sounds/tom-1.mp3");
//             tom1.play();
//         break;

//         case "D":
//             const tom2 = new Audio("./sounds/tom-2.mp3");
//             tom2.play();
//         break;

//         case "L":
//             const tom3 = new Audio("sounds/tom-3.mp3");
//             tom3.play();
//         break;

//         default: console.log(buttonClicked);
//     }
//     */


//     // call the function makeSound()
//     makeSound(capitalKeyboard);


//     // To apply classList in keydown
//     // first of all get the innerHTML and then match it with keydown

//     for (let i = 0; i < boxSound.length; i++) {
//         if (boxSound[i].innerHTML === capitalKeyboard) {
//             boxSound[i].classList.add("pressed");
//         }

//         setTimeout(function () {
//             boxSound[i].classList.remove("pressed");
//         },100)
//     }
// })


// // switch is repeating so i can create separate function and put all the code of switch inside that function and can be apply anywhere: like in keydown , click etc 

// function makeSound(key) {
//     switch(key) {
//        case "M": 
//             const crash = new Audio("sounds/crash.mp3");
//             crash.play();
//         break;

//         case "A":
//             const tom3 = new Audio("sounds/tom-3.mp3");
//             tom3.play();
//         break;

//         case "S":
//             const snare = new Audio("sounds/snare.mp3");
//             snare.play();
//         break;

//         case "U":
//             const tom1 = new Audio("sounds/tom-1.mp3");
//             tom1.play();
//         break;

//         case "D":
//             const tom2 = new Audio("sounds/tom-2.mp3");
//             tom2.play();
//         break;

//         case "L":
//             const childLaughing = new Audio("sounds/child-laughing.mp3");
//             childLaughing.play();
//         break;

//         default: console.log(buttonClicked);
//     }
// }


// minify.org
const button=document.getElementById("button");button.addEventListener("click",()=>{alert("Please click on the Letters!")})
let boxSound=document.getElementsByClassName("box");for(let i=0;i<boxSound.length;i++){boxSound[i].addEventListener("click",function(){this.classList.add("pressed");setTimeout(function(){boxSound[i].classList.remove("pressed")},100)
const buttonClicked=this.innerHTML;makeSound(buttonClicked)})}
document.addEventListener("keydown",function(event){const keybordButton=event.key;const capitalKeyboard=keybordButton.toUpperCase();makeSound(capitalKeyboard);for(let i=0;i<boxSound.length;i++){if(boxSound[i].innerHTML===capitalKeyboard){boxSound[i].classList.add("pressed")}
setTimeout(function(){boxSound[i].classList.remove("pressed")},100)}})
function makeSound(key){switch(key){case "M":const crash=new Audio("sounds/crash.mp3");crash.play();break;case "A":const tom3=new Audio("sounds/tom-3.mp3");tom3.play();break;case "S":const snare=new Audio("sounds/snare.mp3");snare.play();break;case "U":const tom1=new Audio("sounds/tom-1.mp3");tom1.play();break;case "D":const tom2=new Audio("sounds/tom-2.mp3");tom2.play();break;case "L":const childLaughing=new Audio("sounds/child-laughing.mp3");childLaughing.play();break;default:console.log(buttonClicked)}}