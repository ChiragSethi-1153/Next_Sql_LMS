require('dotenv').config()

try{
    if(process.env.PORT){
        console.log("PORT is " + process.env.PORT)
    }
    else{ 
        process.exit() 
    }
}
catch(err){  
    process.exit() 
}

const {sequelize}= require('./models')
const cors = require('cors')
const express = require('express')
const cookieParser = require("cookie-parser");
const multer = require('multer')
const path = require('path')
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors({credentials: true, origin: true}));
app.use(cookieParser())

app.use('/uploads',express.static(path.join(__dirname, 'uploads')))
app.use("/", require('./routes'))


app.listen({port: process.env.PORT}, async () => {
    console.log(`Server running on PORT ${process.env.PORT}`)
    try {
        await sequelize.authenticate();
        console.log('🔥 Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
})
