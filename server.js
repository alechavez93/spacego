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
app.listen(process.env.PORT || 3000);
//# sourceMappingURL=server.js.map