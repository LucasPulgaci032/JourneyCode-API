import mongoose from "mongoose"
import { User } from "../models/userSchema.js"
import bcrypt from 'bcrypt'
import jwt from "jsonwebtoken"
import { UserProg } from "../models/userProgress.js"
import { IUserProgress, TokenPayload } from "../Types/SchemaTypes.js"
import { CreateUserDTO } from "../DTO/createUserDTO.js"
import ConflictError from "../errors/conflictError.js"
import { ValidateUserDTO } from "../DTO/validateUserDTO.js"
import BadRequestError from "../errors/BadRequestError.js"
import { UnauthorizedError } from "../errors/UnauthorizedError.js"
import type { ParamsUserTopicProgress } from "../DTO/validateUserDTO.js"
import { ThemeDTO } from "../DTO/themeDTO.js"


class UserService{

    static async findUser(){

           return  User.find({}).sort({createdAt: -1})
          
    }

    static async findUserById(id : string){
      
      if(!id || id.length === 0) throw new Error("ID inválido")
        const userById = await User.findById(id)
      if(!userById) throw new Error("Id não encontrado!")
       return userById
    }


    static async postUser(data : CreateUserDTO) {
  

    const email : string = data.email.trim().toLowerCase()

      const existentUser = await User.findOne({email})
      if(existentUser){
       throw new ConflictError()
      }
    const hashed : string = await bcrypt.hash(data.password,10)
    const newUser = await User.create({
      ...data,
      email,
      password : hashed,
      
      topicsProgress : data.roadmapId
        ? [
            {
              roadmap: data.roadmapId,
            }
          ]
        : []
    });
    const payload : TokenPayload = {
    id : newUser._id.toString(),
    name :newUser.name,
    theme :  newUser.theme
  }
 
   const token = jwt.sign(
    payload,
    process.env.SECRET_TOKEN as string,
    {expiresIn : "1d"}
  );
   const user = newUser.toObject as any
   delete user.password
    return {token, user}
  
}
 
static async validateUser(data : ValidateUserDTO){
  
  const email = data.email.trim().toLowerCase()
  const password = data.password?.trim()
  
   if(!email || !password){
      throw new BadRequestError("Preencha todos os campos")
    
   }

  
  const user = await User.findOne({email})
   
  if(!user){
    throw new UnauthorizedError("Email ou senha incorretos!")
  }
  const validatePassword = await bcrypt.compare(data.password, user.password)

  if(!validatePassword) {
    throw new UnauthorizedError("Email ou senha incorretos!")
  }
  const payload : TokenPayload = {
    id : user._id.toString(),
    name : user.name,
    theme :  user.theme
  }
 
   const token = jwt.sign(
    payload,
    process.env.SECRET_TOKEN as string,
    {expiresIn : "1d"}
  );
  return{token}



}


static async findUserTopicProgress(data : ParamsUserTopicProgress) : Promise<IUserProgress | null> {{
  
    
    const progress = await UserProg.findOne({
      user : data.id,
      roadmap : data.roadmapId
    }).lean()
    return progress
  }
}

static async saveRoadmap(userId: string, roadmapId : string){
    return User.findOneAndUpdate({
      _id : userId
    },
    {$addToSet : {
          roadmaps: new mongoose.Types.ObjectId(roadmapId)
    },
 }
  ,{new : true}
  )
}

  
static async patchTopicProgress(id : string, roadmapId : string, topicName : string , isCompleted : boolean){
  
     return User.findOneAndUpdate({
      _id : id,
      "topicsProgress.roadmap": roadmapId
    },
    {
      $set : {
            [`topicsProgress.$.completedFields.${topicName}`]: isCompleted
      }
    }, {new: true})

   
}


static async deleteById(id : string){
 
    return User.findByIdAndDelete(id)
   
}


static async deleteDB(){
 
   await User.deleteMany({})
  

}

static async setBackgroundTheme(data : ThemeDTO){
  
    const theme = data.theme
    
    return User.findByIdAndUpdate(
      {_id :  data.id},
      {$set: {theme}},
      {upsert : true}
    )
  
}
}
export default UserService

//O backend é a fonte única da verdade. O front apenas dispara intenções ou eventos.