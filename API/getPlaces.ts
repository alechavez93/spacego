/*--------------------------------------------------------------------------------------
 |	getPlaces Module: Created by Jorge Varela on 1/20/2017.
 |---------------------------------------------------------------------------------------
 |   Description: Handles requests made by the client on getting Places data
 ---------------------------------------------------------------------------------------*/

import {Request} from "./Request";


module.exports = function(app){
    app.post("/test", function(req, res){
        res.send(parseRequest(req));
    });
};

function parseRequest(req){
    let request = new Request(req);
    console.log(request);
    return request;
}