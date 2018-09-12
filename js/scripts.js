let creditCard = document.querySelectorAll(".payment_type");
let checkMark = document.querySelectorAll(".uncheck");

creditCard.forEach(function(item){  
    item.addEventListener("click", function(e){
        resetCard();
        item.classList.add("selected_card");
        item.classList.remove("not_selected");
    })
})
 

// Resets selection to none
function resetCard(){
    for(let i = 0; i < creditCard.length; i++){
        creditCard[i].classList.remove("selected_card");
        creditCard[i].classList.add("not_selected")
    }
}
