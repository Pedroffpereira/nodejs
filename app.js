const express = require('express')
const routes = require('./Routes/public.js');
const app = express()
var bodyparser= require('body-parser')
const port = 3000



app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended: false}))
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
app.use('/', routes)