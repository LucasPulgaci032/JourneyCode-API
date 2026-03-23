import { Types } from "mongoose"

export interface INewTopic {
  roadmap: Types.ObjectId
  title: string
  content: string[]
  createdAt: Date
  updatedAt: Date
}

export interface IUserProgress {
   user : Types.ObjectId;
   roadmap: Types.ObjectId;
   topic:Types.ObjectId;
   isCompleted : Boolean
}

export interface IRoadmap {
    name : string;
    description : [string];
    topics : Types.ObjectId[]
}

export interface IUser {
    name: string;
    email: string 
    password :string,
    roadmaps: string[],
    theme: boolean
  }

export interface TokenPayload {
  id: string
  name: string,
  theme : boolean
}  