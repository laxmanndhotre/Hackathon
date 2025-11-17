const express = require('express')

const result = require('../utils/result')
const pool = require('../utils/db')

const router = express.Router()

router.post('/', (req, res)=>{
    const uid = req.headers.uid
    const {category_id ,title, content} = req.body
    const sql = `INSERT INTO blogs(title, content, created_time, user_id, category_id) VALUES (?, ?, now(), ?, ?)`
    pool.query(sql, [title, content, uid, category_id], (error, data)=> {
        if (error)
            res.send(result.createResult(error, null))
        else
            res.send(result.createResult(null, data))
    })
})

router.get('/', (req, res)=>{
    const sql = `SELECT * FROM blogs`
    res.send(result.createResult(null, data))
})

router.put('/', (req, res)=> {
    const {blog_id, title, content} = req.body
    const sql = `UPDATE blogs SET title = ?, content = ? WHERE blog_id = ?`
    pool.query(sql, [title, content, blog_id], (err, data)=>{
        res.send(result.createResult(err, data))
    })
})

router.delete('/', (req, res)=> {
    const {blog_id} = req.body
    const sql = `DELETE FROM blogs WHERE blog_id = ?`
    pool.query(sql, [blog_id], (err, data)=> {
        res.send(result.createResult("Blog Deleted"))
    })
})

router.get('/myBlog', (req, res)=> {
    const {user_id} = req.headers.uid
    const sql = `SELECT * FROM blogs WHERE user_id = ?`
    pool.query(sql, [user_id], (err, data)=> {
        if (err)
            res.send(result.createResult("No Blogs posted"))
        else
            res.send(result.createResult(null, data))
    })
})

module.exports = router