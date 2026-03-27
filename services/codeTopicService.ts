import { CodeTopic } from "../models/topicsCode.js";

type CodeTopicBody = {
    roadmap:string,
    topic:string,
    code:string
}


class CodeTopicService {

    static async findCodeTopics(){
        return CodeTopic.find({})
    }


    static async postTopic(body : CodeTopicBody){
        return CodeTopic.create(body)
    }

    static async findCodeByRoadmapId(roadmapId : string){
        return CodeTopic.find({roadmap : roadmapId})
    }
}

export default CodeTopicService