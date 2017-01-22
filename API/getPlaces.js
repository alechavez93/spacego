/*--------------------------------------------------------------------------------------
 |	getPlaces Module: Created by Jorge Varela on 1/20/2017.
 |---------------------------------------------------------------------------------------
 |   Description: Handles requests made by the client on getting Places data
 ---------------------------------------------------------------------------------------*/
"use strict";
var Request_1 = require("./Request");
module.exports = function (app) {
    app.post("/mainAPI", function (req, res) {
        res.send(parseRequest(req));
    });
};
function parseRequest(req) {
    var request = new Request_1.Request(req);
    console.log(request);
    return request;
}
//# sourceMappingURL=getPlaces.js.map