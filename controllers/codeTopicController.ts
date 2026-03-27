import CodeTopicService from "../services/codeTopicService.js"

class CodeTopicController {

    static async findCodeTopics(req: Req, res: Res, next : Next){
        try{
            const codeTopics = await CodeTopicService.findCodeTopics()
            res.status(200).json(codeTopics)
        }catch(error){
            next(error)
        }
    }


    static async postCodeTopic(req: Req, res: Res, next : Next){
        try{
            const body = req.body
            const CodeTopic = await CodeTopicService.postTopic(body)
            res.status(201).json(CodeTopic)
        }catch(error){
            next(error)
        }
    }

    static async findCodeByRoadmapId(req: Req, res: Res, next : Next){
       try{
         const {roadmapId} = req.params
         const codeByRoadmapId = await CodeTopicService.findCodeByRoadmapId(String(roadmapId))
         res.status(200).json(codeByRoadmapId)
       }catch(error){
        next(error)
       }
    }
}

export default CodeTopicController