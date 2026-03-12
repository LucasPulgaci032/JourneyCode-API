
import UserProgressService from "../services/userProgress.js";

class UserProgressController {
    
    static async findUserProgress(req : Req, res : Res, next : Next){
        try{
            const allUserProgress = await UserProgressService.findUserProgress()
            res.status(200).json(allUserProgress)
        }catch(error){
            next(error)
        }
    }

    static async findByRoadmap(req : Req, res : Res, next : Next){
        try{
            const userId = req.user!.id
            const roadmapId = String(req.params.roadmapId)
        
            const userProgressByRoadmap = await UserProgressService.findByRoadmap({userId, roadmapId })
            res.status(200).json(userProgressByRoadmap)
        }catch(error){
            next(error)
        }

    }

    static async markTopic(req : Req, res : Res, next : Next){
        try{
             const user = req.user!.id;
             const { roadmap, topic, isCompleted } = req.body; 
             
             const markedTopic = await UserProgressService.markTopic({user ,roadmap, topic, isCompleted})
             res.status(200).json(markedTopic)
        }catch(error){
            next(error)
        }
    }

    static async findAllCompletedTopics(req : Req, res : Res, next : Next){
        try{
            const id = String(req.params.id)
            const allMarked = await UserProgressService.findAllCompletedTopics(id)
            res.status(200).send(allMarked)
        }catch(error){
            next(error)
        }
    }
}

export default UserProgressController