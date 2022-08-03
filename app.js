require('dotenv').config()
const mongoose = require('mongoose');
const express = require('express');
const app = express();
app.use(express.json());

const onboardingRoutes = require("./routes/onboarding");

mongoose.connect(process.env.DATABASE,
{
    useNewUrlParser: true,
    useUnifiedTopology:true,
}).then(()=>{
    console.log("DB CONNECTED")
})  

app.use("/api", onboardingRoutes)

const port = process.env.PORT || 3000;
app.listen(port, ()=>{
    console.log(`app is running at ${port}`)
})