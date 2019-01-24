const express = require('express')
const exphbs  = require('express-handlebars');
const routes = require('./controllers/burgers_controller');
const app = express()
const PORT = process.env.PORT || 3000

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Parse application body as JSON
app.use(express.urlencoded({extended: true}))
app.use(express.json())

// Set Handlebars.
app.engine("handlebars",exphbs({defaultLayout: "main"}))
app.set("view engine","handlebars")

// give server access to routes
// app.use(routes)

// testingggg
// const connection = require('./config/connection')
const orm = require('./config/orm')
orm.selectAll('burgers',function(err,data){
    console.table(data)
})

// Start our server so that it can begin listening to client requests.
// Log (server-side) when our server has started
app.listen(PORT,()=>console.log(`Listening to PORT:${PORT}`))