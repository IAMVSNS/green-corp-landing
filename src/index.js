
const sendData = () => {

    const name = document.querySelector(".form_name").value
    const email = document.querySelector(".form_email").value
    const phone = document.querySelector(".form_phone").value
    const budget = document.querySelector(".form_budget").value

    var user = {
        name: name,
        email: email,
        phone: phone,
        budget: budget
    }

        if (name !== "" && email !== '' && phone !== '' && budget !== 'Выберите вариант') {
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
    console.log(user)

}

const submitButton = document.querySelector('.form__submit')
submitButton.addEventListener('click', sendData)