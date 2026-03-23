import mongoose from "mongoose";
import { IRoadmap } from "../Types/SchemaTypes.js";

const roadmaps = new mongoose.Schema<IRoadmap>({
    name: {
        type : String,
        required:true
    },
     
    description: {
        type : [String],
        required: true
             
    },
    
       
    } 
)

export const Roadmap = mongoose.model<IRoadmap>("Roadmap",roadmaps);
