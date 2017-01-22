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
    Coordinate.prototype.toString = function () {
        return this.latitude + "," + this.longitude;
    };
    return Coordinate;
}());
exports.Coordinate = Coordinate;
var Gender;
(function (Gender) {
    Gender[Gender["Male"] = "Male"] = "Male";
    Gender[Gender["Female"] = "Female"] = "Female";
    Gender[Gender["DontAssumeMyGender"] = "DontAssumeMyGender"] = "DontAssumeMyGender";
})(Gender || (Gender = {}));
exports.Gender = Gender;
//# sourceMappingURL=UtilityClasses.js.map