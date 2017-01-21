/*--------------------------------------------------------------------------------------
|	PlaceFactory Module: Created by Jorge Varela on 1/21/2017.
|---------------------------------------------------------------------------------------
|   Description:
|
---------------------------------------------------------------------------------------*/
"use strict";
var PlaceFactory = (function () {
    function PlaceFactory() {
    }
    PlaceFactory.prototype.getPlaceAt = function (coordinate, radius) {
        if (radius === void 0) { radius = PlaceFactory.minRadius; }
        var place;
        return place;
    };
    PlaceFactory.minRadius = 1;
    return PlaceFactory;
}());
//# sourceMappingURL=PlaceFactory.js.map