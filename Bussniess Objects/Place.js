/*--------------------------------------------------------------------------------------
|	Place Module: Created by Jorge Varela on 1/20/2017.
|---------------------------------------------------------------------------------------
|   Description: one of the main objects to send to the client
|
---------------------------------------------------------------------------------------*/
"use strict";
var UtilityClasses_1 = require('./UtilityClasses');
var Place = (function () {
    function Place(placeId, name, coordinate, peopleCount, genderAmount, avgAge) {
        if (name === void 0) { name = "No name"; }
        if (coordinate === void 0) { coordinate = UtilityClasses_1.Coordinate.getNullCoordinate(); }
        if (peopleCount === void 0) { peopleCount = 0; }
        if (avgAge === void 0) { avgAge = 0; }
        this.placeId = placeId;
        this.name = name;
        this.coordinate = coordinate;
        this.peopleCount = peopleCount;
        this.genderAmount = genderAmount;
        this.avgAge = avgAge;
    }
    Place.prototype.addUser = function (userId) {
    };
    Place.prototype.getPlaceId = function () { return this.placeId; };
    return Place;
}());
exports.Place = Place;
//# sourceMappingURL=Place.js.map