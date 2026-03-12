import ErroBase from "./erroBase.js";

export default class ConflictError extends ErroBase{
    constructor(message = "Email já existente"){
        super(message,409)
    }
}