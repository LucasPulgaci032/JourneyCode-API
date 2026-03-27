import express from "express"

import CodeTopicController from "../controllers/codeTopicController.js"

const codeTopicsRouter = express.Router()

codeTopicsRouter
    .get('/', CodeTopicController.findCodeTopics)
    .post('/', CodeTopicController.postCodeTopic)
    .get('/:roadmapId', CodeTopicController.findCodeByRoadmapId)
export default codeTopicsRouter 