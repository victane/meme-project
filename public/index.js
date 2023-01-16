let inputEmail = document.querySelector('.input-email')
let sbmBtn = document.getElementsByClassName('next-button')




sbmBtn[0].addEventListener('click', () => {

    let emailValue;

    if (inputEmail == '') {

        alert('Enter Valid Email')
    } else {
        emailValue = inputEmail.value
        // console.log(inputEmail.value);

    }
    console.log(emailValue);

    sessionStorage.setItem("emailValue", emailValue)
})

