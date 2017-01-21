/*--------------------------------------------------------------------------------------
 |	DataHolder Module: Created by Jorge Varela on 1/21/2017.
 |---------------------------------------------------------------------------------------
 |   Description: keeps track of all user and place in the ram
 |
 ---------------------------------------------------------------------------------------*/
"use strict";
var User_1 = require('./../Bussniess Objects/User');
var UtilityClasses_1 = require('./../Bussniess Objects/UtilityClasses');
var DataHolder = (function () {
    function DataHolder() {
        this.users = new Array();
        this.userCount = 0;
        this.places = new Array();
        this.placeCount = 0;
    }
    DataHolder.prototype.addNewPlace = function (place) {
        this.places[place.getPlaceId()] = place;
        for (var item in this.users) {
            var user = this.users[item].user;
            if (this.unitIsInPlace(user.coordinate, place.coordinate)) {
                var id = this.users[item].user.getUserId();
                place.addUser(id);
                this.setUserPlace(id, place.getPlaceId());
            }
        }
    };
    DataHolder.prototype.unitIsInPlace = function (unitCor, placeCor) {
        return unitCor.toString() == placeCor.toString();
    };
    DataHolder.prototype.setUserPlace = function (userId, placeId) {
        this.users[userId].placeId = placeId;
    };
    DataHolder.prototype.addnewUser = function (newUser) {
        this.userCount++;
        this.users[newUser.getUserId()].user = newUser;
        for (var item in this.places) {
            if (this.unitIsInPlace(newUser.coordinate, this.places[item].coordinate)) {
                this.places[item].addUser(newUser.getUserId());
            }
        }
    };
    DataHolder.prototype.updateUser = function (user) {
        this.users[user.getUserId()] = user;
    };
    DataHolder.prototype.addUser = function (newUser) {
        if (this.users[newUser.getUserId()] == null) {
            this.addnewUser(newUser);
        }
        else {
            this.updateUser(newUser);
        }
    };
    DataHolder.prototype.removeUser = function (removeUser) {
        if (this.users[removeUser] != null) {
            this.userCount--;
        }
        delete this.users[removeUser];
    };
    DataHolder.prototype.print = function () {
        console.log('==================================================');
        for (var item in this.users) {
            console.log(this.users[item].user.toString());
        }
    };
    return DataHolder;
}());
var dh = new DataHolder();
dh.addUser(new User_1.User("person1", "alejandro", UtilityClasses_1.Gender.Male));
dh.addUser(new User_1.User("person2", "diego", UtilityClasses_1.Gender.Female));
dh.addUser(new User_1.User("person3", "jordi", UtilityClasses_1.Gender.DontAssumeMyGender));
dh.addUser(new User_1.User("person4", "Jorge", UtilityClasses_1.Gender.Male));
dh.addUser(new User_1.User("person4", "Jorge", UtilityClasses_1.Gender.DontAssumeMyGender));
dh.print();
dh.removeUser("person3");
dh.removeUser("person1");
dh.removeUser("person4");
dh.print();
//# sourceMappingURL=DataHolder.js.map