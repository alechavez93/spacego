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
app.get("/mainAPI", function (req, res) {
    res.send("This is a test response\n" +
        "You have successfully sent an http request to spacego API\n" +
        "This is what you sent (Headers): \n" + JSON.stringify(req.headers) + "\n\n" +
        "-Ale");
});
app.post("/mainAPI", function (req, res) {
    res.send("This is a test response for POST http requests\n" +
        "The Headers were: \n" + JSON.stringify(req.headers) + "\n\n" +
        "The Body was: \n" + JSON.stringify(req.body) + "\n\n" +
        "-Ale");
});
app.listen(process.env.PORT || 4000);
//# sourceMappingURL=server.js.map