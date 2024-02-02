import mongoose,{Schema } from 'mongoose'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

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
        
    },
    refreshToken:{
        type:String,
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

userSchema.methods.isPasswordMatch = async function(password){
    return await bcrypt.compare(password,this.password)
}

userSchema.methods.generateAcessToken = async function(){
        return jwt.sign({
            _id:this._id,
            email:this.email,
            username:this.username,
        },process.env.ACESS_TOKEN_SECRET,
        {
            expiresIn:process.env.ACESS_TOKEN_SECRET_EXPIRE,
        },
        )
}

userSchema.methods.generateRefreshToken = async function (){
        return jwt.sign(
            {
                _id:this._id
            },process.env.REFRESH_TOKEN_SECRET,
            {
                expiresIn:process.env.REFRESH_TOKEN_SECRET_EXPIRE,
            }
        )
}
export const User = mongoose.model("User", userSchema)