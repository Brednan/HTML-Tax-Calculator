function buttonClickAnimation(elementID){
    elementID.style.transform = 'scale(1.2, 1.2)'
    setTimeout(() =>{
        elementID.style.transform = 'scale(1, 1)'
    }, 200)
}