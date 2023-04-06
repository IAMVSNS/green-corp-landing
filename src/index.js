
const sendData = () => {

    var user = {
        name: 'name',
        email: 'email',
        phone: 'phone',
        budget: 'budget'
    }

    let response = fetch('http://localhost:3000/contact', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
            },
        body: JSON.stringify(user)
    }).then(response => {
        return response.json()  // json возвращает промис
    })

    console.log('send data')

}

const submitButton = document.querySelector('.form__submit')
submitButton.addEventListener('click', sendData)