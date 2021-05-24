/*
Resources : https://www.nodejsera.com/nodejs-tutorial-day2-filesystem.html
init express
npm i pug
views > .pug
*/
const express = require("express")
const mongoose = require("mongoose")
const path = require("path")
const body_parser=require("body-parser")

const app = express()
const static= path.resolve(__dirname,"public")
let items = []


// Middlewares
app.set("view engine", "pug")
app.use(express.static(static))
app.use(body_parser.urlencoded({extended:true}))

// mongoBD config
mongoose.connect("mongodb://locahost:27017/todoDB",{ useNewUrlParser: true, useUnifiedTopology: true } )
const todo_Schema= new mongoose.Schema({
	name: String
})
const todo = mongoose.model("todo",todo_Schema)

const itm1= new todo({name: "MLM"})
const itm2= new todo({name: "Article"})

todo.insertMany([itm1,itm2],(err)=>{
	if (err) {console.log(err)}
		else {
			console.log('Successfully Inserted :)')
		}
})
// get /
app.get("/", (req, res) => {
    res.render("index", { items: items })
})
// post /
// app.post("/",(req,res)=>{
	// store on variable
	// let i = req.body.item;
	// items.push(i)
	// // store on database
	// let itm = new todo({
	// 	name: i
	// })
	// itm.save().then(()=>{
	// 	res.redirect("/")
	// })
	// todo.insertOne({item: i})

	// console.log(items)
// })

app.listen(3000, () => {
    console.log('Running on port http://localhost:3000')
})