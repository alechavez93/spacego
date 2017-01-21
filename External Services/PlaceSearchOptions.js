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
        this.types = "night_club";
    }
    PlaceSearchOptions.prototype.setAdtionalParams = function () {
    };
    return PlaceSearchOptions;
}());
exports.PlaceSearchOptions = PlaceSearchOptions;
//# sourceMappingURL=PlaceSearchOptions.js.map