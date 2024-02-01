import asyncHandler from "../utils/asyncHandler.js";
import apiError from "../utils/apiError.js";
import {User} from "../models/user.model.js"

function isValidEmail(email){
    const re =  /\S+@\S+\.\S+/;
    return re.test(email)
}

function isStrongPassword(password){
    const lowercase = /[a-z]/.test(password);
    const uppercase = /[A-Z]/.test(password);
    const number = /[0-9]/.test(password);
    const special = /[@,#,$,%,&,*]/.test(password);
    const length = password.length >= 8;
    return lowercase && uppercase && number && special && length;
}


export const signup = asyncHandler(async(req,res)=>{
    const {username, email, password} = req.body;
    if([username,email,password].some((field)=>field?.trim()==="")){
        throw new apiError(400 , "All fields are required")
    }
    if(!isValidEmail(email)){
        throw new apiError (400,"Please enter a valid email")
    }

    if(!isStrongPassword(password)){
        throw new apiError(400, "Password must contain a-z,A-Z,0-9, special character and length must be greater than 8")
    }

    const existedUser = await User.findOne({
        $or:[{username},{email}]
    })

    if(existedUser){
        throw new apiError(400,"User already exist...")
    }

    const user = await User.create({
        username,
        email,
        password
    })

    await user.save();
    res.json({message : "Signup sucessfully"})
})