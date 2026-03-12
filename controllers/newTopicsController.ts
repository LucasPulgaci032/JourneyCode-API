import newTopicsServices from "../services/newTopicsService.js";



class newTopicsController {
    static async findNewTopics(req : Req, res : Res, next : Next){
        try{
          const allTopics =  await newTopicsServices.findNewTopics()
          res.status(200).json(allTopics)
        }catch(error){
            next(error)
        }
    }

    static async findTopicById(req : Req, res : Res, next : Next){
        try{
            const id = req.params.id as string
            const topicById = await newTopicsServices.findTopicById(id)
            res.status(200).json(topicById)
        }catch(error){
            next(error)
        }
    }

    static async findByKey(req : Req, res : Res, next : Next){
        try{
            const {roadmapName} = req.query
            const topicsByKey = await newTopicsServices.findByKey(roadmapName as string)
            res.status(200).json(topicsByKey)
        }catch(error){
            next(error)
        }
    }
}

export default newTopicsController