import ErroBase from "./erroBase.js";

class BadRequestError extends ErroBase {
     constructor(message = "One or more datas are incorrect"){
        super(message,400);
     }
}

export default BadRequestError;
