import { MarkUserProgressDTO } from "../DTO/markUserDTO.js";
import { ParamsFindUserProgress } from "../DTO/validateUserDTO.js";
import BadRequestError from "../errors/BadRequestError.js";
import { UserProg } from "../models/userProgress.js";

class UserProgressService{

    static async findUserProgress(){
       return UserProg.find({}).sort({updatedAt : -1})
     
    }

    static async findByRoadmap(data : ParamsFindUserProgress){
      
      
        if(!data.userId || !data.roadmapId) throw new BadRequestError()
            console.log("userId:", data.userId, "roadmapId:", data.roadmapId);
        return UserProg.find({
             user : data.userId,
             roadmap: data.roadmapId
        })
       
    }
   
    static async markTopic(data : MarkUserProgressDTO){
        const userId = data.user
        const roadmapId = data.roadmap
        const topicId = data.topic

        return UserProg.findOneAndUpdate(
            { user: userId, roadmap : roadmapId, topic : topicId}, //filter
            {
               $set : {
                isCompleted : data.isCompleted  
               },                 //update
                $setOnInsert: {
                user: userId,
                roadmap : roadmapId,
                topic : topicId
        }
            },
            { upsert: true, new: true } //option
        );

      
}

    static async findAllCompletedTopics(id : string){
       
          
          return UserProg.find({
             user : id,
             isCompleted : true
          }).lean()
        
    }

}

export default UserProgressService