const express=require("express")
const router=express.Router()

const User=require("../models/user.model")
const Post=require("../models/post.model")
const CommentBody=require("../models/comment.model")
const Tag=require("../models/tag.model")


router.post("",async function(req,res){
    try{
        const post= await Post.create(req.body)
        return res.send(post)
    }catch(err){
       return res.send(err.message);
    }

})

module.exports=router