const raw = localStorage.getItem('person')

const titleName = `Привет, ${raw}`

const nameTitle = document.querySelector('.titleName')

if (raw) {
    nameTitle.innerHTML = titleName
}