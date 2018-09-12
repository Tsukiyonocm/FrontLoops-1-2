let creditCard = document.querySelectorAll(".payment_type");
let checkMark = document.querySelectorAll(".uncheck");

creditCard.forEach(function(item){  
    item.addEventListener("click", function(e){
        resetCard();
        resetCheck();
        item.classList.add("selected_card");
        e.target.children[0].children[2].classList.remove("uncheck");
    })
})


// Resets selection to none
function resetCard(){
    for(let i = 0; i < creditCard.length; i++){
        creditCard[i].classList.remove("selected_card");
    }
}

// Remove all checkmarks
function resetCheck(){
    for(let i = 0; i < checkMark.length; i++){
        checkMark[i].classList.add("uncheck");
    }
}
