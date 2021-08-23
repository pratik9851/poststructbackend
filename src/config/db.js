const mongoose=require("mongoose")

const connect = ()=>{

    return mongoose.connect("mongodb://127.0.0.1:27017/mongooseweb10",{


        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify:false
    

    })

}
module.exports=connect;