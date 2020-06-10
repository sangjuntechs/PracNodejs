# PracNodejs
Node.js의 연습을 위한 repo.


## node와 express.js의 기본 작동방식 확인

## mongodb 와 프로젝트 연결

#### 콘솔로그로 몽고디비와 프로젝트가 연결 되었는지 확인
```ts
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://sangjun:tkdwns12@practice-zi0wv.mongodb.net/practice?retryWrites=true&w=majority'
    ,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    }).then(() => console.log('mongodb Connected..'))
    .catch(err => console.log(err))
```

## mongodb 모델링

## postman을 이용한 register route 만들기

## postman 에서 json형식의 정보 전달

```ts
{
    "name": "sangjun",
    "email": "sangjun@gmail.com",
    "password": "sangjun1234"

}

{
    "success": true
}
```