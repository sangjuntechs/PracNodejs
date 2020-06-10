const express = require('express')
const app = express()
const port = 3000
const bodyParcer = require('body-parser');

app.use(bodyParcer.urlencoded({extended:true}));
app.use(bodyParcer.json());

const { User } = require("./models/user");

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

app.post('/register', (req, res) => {
    // register client에서 가져온 정보를 데이터 베이스에 삽입.

    const user = new User(req.body)
    user.save((err, userInfo) => {
        if (err) return res.json({ success: false, err })
        return res.status(200).json({
            success: true
        })
    })
})

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))