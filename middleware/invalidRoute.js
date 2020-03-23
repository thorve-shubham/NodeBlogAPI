const generateResponse = require('../Libs/stdResponse');

module.exports = function(req,res,next){
    console.log("Route not found");
    return res.status(404).send(generateResponse(true,"Route not Found",400,null));
}