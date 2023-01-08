for(let i=0;i<document.querySelectorAll(".drum").length;i++){
    document.querySelectorAll("button")[i].addEventListener("click", function () {
       let buttonInnerHtml = this.innerHTML;

       makeSound(buttonInnerHtml);
       buttonAnimation(buttonInnerHtml);

    });
}

document.addEventListener("keypress", function(event){
    makeSound(event.key);
    buttonAnimation(event.key);
})

function makeSound(key){

    switch (key){
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            document.querySelector(".w").style.color = "red";
            break;
        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            document.querySelector(".a").style.color = "red";
            break;    
        
        case "s":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            document.querySelector(".s").style.color = "red";
            break;

        case "d":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            document.querySelector(".d").style.color = "red";
            break;
        case "j":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            document.querySelector(".j").style.color = "red";
            break;
        case "k":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            document.querySelector(".k").style.color = "red";
            break;  
        case "l":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            document.querySelector(".l").style.color = "red";
            break; 
            
        default: console.log(buttonInnerHtml);
    
       }
       
}

function buttonAnimation(currentKey){
     var activeButton = document.querySelector("." + currentKey);
     activeButton.classList.add("pressed");

     setTimeout(function(){
        activeButton.classList.remove("pressed");
     },100)
}