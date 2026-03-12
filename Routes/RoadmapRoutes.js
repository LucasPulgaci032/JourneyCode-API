
import RoadmapController from '../controllers/roadmapController.js';
import express from 'express';

const roadmapRouter = express.Router()


roadmapRouter.get('/',RoadmapController.listData)
roadmapRouter.post('/',RoadmapController.postData)
roadmapRouter.get('/lang', RoadmapController.findByKey)
roadmapRouter.get('/:id',RoadmapController.listDataId)
roadmapRouter.put('/:id',RoadmapController.putData)
roadmapRouter.patch('/:id',RoadmapController.patchData)
roadmapRouter.delete('/:id', RoadmapController.deleteData)

export default roadmapRouter;

///roadmaps/language → rota específica
//roadmaps/:lang     → rota genérica
//Rotas estáticas SEMPRE vêm antes de rotas dinâmicas (/:param).
//Porque rotas dinâmicas capturam QUALQUER string e engolem o restante.

