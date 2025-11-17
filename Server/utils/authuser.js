const jwt = require('jsonwebtoken')
const result = require('./result')
const config = require('./config')

function authorizeUser(req, res, next) {

    const url = req.url
    console.log(url)
    if (url == '/user/signin' || url == '/user/signup' || url == '/category') 
        next()
    else if (url == '/blogs' && req.method == 'GET')
        next()
    else {
        const token = req.headers.token
        if (token) {
            try {
                const payload = jwt.verify(token, config.SECRET)
                req.headers.uid = payload.uid
                next()
            } catch (ex) {
                res.send(result.createResult('Invalid Token'))
            }
        } else{
            res.send(result.createResult('Token is Missing'))
        }
    }
}

module.exports = authorizeUser