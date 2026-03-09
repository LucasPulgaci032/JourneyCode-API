import {Roadmap} from "../models/roadmaps.js"

class RoadmapControllers {
  
  static async listData(req : Req, res : Res, next : Next){
      try{
        const busca = await Roadmap.find({})
        res.status(200).send(busca)
      }catch(error){
        next(error)
      }
    }
    static async listDataId(req : Req, res : Res, next : Next){
      try{
        const id = req.params.id;
        const busca = await Roadmap.findById(id)
        res.status(200).send(busca)
      }catch(error){
       next(error)
      }
    }

    static async postData(req : Req, res : Res, next : Next){
      try{
        const body = await Roadmap.create(req.body)
        res.status(201).send({message:"objeto criado!",body})
      }catch(error){
        next(error)    
      }
    }

    static async putData(req : Req, res : Res, next : Next){
        try{
          const {id} = req.params;
          const body = await Roadmap.findByIdAndUpdate(id,req.body,{new:true})
          res.status(200).send({message:"recurso atualizado",body})
        }catch(error){
          next(error)
        }
    }
    static async patchData(req : Req, res : Res, next : Next){
      try{
        const {id} = req.params
        const body = await Roadmap.findByIdAndUpdate(id,req.body, {new: true}).populate('topics')
        if(!body) return res.send("Recurso não encontrado")
        res.status(200).send({message:"recurso atualizado",body})
      }catch(error){
          next(error)
        }
    }
    static async deleteData(req : Req, res : Res, next : Next){
      try{
        const {id} = req.params
        await Roadmap.findByIdAndDelete(id,req.body)
        res.status(200).send({message:"Recurso excluído"})
      }catch(error){
        next(error)
      }
    }
    static findByKey = async (req : Req, res : Res, next : Next) => {
      try{
          const {name} = req.query;
          if(name !== null){
               const rgx = {$regex : `^${name}$`, $options: "i" }
                const busca = await Roadmap.findOne({
                  name : rgx 
                })
                res.status(200).send(busca)
          }else{
            res.status(200).send([])
          }
         
      }catch(error){
        next(error)
      }  
    }
    }

  


export default RoadmapControllers;

//json.parse serve para transformar em json, utf-8 para ser lido como string, send para enviar o que foi lido 

