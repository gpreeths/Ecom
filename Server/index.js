const express = require('express')
const mongoose = require('mongoose')
const port = 3000 || 0
const app = express()
const cors=require('cors')
app.use(cors())
require("dotenv").config()
app.use(express.json())
mongoose.connect(process.env.MONGO_URL)
const path=require('path')

app.use('/uploads',express.static(path.join(__dirname,'uploads')))

const userRoute = require("./Routers/userRouter")
app.use('/', userRoute)
const productRouter= require("./Routers/productRouter")
app.use('/product',productRouter)





app.listen(process.env.PORT, () => {
    console.log(`running on ${process.env.PORT}`);

})

