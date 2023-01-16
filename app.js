const express = require('express')
const app = express()
const path = require('path');
let bodyParser = require('body-parser')
let cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const { stringify } = require('querystring');
const { any } = require('webidl-conversions');

mongoose.set('strictQuery', false);



app.use(express.static('./public'))
app.use(express.json())
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())
app.use(cookieParser())

// app.use('/static', express.static(path.join(__dirname, 'public')))

mongoose.connect('mongodb://127.0.0.1:27017/mimedb', { useNewUrlParser: true }).then(() => {
    console.log('connected to database');
}).catch(err => {
    console.log(err);
});


const userSchema = {
    email: String,
    password: String
}

const User = mongoose.model('User', userSchema)

// my first middleware
const accessMiddleware = (req, res, next) => {

    if (req.body.Email) {
        let bodyEmail = req.body.Email
        res.locals.userEmail = bodyEmail
        console.log(`correct`);
        next()
    }
}

// app.use(accessMiddleware)
let cliEmail;

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './public/login-us.html'))

})
app.post('/public/login-us.html', accessMiddleware, (req, res) => {

    // let newUser = new User({
    //     email: req.body.Email

    // })
    // newUser.save()
    cliEmail = req.body.Email
    console.log(cliEmail);
    res.sendFile(path.resolve(__dirname, './public/login-us.html'))
})

app.post('/', (req, res) => {
    let newUser = new User({
        email: cliEmail,
        password: req.body.Pass
    })
    newUser.save()
    let cliPaass = req.body.Pass
    console.log(cliPaass);
    // console.log(app.locals.userEmail);
    res.sendFile(path.resolve(__dirname, './public/index.html'))
})

app.listen(3000, () => {
    console.log('running smoothly on 3000');
})

