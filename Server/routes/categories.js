const express = require('express')

const result = require('../utils/result')
const pool = require('../utils/db')

const router = express.Router()

router.post('/', (req, res)=>{
    const {title, description} = req.body
    const sql = `INSERT INTO categories(title , c_description) VALUES (?, ?)`
    pool.query(sql, [title, description], (err, data)=> {
        if (err) {
            console.log(err)
        }
        else
            res.send(result.createResult(null, data))
    })
})

router.get('/', (req, res)=>{
    const sql = `SELECT * FROM categories`
    pool.query(sql, (err, data)=>{
        res.send(result.createResult(err, data))
    })
})

router.put('/', (req, res)=> {
    const { category_id, title, c_description } = req.body
    const sql = `UPDATE Categories SET title = ?, c_description = ? WHERE category_id = ?`
    pool.query(sql, [title, c_description, category_id], (err, data)=> {
        res.send(result.createResult(err, data))
    })
})

router.delete('/', (req, res)=>{
    const { title } = req.body
    const sql = `DELETE FROM categories WHERE title = ?`
    pool.query(sql, [title], (err, data)=>{
        res.send(result.createResult(err, data))
    })
})

module.exports = router