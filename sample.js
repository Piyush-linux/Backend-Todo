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

// mongo
mongoose.connect("mongodb://localhost:27017/DBS", { useUnifiedTopology: true, useNewUrlParser: true });
// rules -> collection -> field -> create
const Schema = new mongoose.Schema({
    name: String,
})
const collection = mongoose.model("student", Schema)
const field = new collection({
    name: "todo",
})
// field.save()

// get /
app.get("/", (req, res) => {
    // read data
    collection.find({}, (err, data) => {
        // if empty inert default
        if (err) { console.log(err) } else {
            res.render("index", { items: data })
        }
    })
})
// post /
app.post("/", (req, res) => {
    // store on variable
    let i = req.body.item;
    // // store on database
    let itm = new collection({
        name: i
    })
    itm.save().then(() => {
        res.redirect("/")
    })
    // res.redirect("/")
})

//  delete /
app.post("/delete", (req, res) => {
    // send value
    let del = req.body.checkbox
    collection.deleteOne({ _id: del }, (err) => {
        if (err) { console.log(err) } else {
            console.log('Deleted successfull X')
        }
        res.redirect("/")
    })

})


app.listen(3000, () => {
    console.log('listening...')
})