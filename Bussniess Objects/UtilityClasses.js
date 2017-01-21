/*--------------------------------------------------------------------------------------
|	UtilityClasses Module: Created by Jorge Varela on 1/20/2017.
|---------------------------------------------------------------------------------------
|   Description: small classes
|
---------------------------------------------------------------------------------------*/
"use strict";
var Coordinate = (function () {
    function Coordinate() {
    }
    Coordinate.getNullCoordinate = function () {
        var c = new Coordinate();
        c.latitude = -1;
        c.longitude = -1;
        return c;
    };
    return Coordinate;
}());
exports.Coordinate = Coordinate;
var Gender;
(function (Gender) {
    Gender[Gender["Male"] = 0] = "Male";
    Gender[Gender["Female"] = 1] = "Female";
    Gender[Gender["DontAssumeMyGender"] = 2] = "DontAssumeMyGender";
})(Gender || (Gender = {}));
exports.Gender = Gender;
//# sourceMappingURL=UtilityClasses.js.map