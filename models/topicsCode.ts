import mongoose from "mongoose";
import { ICodeTopics } from "../Types/SchemaTypes.js";



const topicsCodeSchema = new mongoose.Schema<ICodeTopics>({
    roadmap : {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Roadmap"
    },
    topic : {
        type: mongoose.Schema.Types.ObjectId,
        ref: "NewTopic"
    },
    code : {
        type: String
    }
}).index({code: 1}, {unique: true})

export const CodeTopic = mongoose.model("CodeTopic",topicsCodeSchema)