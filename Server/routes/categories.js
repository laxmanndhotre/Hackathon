const express = require('express')

const result = require('../utils/result')
const pool = require('../utils/db')

const router = express.Router()

router.post('/', (req, res)=>{
    const {title, discription} = req.body
    const sql = `INSERT INTO categories(title , c_description) VALUES (?, ?)`
    pool.query(sql, [title, discription], (err, data)=> {
        if (data) {
            
        }
    })
})