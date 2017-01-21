/*--------------------------------------------------------------------------------------
|	server Module: Created by Alejandro on 1/20/2017.
|---------------------------------------------------------------------------------------
|   Description: Starts
|
---------------------------------------------------------------------------------------*/

let express = require("express");
let app = express();

app.get("/", function(req, res){
   res.sendFile(__dirname+"/index.html");
});

app.listen(process.env.PORT || 3000);