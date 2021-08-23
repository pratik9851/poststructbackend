const express=require("express")
const router=express.Router()

const User=require("../models/user.model")
const Post=require("../models/post.model")
const CommentBody=require("../models/comment.model")
const Tag=require("../models/tag.model")



router.post("/tags",async function(req,res){
    try{
        const tag= await Tag.create(req.body)
           return res.send(tag);
        }catch(err){
            return res.send(err.message)
        }

})
router.get("",async function(req,res){
    try{
        const tag= await Tag.find().lean().exec()
           return res.send(tag);
        }catch(err){
            return res.send(err.message)
        }

})
router.get("/:id",async function(req,res){
    try{
        const tag= await Tag.findById(req.params.id).lean().exec()
           return res.send(tag);
        }catch(err){
            return res.send(err.message)
        }

})
router.patch("/:id",async function(req,res){
    try{
        const tag= await Tag.findByIdAndUpdate(req.params.id,req.body,{new:true}).lean()
           return res.send(tag);
        }catch(err){
            return res.send(err.message)
        }

})
router.delete("/:id",async function(req,res){
    try{
        const tag= await Tag.findByIdAndDelete(req.params.id).lean()
           return res.json({tag:tag});
        }catch(err){
            return res.send(err.message)
        }

})

module.exports=router