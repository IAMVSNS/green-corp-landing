const express = require('express')
const  fs = require('fs')
const bodyParser = require('body-parser')

const app = express()
const PORT = process.env.PORT || 3000

app.use(express.static('build'))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.post('/contact', (req, res) => {
    if (req.body) {
        fs.readFile('data.json', 'utf8', function readFileCallback(err, data) {
            if (err){
                console.log(err)
            } else {
                const db = JSON.parse(data)
                db.table.push(req.body)
                const result = JSON.stringify(db)

                fs.writeFile('data.json', result, 'utf8', () => {
                    console.log('success write: ', req.body)
                    res.send(JSON.stringify({ success: 'true' }))
                })
            }
        })

    } else {
        res.send(
            JSON.stringify({ success: 'false', error: 'no data' })
        )
    }

})

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}! \n`)
})

// let user = {
//     name: 'John',
//     email: 'test@mail.ru',
//     phone: '+79050000000',
//     budget: '100000'
// }
//
// let response = await fetch('http://localhost:3000/contact', {
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json;charset=utf-8'
//     },
//     body: JSON.stringify(user)
// })
