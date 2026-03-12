import UserService from "../services/userService.js";
import type { ParamsUserTopicProgress } from "../DTO/validateUserDTO.js";



class UserController {

    static async findUser(req : Req, res : Res, next : Next){
        try{
            const allUsers = await UserService.findUser()
            return res.status(200).json(allUsers)
        }catch(error){
            next(error)
        }
    }

    static async findUserById(req : Req, res : Res, next : Next){
        try{
            const {id} = req.params
            const userById = await  UserService.findUserById(id as string)
            res.status(200).json(userById)
        }catch(error){
            next(error)
        }
    }

    static async postUser(req : Req, res : Res, next : Next){
        try{
            let { name, email, password} = req.body;
            const newUser = await UserService.postUser({
                name, email, password
            })
            res.status(201).json(newUser)
        }catch(error){
            next(error)
        }
       

    }

    static async validateUser(req : Req, res : Res, next : Next){
        try{
            const {email , password} = req.body
            const validatedUser = await UserService.validateUser({email, password})
            return res.status(200).json(validatedUser)
        }catch(error){
            next(error)
        }
    }

    static async findUserTopicProgress(req : Req, res : Res, next : Next){
        try{
            const {id, roadmapId} = req.params as ParamsUserTopicProgress
            const userByTopicProgress = await UserService.findUserTopicProgress({id , roadmapId})
            res.status(200).json(userByTopicProgress)
        }catch(error){
            next(error)
        }
    }

    static async patchTopicProgress(req : Req, res : Res, next : Next){
        try{
             const {id} = req.params
             const {roadmapId, topicName, isCompleted} = req.body
             const roadmapTopicUpadated = await UserService.patchTopicProgress(id as string, roadmapId, topicName, isCompleted )
             res.status(200).json(roadmapTopicUpadated)
        }catch(error){
            next(error)
        }
    }

    static async deleteById(req : Req, res : Res, next : Next){
         try{
            const id = req.params.id
            const deletedUser = await UserService.deleteById(id as string)
            res.status(200).json(deletedUser)

        }catch(error){
            next(error)
        }

}
    static async deleteDB(req : Req, res : Res, next : Next){
        try{
            await UserService.deleteDB()
            return res.status(200).json({message : "Banco apagado!"})
        }catch(error){
            next(error)
        }
    }

    static async setBackgroundTheme(req : Req, res : Res, next : Next){
        try{
            const id = req.user!.id 
            const {theme} = req.body 
            const setTheme = await UserService.setBackgroundTheme({id , theme})
            res.status(200).json(setTheme)
        }catch(error){
            next(error)
        }
    }
}
export default UserController
