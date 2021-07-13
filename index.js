import express          from 'express';
import mongoose         from 'mongoose';
import { createServer } from 'http';
import bodyParser       from 'body-parser';

const app = express();  

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

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
        name: req.body.name,
        age: req.body.age
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