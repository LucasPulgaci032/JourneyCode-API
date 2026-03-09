
import { NewTopic } from "../models/newTopicSchema.js";
import { Roadmap } from "../models/roadmaps.js";

class newTopicsController{
    static async findNewTopics(req : Req, res : Res , next : Next){
        try{
       const newTopics = await NewTopic.find({}).populate('roadmap','name')
       res.status(200).send(newTopics)
        }catch(error){
            next(error)
        }
    }
    static async findByKey(req : Req, res : Res , next : Next){
        try{
        const {roadmapName} = req.query
        if(!roadmapName) return res.status(400).json({message : 'nome inesistente'})
         
             const rgx = {$regex : `^${roadmapName}$`, $options: "i" }
            const roadmaps = await Roadmap.find({name : rgx})
            if(!roadmaps) return res.status(404).json({message : 'roadmap não encontrado'})

                  const roadmapIds = roadmaps.map(r => r._id);

            const topics = await NewTopic.find({roadmap : {$in : roadmapIds} }).populate('roadmap','name').select(' -createdAt -updatedAt')
        

            res.status(200).send(topics)
        }catch(error){
            next(error)
        }
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

export default newTopicsController