const express = require('express')
const app = express()
const morgan = require('morgan')
const cors = require("cors")
const bodyParser = require("body-parser")

app.use(cors())

app.get('/',(req,res) => {
    req.send("welcome")
    console.log('terminal')

})
app.listen((3000,()=>{
    console.log('server running')
}))

//const productRoutes = require('./api/Routes/Products')
//const orderRoutes = require('./api/Routes/orders')

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.use((req,res,next) => {
    res.header('Access-Control-Allow-Origin','*')
    res.header('Access-Control-Allow-Headers','Origin,X-Requested-With,Content-Type,Accept,Authorization')
    res.header('Access-Control-Allow-Credentials','true')

    if(req.method==='OPTIONS'){
        res.header('Access-Control-Allow-Methods','PUT,POST,PATCH,GET,DELETE')
        return res.status(200).json({
           // message:'It works'
        })
    }
    next()
})
/*app.use((req,res,next)=>{
    res.status(200).json({
        message:'It Works'
    })
})*/
//app.use('/Products', productRoutes)
//app.use('/orders', orderRoutes)

app.use((req, res, next) => {
    const error = new Error('Not found')
    error.status = 404
    next(error)
})

app.use((error, req, res, next) => {
    res.status(error.status || 500)
    res.json({
        error: {
            message: error.message
        }
    })
})



module.exports = app