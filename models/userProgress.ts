import mongoose from "mongoose";
import { IUserProgress } from "../Types/SchemaTypes.js";

const userProgress = new mongoose.Schema<IUserProgress>({
   user : {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required : true
   },
   roadmap : {
    type: mongoose.Schema.Types.ObjectId,
    ref : 'Roadmap',
    required : true
   },
   topic : {
    type : mongoose.Schema.Types.ObjectId,
    ref:'NewTopic',
    required : true
   },
   isCompleted : {
    type : Boolean,
    default : false
   }
},
{timestamps : true}).index({user : 1,roadmap: 1, topic : 1}, {unique: true})


export const UserProg =  mongoose.model<IUserProgress>('UserProgress', userProgress)