
///////////////////////PARSING INCOMING REQUESTS

const express= require('express');

const app=express();

const fs= require('fs');

let appendFlag = false;

/*
const bodyParser=require('body-parser');
*/
/*

In modern versions of Express.js, you don't need the body-parser middleware separately. Instead, you can use the built-in express.urlencoded and express.json middleware

*/
app.use(express.urlencoded({ extended: false })); // Parse URL-encoded data
app.use(express.json());
//app.use(bodyParser.urlencoded({extended:false}));


//app.use(bodyParser.json());

app.get('/login' , (req , res) => {
    res.send(`
    <form action="/login" method="POST" onsubmit="localStorage.setItem('username', document.getElementById('username').value)">
    <input type="text" name="username" id="username">
    <button type="submit">Add username</button>
    </form>
    `);
});

app.get("/", (req, res) => {
    fs.readFile('username.txt', (err ,data ) => {
        if(err){
            console.log(err);
            data="nothing exist"
        }
        res.send(
            `${data}<form action="/" method="POST" onsubmit="document.getElementById('username').value = localStorage.getItem('username')">
            <input type="hidden" name="username" id="username">
            <input type="text" name="message" id="message">
            <br>
            <button type="submit">Add message</button>
            </form>`
        );
    })
    
});




app.post("/", (req, res) => {
    console.log(req.body.username);//by the name of the input field it is taking value,same like below
    console.log(req.body.message);
    fs.writeFile("username.txt", `${req.body.username} : ${req.body.message}`, {flag: 'a' }, (err) => {//use flag to use file in append mode
       err ? console.log(err) : res.redirect("/")
    });
});



app.use('/',(req,res,next) => {
    console.log('in the middleware');
    res.send('<h1>Hello from Expressjs</h1>');
});

app.listen(7000);
//

