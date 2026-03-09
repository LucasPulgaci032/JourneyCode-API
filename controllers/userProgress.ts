import { UserProg } from "../models/userProgress.js";

class UserProgressController{
    static async findUserProgress(req: Req, res: Res, next :Next){
        try{
           
        const userProgress = await UserProg.find({})
        return res.status(200).send(userProgress)
        }catch(error){
            next(error)
        }
    }

    static async findByRoadmap(req: Req, res: Res, next :Next){
        try{
        const userId = req.user!.id
        const {roadmapId} = req.params
        const userProgress = await UserProg.find({
            user : userId,
             roadmap: roadmapId
        })
        res.status(200).send(userProgress)
        }catch(error){
            next(error)
        }

    }
   
    static async markTopic(req: Req, res: Res, next :Next){
    try {
        const userId = req.user!.id;
        const { roadmap, topic, isCompleted } = req.body; 
        console.log("BODY:", req.body);
        const progress = await UserProg.findOneAndUpdate(
            { user: userId,roadmap, topic },
            {
               $set : {
                isCompleted
               },
                $setOnInsert: {
                user: userId,
                roadmap,
                topic
        }
            },
            { upsert: true, new: true }
        );

        res.json(progress);
    } catch(error) {
       next(error)
    }
}

    static async findAllCompletedTopics(req: Req, res: Res, next :Next){
        try{
          const {id} = req.params
          const allCompletedTopics = await UserProg.find({
            user : id,
            isCompleted : true
          }).lean()
          res.status(200).json(allCompletedTopics)
        }catch(error){
          next(error)
        }
    }

}

export default UserProgressController