import mongoose from "mongoose";
import ValidationError from "../errors/validationError.js";
import BadRequestError from "../errors/BadRequestError.js";
import NotFoundError from "../errors/notFoundError.js";
import ErroBase from "../errors/erroBase.js";
import ConflictError from "../errors/conflictError.js";
import { UnauthorizedError } from "../errors/UnauthorizedError.js";

export function middleError(error, req,res,next){

  if(error instanceof mongoose.Error.CastError){
   new BadRequestError().errorResponse(res)
  }
  else if(error instanceof mongoose.Error.ValidationError){
    new ValidationError(error).errorResponse(res)
  }
  else if(error instanceof BadRequestError){
    error.errorResponse(res)
  }
  else if(error instanceof NotFoundError){
     error.errorResponse(res)
  }
  else if(error instanceof ConflictError){
  error.errorResponse(res)
}
  else if(error instanceof UnauthorizedError){
    error.errorResponse(res)
  }
  else{
    new ErroBase().errorResponse(res)
  }

}