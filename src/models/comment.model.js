const mongoose=require("mongoose")


const commentBodySchema= new mongoose.Schema({
    commentBody:{type:String,required:true},
    postId:{type:mongoose.Schema.Types.ObjectId,
        ref:"post",
        required:true
    
    }
},{
    versionKey:false,
    timestamps:true
})

const CommentBody=mongoose.model("commentBody",commentBodySchema);

module.exports=CommentBody