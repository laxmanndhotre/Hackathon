const express = require('express')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const pool = require('../utils/db')
const result = require('../utils/result')
const config = require('../utils/config')

const router = express.Router()

router.post('/signin', (req, res)=>{
    const {email, password} = req.body
    const sql = 'SELECT * FROM users WHERE email = ?'
    pool.query(sql, [email], (err, data)=>{
        if(err)
            res.send(result.createResult(err))
        else if (data.length == 0)
            res.send(result.createResult("Invalid Email"))
        else{
            bcrypt.compare(password, data[0].password, (err, password)=>{
                if(passwordStatus) {
                    const payload = {
                        uid: data[0].user_id,
                    }
                    const token = jwt.sign(payload, config.SECRET)
                    const users = {   
                        fullname: data[0].fullname,
                        email: data[0].email
                    }
                    res.send(result.createResult(null, users))
                }
                else
                    res.send(result.createResult('Invalid Password'))
            })
        }
    })
})

router.post('/signup', (req, res)=>{
    const {fullname, email, password, phone_no} = req.body
    const sql = `INSER INTO users(fullname, email, password, phone_no, now()) VALUES (?, ?, ?, ?)`
    bcrypt.hash(password, config.SALT_ROUND, (err, hashedPassword) => {
        if(hashedPassword) {
            pool.query(sql, [fullname, email, hashedPassword, phone_no], (err, data)=> {
                res.send(result.createResult(err, data))
            })
        }
        else
            res.send(result.createResult(err))
    })
})

module.exports = router