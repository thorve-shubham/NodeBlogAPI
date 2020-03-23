const generateResponse = require('../Libs/stdResponse');

module.exports = function(err,req,res,next){
    console.log("Error Ocurred");
    return res.status(503).send(generateResponse(true,"Error occurred on global level",503,err));
}