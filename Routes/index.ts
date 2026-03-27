
import roadmapRouter from "./RoadmapRoutes.js";
import userRouter from "./UserRoutes.js";
import dotenv from 'dotenv'
import newTopicRouter from "./newTopicsRoutes.js";
import userProgressRoute from "./userProgressRoutes.js";
import { Express } from "express-serve-static-core";
import codeTopicsRouter from "./codeTopicRoutes.js";

dotenv.config()
const usrt = process.env.USER_ACCESS_ROUTE


const router = (app : Express) => {
    app.route('/').get((req :Req,res: Res) =>
        res.status(200).send("server RODANDO")
    )
   
 
  
    app.use('/roadmaps',roadmapRouter)
    app.use(usrt, userRouter)
    app.use('/newTopics',newTopicRouter)
    app.use('/userProgress', userProgressRoute)
    app.use('/codeTopics', codeTopicsRouter)
}

export default router