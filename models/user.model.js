import mongoose,{Schema } from 'mongoose'
import bcrypt from 'bcrypt'
const userSchema = new Schema({
    username:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
        trim:true,
        index:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
        trim:true,
        
    },
    password:{
        type:String,
         required:[true, "Please enter a password..."],
        
    }
},{timestamps:true});


userSchema.pre("save" , async function(next){
    if(this.isModified("password")){
        this.password = await bcrypt.hash(this.password, 18)
    }
    else{
        next();
    }
})
export const User = mongoose.model("User", userSchema)