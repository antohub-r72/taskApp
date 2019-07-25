const mongos = require('mongoose')
//Sconst validator = require('validator')

mongos.connect(process.env.MONGODB_URL,{
    useNewUrlParser: true,
    useCreateIndex: true,
    //useFindAndModify: false
})

/*const User = mongos.model('User', {
    name: {
        type: String
    },
    age: {
        type: Number
    }
})

const me = new User({
    name:'Anto',
    age: 27
})

me.save().then(() => {
    console.log(me)
}).catch((error) => {
    console.log("Err while saving user.")
})

const Task = mongos.model('Task', {
    description: {
        type: String
    },
    completed: {
        type: Boolean
    }
})

const task = new Task({
    description: 'Learn the Mongoose library',
    completed: false
})

task.save().then(() => {
    console.log(task)
}).catch((error) => {
    console.log(error)
})*/



/* const me = new User({
    name:'Anto',
    email: 'MYEMAIL@MEAD.IO   ',
    password: 'phone098!',
    age: 9
})

me.save().then(() => {
    console.log(me)
}).catch((error) => {
    console.log("Err while saving user.",error)
})


const Task = mongos.model('Task', {
    description: {
        type: String,
        required: true,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    }
})

const task = new Task({
    description: '  Eat lunch'
   // completed: false
})

task.save().then(() => {
    console.log(task)
}).catch((error) => {
    console.log(error)
}) */