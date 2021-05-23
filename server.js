const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/studentDB", { useUnifiedTopology: true, useNewUrlParser: true });

// const Schema = new mongoose.Schema({
// 	name: String,
// })
// const collection = mongoose.model("student",Schema)
// const field = new collection({
// 	name: "Piyush",
// })
// stu1.save()

// New Collection

// const usrSchema = new mongoose.Schema({
// 	name: String,
// 	age: Number
// })

// const usr = mongoose.model("usr",usrSchema);

// const usr1= new usr({
// 	name: "Rakesh",
// 	age: 64
// })
// const usr2= new usr({
// 	name: "Rohan",
// 	age: 32
// })
// const usr3= new usr({
// 	name: "Rupali",
// 	age: 55
// })
// save many
// collection.InMy( [..],(err,field) )
// usr.insertMany([usr1,usr2,usr3],(err,usr)=>{
// 	(err)? console.log(err) : console.log(usr);
// })

// Read

// filter Read
// usr.find({name:"Rahul"},(err,data)=>{
// console.log(data)
// })
//  
// usr.find({},(err,usrs)=>{
// 	// console.log(usrs)
// 	usrs.map((x)=>console.log(x.name))
// 	// close connection
// })

//  Data Validation
//  compulsory name , erviw bet 1 to 10
// const product_Schema = new mongoose.Schema({
// 	name:{
// 		type: String,
// 		required: true
// 	},
// 	review:{
// 		type: Number,
// 		min: 1,
// 		max: 10
// 	}
// });

// const product = mongoose.model("product",product_Schema);

// const soap = new product({
// 	name: "Lifeboi",
// 	review: 5
// })
// soap.save()
// mongoose.connection.close()

// const product_Schema = new mongoose.Schema({
//     name: {
//         type: String,
//         required: true
//     },
//     review: {
//         type: Number,
//         min: 1,
//         max: 10
//     }
// });

// const product = mongoose.model("product", product_Schema);

// const soap = new product({
//     name: "Sprite",
//     review: 3
// })
// soap.save()

//  Update({filter},updater,(err)) | (old,new,err)

// product.updateOne({ _id: "60a9fd1bb5af932bd9728992" }, { name: "Pears" }, (err) => {
//     if (err) { console.log(err) } else {
//         console.log('Sucessfull :)')
//     }
// })

// Delete({filter},(err))

// delete one
// product.deleteOne({ name:"Loriel" },(err)=>{
// 	 if (err) { console.log(err) } else {
//         console.log('Sucessfully Deleted X')
//     }
// })

// Deleta everything
// product.deleteMany({},(err)=>{
// 	 if (err) { console.log(err) } else {
//         console.log('Sucessfully Deleted All DOC')
//     }
// })

// relation

const product_Schema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    review: {
        type: Number,
        min: 1,
        max: 10
    }
});

const product = mongoose.model("product", product_Schema);

const soap = new product({
    name: "Sprite",
    review: 3
})

// soap.save();

const person_Schema = new mongoose.Schema({
	name: String,
	order: product_Schema
})

const person = mongoose.model("person",person_Schema)

const piyu = new person({
	name: "Piyush",
	order: soap
})

// piyu.save()
