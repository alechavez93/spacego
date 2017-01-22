/*--------------------------------------------------------------------------------------
|	server Module: Created by Alejandro on 1/20/2017.
|---------------------------------------------------------------------------------------
|   Description: Starts
|
---------------------------------------------------------------------------------------*/

let bodyParser = require("body-parser");
let express = require("express");
let app = express();

//Parsing requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function(req, res){
   res.sendFile(__dirname+"/index.html");
});

require("./API/getPlaces")(app);

app.listen(process.env.PORT || 4000);
