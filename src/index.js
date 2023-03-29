const sendData = () => {
    // тут можно писать код, для отправки на бэк
    console.log('send data')
}

const submitButton = document.querySelector('.form__submit')
submitButton.addEventListener('click', sendData)
