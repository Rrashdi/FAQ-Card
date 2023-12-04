let answer = document.querySelectorAll('.answer');
let button = document.querySelectorAll('.qAndButton');

for(let i = 0; i < button.length; i++){
    if(i == button.length - 1)
        button[i].nextElementSibling.nextElementSibling.remove();
    
    button[i].addEventListener('click', (e) => {
        answer[i].classList.toggle('block');

        let condition = answer[i].classList.contains('block');

        if(condition)
            e.target.src = './assets/images/icon-plus.svg';
        else 
            e.target.src = './assets/images/icon-minus.svg';
    })
}
