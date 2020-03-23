module.exports = function(err,msg,st,info){
    let response = {
        error : err,
        message : msg,
        status : st,
        data : info
    }
    return response;
}