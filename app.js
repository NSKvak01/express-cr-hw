const express = require('express')
const app = express()
const path = require("path")
const logger = require("morgan")
const indexRouter = require('./router/indexRouter')
const todoRouter = require('./router/todoRouter')

app.use(logger("dev"))
app.use(express.json())

app.set("views", path.join(__dirname, "views"))
app.set("view engine", "ejs")


app.use('/', indexRouter)
app.use("/api/todo", todoRouter)

// app.listen(3000, function(){
//     console.log(`Server is running on PORT: ${3000}`);
// })

module.exports = app