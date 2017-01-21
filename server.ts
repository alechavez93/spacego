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

app.get("/testAPI", function(req, res){
   res.send("This is a test response\n" +
       "You have successfully sent an http request to spacego API\n" +
       "This is what you sent (Headers): \n" + JSON.stringify(req.headers) + "\n\n" +
       "-Ale");
});

app.listen(process.env.PORT || 4000);





/*------------------------------ test
====================================== */


console('test');