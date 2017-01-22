/*--------------------------------------------------------------------------------------
|	GooglePlaces Module: Created by Alejandro on 1/21/2017.
|---------------------------------------------------------------------------------------
|   Description:
|
---------------------------------------------------------------------------------------*/
"use strict";
var request = require('request');
var PlaceSearchOptions_1 = require("./PlaceSearchOptions");
var GooglePlaces = (function () {
    function GooglePlaces() {
    }
    GooglePlaces.getPlaces = function (options, scope, callback) {
        var decoratedUrl = GooglePlaces.url;
        var optObject = options.getJSON();
        for (var field in optObject) {
            if (optObject.hasOwnProperty(field)) {
                decoratedUrl += field + "=" + optObject[field] + "&";
            }
        }
        decoratedUrl = decoratedUrl.slice(0, -1);
        GooglePlaces.makeGetRequest(decoratedUrl, scope, callback);
    };
    GooglePlaces.makeGetRequest = function (url, scope, callback) {
        console.log(url);
        request.get(url, function (error, response, body) {
            if (!error && response.statusCode == 200) {
                console.log(body);
            }
        });
    };
    GooglePlaces.url = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?";
    return GooglePlaces;
}());
exports.GooglePlaces = GooglePlaces;
//Test
var options = new PlaceSearchOptions_1.PlaceSearchOptions("29.648080,-82.343496", 5000);
GooglePlaces.getPlaces(options, null, null);
//# sourceMappingURL=GooglePlaces.js.map