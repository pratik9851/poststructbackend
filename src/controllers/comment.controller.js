const express=require("express")
const router=express.Router()

const User=require("../models/user.model")
const Post=require("../models/post.model")
const CommentBody=require("../models/comment.model")
const Tag=require("../models/tag.model")



router.post("",async function(req,res){
    try{
    const commentBody= await CommentBody.create(req.body)
       return res.send(commentBody);
    }catch(err){
        return res.send(err.message)
    }
})
router.get("",async function(req,res){
    try{
    const commentBody= await CommentBody.find().lean().exec()
       return res.send(commentBody);
    }catch(err){
        return res.send(err.message)
    }
})
router.get("/:id",async function(req,res){
    try{
    const commentBody= await CommentBody.find(req.params.id).lean().exec()
       return res.send(commentBody);
    }catch(err){
        return res.send(err.message)
    }
})
router.patch("/:id",async function(req,res){
    try{
    const commentBody= await CommentBody.findByIdAndUpdate(req.params.id,req.body,{new:true}).lean()
       return res.send(commentBody);
    }catch(err){
        return res.send(err.message)
    }
})
router.delete("/:id",async function(req,res){
    try{
    const commentBody= await CommentBody.findByIdAndDelete(req.params.id).lean();
       return res.send.json({commentBody:commentBody});
    }catch(err){
        return res.send(err.message)
    }
})

module.exports=router