class ErroBase extends Error {
    constructor(msg = "Server error", status=500){
        super(msg)
        this.message = msg;
        this.status = status
    }
    errorResponse(res){
        res.status(this.status).send({
            message : this.message,
            status : this.status
        })
    }
}

export default ErroBase