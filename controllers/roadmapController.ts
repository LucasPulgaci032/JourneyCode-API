import RoadmapService from "../services/roadmapService.js";
import { IRoadmap } from "../Types/SchemaTypes.js";



class RoadmapController{
    static async listData(req : Req, res: Res, next : Next){
        try{
            const allRoamaps = await RoadmapService.listData()
            res.status(200).send(allRoamaps)
        }catch(error){
            next(error)
        }
    }
   
    static async listDataId(req : Req, res: Res, next : Next){
        try{
            const id = req.params.id
            const allRoadmapsById = await RoadmapService.listDataId(id as string)
            res.status(200).send(allRoadmapsById)
        }catch(error){
            next(error)
        }
    }

    static async postData(req : Req, res: Res, next : Next){
        try{
            const body = req.body
            const createBody = await RoadmapService.postData(body as IRoadmap)
            res.status(201).json({message : "created!", createBody})
        }catch(error){
            next(error)
        }
    }
    static async putData(req : Req, res: Res, next : Next){
        try{
            const id = req.params.id
            const body = req.body
            const updated = await RoadmapService.putData(id as string, body as IRoadmap)
            res.status(200).json({message: "atualizado", updated})
        }catch(error){
            next(error)
        }
    }
    static async patchData(req : Req, res: Res, next : Next){
        try{
            const id = req.params.id
            const body = req.body
            const updated = await RoadmapService.patchData(id as string,body as Partial<IRoadmap>)
            res.status(200).json({message:"atualizado", updated})
        }catch(error){
            next(error)
        }
    }

    static async deleteData(req : Req, res: Res, next : Next){
        try{
            const id = req.params.id
            const body = req.body
            const topicDeleted = await RoadmapService.deleteData(id as string, body as IRoadmap)
            res.status(204).json(topicDeleted)
        }catch(error){
            next(error)
        }
    }
    static async findByKey(req : Req, res: Res, next : Next){
        try{
            const name = req.query.name as string
            const roadmapByName = await RoadmapService.findByKey(name)
            res.status(200).json(roadmapByName)
        }catch(error){
            next(error)
        }
    }
}

export default RoadmapController