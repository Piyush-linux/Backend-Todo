// init express mongoose path body-parser app
const express = require("express")
const mongoose = require("mongoose")
const path = require("path")
const body_parser = require("body-parser")
const app = express()

// storage
const static = path.resolve(__dirname, "public")

// Middleware
app.set("view engine", "pug")
app.use(express.static(static))
app.use(body_parser.urlencoded({ extended: true }))

// MongoDB
//- connection : rules -> collection -> field -> create
mongoose.connect("mongodb://localhost:27017/itemDB", { useUnifiedTopology: true, useNewUrlParser: true });
//- itm
const itm_Schema = new mongoose.Schema({
    name: String,
})
const itm = mongoose.model("item", itm_Schema)
const itm1 = new itm({
    name: "todo",
})
//- lst
const lst_Schema = new mongoose.Schema({
    name: String,
    list:[itm_Schema]
})
const lst = mongoose.model("lst", lst_Schema)
// itm1.save()

// get /
app.get("/", (req, res) => {
    // read data
    itm.find({}, (err, data) => {
        // if empty inert default
        if (err) { console.log(err) } else {
            res.render("index", { items: data || "hello" })
        }
    })
})
// post /
app.post("/", (req, res) => {
    // store on variable
    let i = req.body.item;
    // store on database
    let itm1 = new itm({
        name: i
    })
    itm1.save((err)=>{
        if (err) {console.log(err)}
            else {
                console.log('Item inserted successfully O')
            }
            res.redirect("/")
    })
})

//  delete /
app.post("/delete", (req, res) => {
    // get value
    let del = req.body.checkbox
    // search & delete
    itm.deleteOne({ _id: del }, (err) => {
        if (err) { console.log(err) } else {
            console.log('Deleted successfull X')
        }
    // redirect to get request
        res.redirect("/")
    })

})

// Query Page
app.get("/:qry",(req,res)=>{
    let page = req.params.qry;
    lst.findOne({name:page},(err,data)=>{
        if(!err){
            if (!data) {
                console.log('Doesnt exists')
            }else{
                console.log('exists')
            }
        }
        // res.send(`<h1> Welcome to page  ${qry} </h1>`)
    })
    const lst1= new lst({
        name: page,
        list: itm1
    })
    lst1.save((err)=>{
        if (!err) {
            console.log('inseted page O')
        }
    res.send(`<h1> Welcome to page  ${page} </h1>`)
    })
})

// Error Page
// app.get("*")


app.listen(3000, () => {
    console.log('listening http://localhost:3000')
})

/*

- S.U.M.M.A.R.Y -

# init
express : server creation
body-parser : form input get
path : file resolve path
mongoose : ODM betw node & MongoDB

# Routes
get /       = read data from DB & render on page
post /      = get data from user & insert into DB
post(del) / = get data from user & find from DB then delete
get /:qry   = get params and res acc to qry

# MongoDB

itmDB
    list[lst-todo]  )-(  todo[itm]

*/
