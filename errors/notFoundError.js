import ErroBase from "./erroBase.js";

class NotFoundError extends ErroBase {
   constructor(message = "Item not found"){
    super(message,404)
   }
}

export default NotFoundError