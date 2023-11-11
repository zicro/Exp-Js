const express = require('express')
const router = express.Router();
const bcrypt = require('bcrypt')

// user auth in-memory
const users = [];



// create a new User
router.post('/register', async (req, res) =>{
    try {
        //find existing users
        const {email, password} = req.body
        const findUser = users.find((data) => email == data.email)

        if (findUser) {
            res.status(400).send('email not allowed')
            return
        }
        // hashing the password
        const hashedPassword = await bcrypt.hash(password,10)
        users.push({email, password: hashedPassword})

        res.status(201).json({message:'User Created ..'})
        console.log(users)
    } catch (err) {
        res.status(500).json({error: err.message})
    }
})

// login user
router.post('/login', async (req, res) => {
    try {
        //find existing users
        const {email, password} = req.body
        const findUser = users.find((data) => email == data.email)

        if (!findUser) {
            res.status(400).send('Wrong credentials')
            return
        }

        // compare password 
        const passwordMatch = await bcrypt.compare(password, findUser.password)
        if (passwordMatch) {
            res.status(200).send('you are logged in successfully ..')
        }else{
            res.status(400).send('Wrong credentials')
        }
    } catch (err) {
        res.status(500).json({message: err.message})
    }
})

module.exports = router;