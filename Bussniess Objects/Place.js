/*--------------------------------------------------------------------------------------
|	Place Module: Created by Jorge Varela on 1/20/2017.
|---------------------------------------------------------------------------------------
|   Description: one of the main objects to send to the client
|
---------------------------------------------------------------------------------------*/
"use strict";
var UtilityClasses_1 = require('./UtilityClasses');
var DataHolder_1 = require('./../Data Adapter/DataHolder');
var Place = (function () {
    //public avgAge : number;
    function Place(placeId, name, coordinate) {
        if (name === void 0) { name = "No name"; }
        if (coordinate === void 0) { coordinate = UtilityClasses_1.Coordinate.getNullCoordinate(); }
        this.placeId = placeId;
        this.name = name;
        this.coordinate = coordinate;
        this.usersId = new Array();
        this.userCount = 0;
    }
    Place.prototype.addUser = function (userId) {
        if (!this.containUser(userId) && DataHolder_1.udh.contains(userId)) {
            this.userCount++;
            this.usersId[userId] = 1;
        }
    };
    Place.prototype.containUser = function (userId) {
        return this.usersId[userId] != null;
    };
    Place.prototype.remove = function (userId) {
        if (this.containUser(userId)) {
            this.userCount--;
        }
        delete this.usersId[userId];
    };
    Place.prototype.getUserCount = function () { return this.userCount; };
    Place.prototype.getGenderAmount = function () {
        var genderCount = new Array();
        for (var item in UtilityClasses_1.Gender) {
            genderCount[item] = 0;
        }
        for (var item in this.usersId) {
            var temp = DataHolder_1.udh.getUser(item);
            genderCount[temp.gender]++;
        }
        return genderCount;
    };
    Place.prototype.getGenderPercentage = function () {
        var genderPer = this.getGenderAmount();
        for (var item in genderPer) {
            genderPer[item] /= this.userCount;
        }
        return genderPer;
    };
    Place.prototype.getPlaceId = function () { return this.placeId; };
    Place.prototype.toString = function () {
        var val = "ID : " + this.placeId + "|| Name: " + this.name + "|| Coordinates: " + this.coordinate;
        var count = 0;
        for (var item in this.usersId) {
            val += "\n\t" + count++ + "\t";
            val += DataHolder_1.udh.getUser(item).toString();
        }
        val += "\n===========================================================================\n";
        return val;
    };
    return Place;
}());
exports.Place = Place;
var p = new Place("a");
p.addUser("person1");
console.log(p.getUserCount());
p.addUser("person2");
p.addUser("person3");
p.addUser("person3");
p.addUser("person3");
console.log(p.getUserCount());
p.addUser("person4");
p.addUser("person5");
p.addUser("person6");
p.addUser("person7");
p.addUser("person8");
p.addUser("person9");
p.addUser("person10");
p.addUser("person11");
p.getGenderPercentage();
console.log(p.getUserCount());
console.log(p.toString());
//# sourceMappingURL=Place.js.map