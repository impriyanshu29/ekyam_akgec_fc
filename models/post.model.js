import mongoose,{Schema} from "mongoose";

const postSchema = new Schema({
    userId:{
        type:String,
        required:true,
    },
    content:{
        type:String,
        max:500,
    },
    image:{
        type:String,
        required:true,
    },
    title:{
        type:String,
        required:true,
       unique:true
    
    },
    category:{
        type:String,
        default:"uncategorized",
    },
    slug:{
        type:String,
        required:true,
        unique:true,
    }
},{timestamps:true});



export const Post =  mongoose.model("Post",postSchema);