const generateResponse = require('../Libs/stdResponse');

module.exports = function(req,res,next){
    console.log(`Method : ${req.method}, From : ${req.connection.remoteAddress}://${req.connection.remotePort} for route : ${req.originalUrl}`);
    if(req.method == 'OPTIONS'){
        //this request made by browsers to or retrieve info about API acccess and other details
        let headers = {};
        headers["Access-Control-Allow-Origin"] = "*";
        headers["Access-Control-Allow-Methods"] = "POST, GET, PUT, DELETE, OPTIONS";
        headers["Access-Control-Allow-Credentials"] = false;
        headers["Access-Control-Max-Age"] = '86400'; // 24 hours
        headers["Access-Control-Allow-Headers"] = "X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept";
        res.writeHead(200, headers);
        res.end();
    }else{
        res.header("Access-Control-Allow-Origin",'*');
        res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS');
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
    }
}