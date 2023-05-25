
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

    localStorage.setItem('person', name)


    var stringRegexp = /^[а-яА-ЯёË-]{2,30}$/
    var emailRegexp = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i
    var mobileRegexp = /^\+?(\d{1,3})?[- .]?\(?(?:\d{2,3})\)?[- .]?\d\d\d[- .]?\d\d\d\d$/
    
    console.log(stringRegexp.test(name))


    if (name !== '' && stringRegexp.test(name) 
        && email !== '' && emailRegexp.test(email) 
        && phone !== '' && mobileRegexp.test(phone) 
        && budget !== 'Выберите вариант') {
            
            let response = fetch('http://localhost:3000/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                    },
                body: JSON.stringify(user)
            }).then(response => {

                let messageStatus = document.querySelector('.message_status')
                messageStatus.innerHTML = "Заявка отправлена"
                messageStatus.classList.remove("message_status_error")
                messageStatus.classList.add("message_status_success")
                messageStatus.style.color = "black"
                messageStatus.style.display = "block";

                setTimeout( () => messageStatus.style.display = "none", 5000)

                return response.json()  // json возвращает промис

            })
    console.log('send data')

        } else {
            let messageStatus = document.querySelector('.message_status')
            messageStatus.innerHTML = "Заявка не отправлена. Проверьте введенные значения"
            messageStatus.classList.remove("message_status_success")
            messageStatus.classList.add("message_status_error")
            messageStatus.style.color = "black"
            messageStatus.style.display = "block";
            setTimeout( () => messageStatus.style.display = "none", 5000)
        }
    console.log(user)
}

const submitButton = document.querySelector('.form__submit')
submitButton.addEventListener('click', sendData)

