var modal = document.getElementById('modal');

function showModal() {
    if (modal.classList.contains('active')) {
        return;
    } else {
        modal.classList.add('active');
    }
}

function hideModal() {
    modal.classList.remove('active');
}

function syncPhone() {
    const control = document.querySelector('.modal__phone-value');
    control.innerText = event.target.value;
    // console.log('Changed');
}

function getValue() {
    const control = document.querySelector('#phone');
    console.log(control.value)
    const newControl = document.querySelector('.modal__phone-value');
    newControl.innerText = control.value;
}


function sendForm() {
    $.ajax({
        type: "POST",
        url: "./data.php",
        data: $("#myform").serialize(),
        success: function (data) {
            $('.modal_second').toggleClass('active');
            alert('Письмо отправлено');
        }
    });
}


function openModal() {
    event.preventDefault();
    event.stopPropagation();
    const newWindow = window.open('https://t.me/joinchat/ACopV0YFjaG6I64rYLC33w', '_blank');
    newWindow.blur();
    window.focus();
    $('.modal').toggleClass('active');
}

