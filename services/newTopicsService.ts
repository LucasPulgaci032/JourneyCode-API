
import { NewTopic } from "../models/newTopicSchema.js";
import { Roadmap } from "../models/roadmaps.js";

class newTopicsServices{
    static async findNewTopics(){    

       return NewTopic.find({}).populate('roadmap','name')

    }

    static async findTopicById(id : string){
        if(!id || id.trim().length === 0) throw new Error("id invalido")
        return NewTopic.findOne({_id : id})
    }

    static async findByKey(roadmapName : string){
       
        if(!roadmapName) throw new Error("nome inexistente")
         
             const rgx = {$regex : `^${roadmapName}$`, $options: "i" }
            const roadmaps = await Roadmap.find({name : rgx})
            if(!roadmaps || roadmaps.length === 0){
                throw new Error("roadmap não encontrado")
            } 
                  const roadmapIds = roadmaps.map(r => r._id);

            return NewTopic.find({roadmap : {$in : roadmapIds} }).populate('roadmap','name').select(' -createdAt -updatedAt')
        
    }
    static async deleteAllNewTopics(req : Req, res : Res , next : Next){
        try{
          await NewTopic.deleteMany({})
         return res.status(200).json({message: "deleted"})
         }
         catch(error){
           next()
         }
    }
}

export default newTopicsServices