import {Roadmap} from "../models/roadmaps.js"
import { IRoadmap } from "../Types/SchemaTypes.js";

class RoadmapService {
  
  static async listData(){
    
        return Roadmap.find({})
     
    }

    static async listDataId(id : string){
        if(!id || id.length === 0) throw new Error("id invalido")
        return Roadmap.findById(id)
       
    }

    static async postData(body : IRoadmap){
    
       return Roadmap.create(body)
     
    }

    static async putData(id : string, body : Partial<IRoadmap>){

       if(!id || id.trim().length === 0) throw new Error("id inválido")

       return Roadmap.findByIdAndUpdate(id,body,{new:true})

    }

    static async patchData(id : string,body:Partial<IRoadmap>){

        if(!id || id.trim().length === 0) throw new Error("id inválido")

        return Roadmap.findByIdAndUpdate(id,body, {new: true}).populate('topics')   

    }

    static async deleteData(id : string, body : Partial<IRoadmap>){
   
        if(!id || id.trim().length === 0) throw new Error("id inválido")

        return  Roadmap.findByIdAndDelete(id,body)
      
    }

    static async findByKey(name : string ) {
   
          if(!name || name.trim().length === 0){
            throw new Error("nome inválido")
                 
          }
          const rgx = {$regex : `^${name}$`, $options: "i" }
          return Roadmap.findOne({
                  name : rgx 
                })
          
    }

  
  }

export default RoadmapService;

//json.parse serve para transformar em json, utf-8 para ser lido como string, send para enviar o que foi lido 

