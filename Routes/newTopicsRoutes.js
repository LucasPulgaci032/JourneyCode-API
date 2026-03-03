import express from 'express'
import newTopicsController from '../controllers/newTopicsController.js'

const newTopicRouter = express.Router()


newTopicRouter
  .get('/',newTopicsController.findNewTopics)
  .get('/roadmap', newTopicsController.findByKey)
  .delete('/deleteAllTpc',newTopicsController.deleteAllNewTopics)
export default newTopicRouter