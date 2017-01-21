/*--------------------------------------------------------------------------------------
|	PlaceSearchOptions Module: Created by Alejandro on 1/21/2017.
|---------------------------------------------------------------------------------------
|   Description: Gives a class description of how the Options for a Places Search should
|   be encapsulated. Parameters that are necessary will be required in construction.
---------------------------------------------------------------------------------------*/
"use strict";
var PlaceSearchOptions = (function () {
    function PlaceSearchOptions(location, radius) {
        this.location = location;
        this.radius = radius;
        this.type = "night_club";
        this.key = "AIzaSyD1whdcvkuAPmUGCu1ddIpaO1CMCreWYKY";
    }
    PlaceSearchOptions.prototype.getJSON = function () {
        return JSON.parse(JSON.stringify(this));
    };
    return PlaceSearchOptions;
}());
exports.PlaceSearchOptions = PlaceSearchOptions;
//# sourceMappingURL=PlaceSearchOptions.js.map