class apiResponse{
    constructor(data,message='sucess',status){
        this.data = data;
        this.message = message;
        this.status = status;
        this.sucess = status<400;
    }
}

export {apiResponse}