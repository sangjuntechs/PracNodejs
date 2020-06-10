const express = require('express')
const app = express()
const port = 3000

const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://sangjun:tkdwns12@practice-zi0wv.mongodb.net/practice?retryWrites=true&w=majority'
    ,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    }).then(() => console.log('mongodb Connected..'))
    .catch(err => console.log(err))



app.get('/', (req, res) => res.send('Hello Express.js!'))

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))