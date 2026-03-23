
import { INewTopic } from "../Types/SchemaTypes.js";



import mongoose from "mongoose";
const newtopicSchema = new mongoose.Schema<INewTopic>({
  roadmap: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Roadmap",
    
  },

  title: {
    type: String,
    required: true
  },

  content: {
    type: [String],
    default: []
  }

}, { timestamps: true, versionKey : false });

export const NewTopic = mongoose.model<INewTopic>("NewTopic", newtopicSchema);