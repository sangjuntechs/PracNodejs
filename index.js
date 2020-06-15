const express = require('express')
const app = express()
const port = 3000
const bodyParcer = require('body-parser');
// develop 상태에 따른 key.js
const config = require('./config/key');

app.use(bodyParcer.urlencoded({extended:true}));
app.use(bodyParcer.json());

const { User } = require("./models/user");

const mongoose = require('mongoose');
//선언한 config에서의 mongoURI 선언
mongoose.connect(config.mongoURI
    ,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    }).then(() => console.log('mongodb Connected..'))
    .catch(err => console.log(err))






app.get('/', (req, res) => res.send('Hello Express.js & node.js!'))

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

app.post('/login', (req, res) => {
    //요청된 이메일에 대한 정보를 데이터베이스에서 찾음
    User.findOne({ email: req.body.email }, (err, userInfo) => {
        if(!userInfo) {
            return res.json({
                loginSuccess: false,
                message: '이메일이 존재하지 않습니다.'
            })
        }
        //이메일이 데이터베이스 내에 존재한다면 비밀번호 검증
        user.comparePassword(req.body.password, (err, isMatch) => {
            
        })

    })
    

    //비밀번호가 맞다면 token 생성
})

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))