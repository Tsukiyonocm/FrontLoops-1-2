let dots = document.querySelectorAll(".dot");
let creditCard = document.querySelectorAll(".payment_type");

for (let i = 0; i < creditCard.length; i++){
    let card = creditCard[i];
    
    card.addEventListener("click", function(){ 
        resetDot();
        dots[i].classList.add("selected_dot");
        dots[i].classList.remove("reg_dot");
    });
};


// Resets back to Reg_dot
function resetDot(){
    for(let j = 0; j < dots.length; j++){
        if(!(dots[j].classList.contains("reg_dot"))){
            dots[j].classList.add("reg_dot");
            dots[j].classList.remove("selected_dot");
        } 
    }
}