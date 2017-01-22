/*--------------------------------------------------------------------------------------
|	GooglePlaces Module: Created by Alejandro on 1/21/2017.
|---------------------------------------------------------------------------------------
|   Description: 
|
---------------------------------------------------------------------------------------*/

var request = require('request');
import {PlaceSearchOptions} from "./PlaceSearchOptions";

class GooglePlaces{
    private static url: string = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?";

    public static getPlaces(options: PlaceSearchOptions, scope, callback){
        let decoratedUrl = GooglePlaces.url;
        let optObject = options.getJSON();
        for(let field in optObject){
            if(optObject.hasOwnProperty(field)){
                decoratedUrl+=field+"="+optObject[field]+"&";
            }
        }
        decoratedUrl = decoratedUrl.slice(0, -1);
        GooglePlaces.makeGetRequest(decoratedUrl, scope, callback);
    }

    public static makeGetRequest(url: string, scope, callback){
        console.log(url);
        request.get(
            url,
            function (error, response, body) {
                if (!error && response.statusCode == 200) {
                    console.log(body)
                }
            }
        );
    }
}

export {GooglePlaces}

//Test
let options = new PlaceSearchOptions("29.648080,-82.343496", 5000);
GooglePlaces.getPlaces(options, null, null);

