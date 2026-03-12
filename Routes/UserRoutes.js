import UserController from "../controllers/userController.js";
import express from "express"
import verifyToken from "../middlewares/VerifyToken.js";
import UserService from "../services/userService.js";

const userRouter = express.Router()


userRouter.get('/', UserController.findUser)
userRouter.post('/register', UserController.postUser)
userRouter.post('/login', UserController.validateUser)
userRouter.delete('/deleteall',UserService.deleteDB)
userRouter.get('/topicProgress/:id', UserController.findUserTopicProgress)
userRouter.patch('/changeTheme',verifyToken, UserController.setBackgroundTheme)
userRouter.patch('/usertopic/:id', UserController.patchTopicProgress)
userRouter.get('/:id',verifyToken, UserController.findUserById)
userRouter.delete('/:d',verifyToken, UserController.deleteById)
export default userRouter; 