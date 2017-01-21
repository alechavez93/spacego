/*--------------------------------------------------------------------------------------
|	User Module: Created by Jorge Varela on 1/20/2017.
|---------------------------------------------------------------------------------------
|   Description:
|
---------------------------------------------------------------------------------------*/
"use strict";
var UtilityClasses_1 = require('./UtilityClasses');
var User = (function () {
    function User(userId, name, gender, age, coordinate, picture) {
        if (name === void 0) { name = "No name"; }
        if (gender === void 0) { gender = UtilityClasses_1.Gender.DontAssumeMyGender; }
        if (age === void 0) { age = -1; }
        if (coordinate === void 0) { coordinate = UtilityClasses_1.Coordinate.getNullCoordinate(); }
        if (picture === void 0) { picture = ""; }
        this.userId = userId;
        this.name = name;
        this.gender = gender;
        this.age = age;
        this.coordinate = coordinate;
        this.picture = picture;
    }
    User.prototype.getUserId = function () { return this.userId; };
    return User;
}());
exports.User = User;
//# sourceMappingURL=User.js.map