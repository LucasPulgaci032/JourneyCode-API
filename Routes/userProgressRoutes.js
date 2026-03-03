import express from 'express'
import UserProgressController from '../controllers/userProgress.js'
import verifyToken from '../middlewares/VerifyToken.js'

const userProgressRoute = express.Router()


userProgressRoute
 .get('/',verifyToken, UserProgressController.findUserProgress)
 .patch('/',verifyToken,UserProgressController.markTopic)
 .get('/roadmap/:roadmapId',verifyToken,UserProgressController.findByRoadmap)

 export default userProgressRoute