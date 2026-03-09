import jwt, { JwtPayload } from "jsonwebtoken"
import dotenv from 'dotenv'

dotenv.config()
function verifyToken(req : Req,res : Res ,next: Next){
       
    const auth = req.headers.authorization

    if(!auth){
        return res.status(401).json({message : "Token not found"})
    }

    const token = auth.split(" ")[1]
    try{
        const decoded = jwt.verify(token, process.env.SECRET_TOKEN as string)
        console.log("SECRET:", process.env.SECRET_TOKEN)
        req.user = decoded as JwtPayload
        next()
}catch(erro){
        return res.status(401).json({ message: "Token inválido" });
}
}

export default verifyToken