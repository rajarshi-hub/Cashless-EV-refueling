const { urlencoded,json } = require('body-parser')
const express = require('express')
const mongoose = require('mongoose')
const app = express()
mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost:27017/transaction')
const User = require('./models/user')
app.use(json())
app.use(urlencoded({
    extended:true
}))
app.get('/',(req,res)=>{
    console.log('Server UP on Ngrok')        //testing
    res.end()
})
app.post('/webhooks/inbound',(req,res)=>{   //parsing message
    console.log(req.body)
    const user = new User({message_id:req.body.MessageSid,amount:'600'})
    console.log(user)
    let output
    try{
    async () => {
        output = await user.save();
        await console.log(output)
     }
    }
    catch(err)
    {
    console.log(err)
    }
    res.send()
})

app.listen(3000,(req,res)=>{
    console.log('listening to port 3000')
})