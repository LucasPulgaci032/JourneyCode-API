import UserController from "../controllers/user.js";
import express from "express"
import verifyToken from "../middlewares/VerifyToken.js";

const userRouter = express.Router()


userRouter.get('/', UserController.findUser)
userRouter.post('/register', UserController.postUser)
userRouter.post('/login', UserController.validateUser)
userRouter.delete('/deleteall',UserController.deleteDB)
userRouter.get('/topicProgress/:id', UserController.findUserTopicProgress)
userRouter.patch('/usertopic/:id', UserController.patchTopicProgress)
userRouter.get('/:id',verifyToken, UserController.findUserById)
userRouter.delete('/:d',verifyToken, UserController.deleteById)
export default userRouter; 