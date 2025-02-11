import mongoose, { Schema } from "mongoose";
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'

const userSchema = new Schema(
  {
    userName: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      index: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    fullName: {
      type: String,
      required: true,
      index: true,
      trim: true,
    },
    password: {
      type: String,
      required: [true, 'Password is required'],
    },
    avatar: {
      type: String, // We are using to store URL by using cloudinary services.
      required: true,
    },
    coverImage: {
      type: String,
    },
    refreshToken: {
      type: String,
    },
    watchHistory: [
      {
        type: Schema.Types.ObjectId,
        ref: "Video",
      },
    ],
  },
  { timestamps: true }
);

userSchema.pre("save", async function( next){
    if(this.isModified('password')){
        this.password = bcrypt.hash(this.password, 10)
    }
    next()
} )  

// Pre k callback me arrow function use nhi krna, 
// kiu k isme this ka reference nhi hota jo is object/schema ko refer dene k liye required hai.
// middleware ko next flag ka access dena hota hain


export const User = mongoose.model("User", userSchema);
