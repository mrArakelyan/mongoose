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

const server = createServer(app);
server.listen(3000, () => console.log('Server connected'));