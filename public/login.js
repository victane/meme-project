


const optionMenu = document.querySelector('.select-menu'),
    selectBtn = optionMenu.querySelector('.select-btn'),
    options = optionMenu.querySelectorAll('.option'),
    span_text = optionMenu.querySelector('.span-text');

let emailPara = document.querySelector('.email-p')

var emailValue = sessionStorage.getItem("emailValue");
emailPara.innerText = emailValue
selectBtn.addEventListener('click', () => optionMenu.classList.toggle('active'))

options.forEach(option => {
    option.addEventListener('click', () => {
        let selectedOption = option.querySelector('.option-text').innerText;
        span_text.innerText = selectedOption;
        console.log(selectedOption);
    })
});

// console.log(emailValue);

