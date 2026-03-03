
import mongoose from "mongoose";
const newtopicSchema = new mongoose.Schema({
  roadmap: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "roadmaps",
    
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

export const NewTopic = mongoose.model("NewTopic", newtopicSchema);