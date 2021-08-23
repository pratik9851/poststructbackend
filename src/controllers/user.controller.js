const express=require("express")
const router=express.Router()

const User=require("../models/user.model")
const Post=require("../models/post.model")
const CommentBody=require("../models/comment.model")
const Tag=require("../models/tag.model")


router.get("",async function(req,res){
    
    const users= await User.find().lean().exec();
    return res.send(users)
})

router.get("/:id",async function(req,res){
    
    const users= await User.findById(req.params.id).lean().exec();
    return res.send(users)
})

router.post("",async function(req,res){

    const user=await User.create(req.body)
    //const newUser=[...users, req.body];
    return res.send(user)
})

router.patch("/:id",async function(req,res){
const user =await User.findByIdAndUpdate(req.params.id,req.body,{new:true})
return res.send(user)


})
router.delete("/:id",async function(req,res){
    const user =await User.findByIdAndDelete(req.params.id).lean();
    return res.send(user)
    
    
    })
module.exports=router