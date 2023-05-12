const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const users = [
    {id:1, name: "sabrina", email: "sabrina@gmail.com"},
    {id:2, name: "samira", email: "samira@gmail.com"},
    {id:3, name: "laboni", email: "laboni@gmail.com"}
]

app.get('/', (req,res) => {
    res.send("user management server is running.");
})

app.get('/users', (req,res) => {
    res.send(users);
})

app.post('/users', (req,res) => {
    console.log('post is hitting');
    console.log(req.body);
    const newUser = req.body;
    newUser.id = users.length + 1;
    users.push(newUser);
    res.send(newUser);
})
app.listen(port , () => {
    console.log(`server is running at : ${port}`);
})