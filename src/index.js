
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

    // var isValid = function(name) {
    //     return s && s.split(" ").length === 3 && /^[\u0410-\u04FF]+$/.test(s);
    // };

    var stringRegexp = /^[а-яА-ЯёË-]{2,30}$/
    var emailRegexp = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i
    
    console.log(stringRegexp.test(name))


        if (name !== "" && stringRegexp.test(name) && email !== ''&& emailRegexp.test(email) && phone !== '' && budget !== 'Выберите вариант') {
            
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