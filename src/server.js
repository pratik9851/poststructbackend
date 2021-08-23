const express=require("express")




const connect= require("./config/db")

const User=require("./models/user.model")
const Post=require("./models/post.model")
const CommentBody=require("./models/comment.model")
const Tag=require("./models/tag.model")

const usercontroller=require("./controllers/user.controller")
const postcontroller=require("./controllers/post.controller")
const commentcontroller=require("./controllers/comment.controller")
const tagcontroller=require("./controllers/tag.controller")





const app=express()

app.use(express.json());

app.use("/users",usercontroller)
app.use("/posts",postcontroller)
app.use("/tags",tagcontroller)
app.use("/commentBodys",commentcontroller)






    

app.listen(2345,async ()=>{
     await connect();
    console.log("listing to port 2345");
})