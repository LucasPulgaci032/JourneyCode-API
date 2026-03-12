import ErroBase from "./erroBase.js";

export class UnauthorizedError extends ErroBase{
    constructor(message = "Email ou senha incorretos"){
            super(message,401)
    }
}