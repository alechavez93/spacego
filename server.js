/*--------------------------------------------------------------------------------------
|	server Module: Created by Alejandro on 1/20/2017.
|---------------------------------------------------------------------------------------
|   Description: Starts
|
---------------------------------------------------------------------------------------*/
var express = require("express");
var app = express();
app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html");
});
app.get("/testAPI", function (req, res) {
    res.send("This is a test response\n" +
        "You have successfully sent an http request to spacego API\n" +
        "This is what you sent: \n" + JSON.stringify(req));
});
app.listen(process.env.PORT || 3000);
//# sourceMappingURL=server.js.map