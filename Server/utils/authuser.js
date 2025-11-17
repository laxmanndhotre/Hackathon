const jwt = require('jsonwebtoken')
const result = require('./result')
const config = require('./config')

function authorizeUser(req, res, next) {

    const url = req.url
    if (url == '/user/signin' || url == '/user/signup') 
        next()
    else if (url == '/blog' && req.method == 'GET')
        next()
    else {
        const token = req.headers.token
        if (token) {
            try {
                console.log("test1")
                const payload = jwt.verify(token, config.SECRET)
                req.headers.uid = payload.uid
                next()
            } catch (ex) {
                
                console.log("test2")
                res.send(result.createResult('Invalid Token'))
            }
        } else
            res.send(result.createResult('Token is Missing'))
    }
}

module.exports = authorizeUser