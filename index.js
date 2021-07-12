const express = require('express');
const mongoose = require('mongoose');
const { createServer } = require('http');
const app = express();


mongoose.connect('mongodb+srv://Gegham:g13131213@cluster0.8hk1c.mongodb.net/firstMongo?retryWrites=true&w=majority',
    {
        useNewUrlParser: true
    },
)
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err))

const UsersSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    }
});

const Users = mongoose.model('Users', UsersSchema);

app.post('/', (req, res) => {
    Users.create({
        name: name,
        age: age
    })
        .then((user) => res.send(user))
        .catch(err => res.send(err));
});

app.get('/', (req, res) => {
    Users.find()
        .then(users => res.send(users))
        .catch(err => res.send(err));
})

const server = createServer(app);
server.listen(3000, () => console.log('Server connected'));