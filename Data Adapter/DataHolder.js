/*--------------------------------------------------------------------------------------
 |	DataHolder Module: Created by Jorge Varela on 1/21/2017.
 |---------------------------------------------------------------------------------------
 |   Description: keeps track of all user and place in the ram
 |
 ---------------------------------------------------------------------------------------*/
"use strict";
var User_1 = require('./../Bussniess Objects/User');
var UtilityClasses_1 = require('./../Bussniess Objects/UtilityClasses');
// hold all the active users
var UserDataHolder = (function () {
    function UserDataHolder() {
        this.users = new Array();
        this.userCount = 0;
    }
    UserDataHolder.prototype.addNewUser = function (newUser) {
        this.userCount++;
        this.users[newUser.getUserId()] = newUser;
    };
    UserDataHolder.prototype.updateUser = function (user) {
        this.removeUser(user.getUserId());
        this.addNewUser(user);
    };
    UserDataHolder.prototype.addUser = function (newUser) {
        if (this.users[newUser.getUserId()] == null) {
            this.addNewUser(newUser);
        }
        else {
            this.updateUser(newUser);
        }
    };
    UserDataHolder.prototype.removeUser = function (removeUser) {
        if (this.users[removeUser] != null) {
            this.userCount--;
            delete this.users[removeUser];
        }
    };
    UserDataHolder.prototype.getUser = function (userId) {
        return this.users[userId];
    };
    UserDataHolder.prototype.contains = function (userId) {
        return this.users[userId] != null;
    };
    return UserDataHolder;
}());
var udh = new UserDataHolder();
exports.udh = udh;
//holds all the active places
var PlaceDataHolder = (function () {
    function PlaceDataHolder() {
        this.places = new Array();
        this.placeCount = 0;
    }
    PlaceDataHolder.prototype.addNewPlace = function (newPlace) {
        this.placeCount++;
        this.places[newPlace.getPlaceId()] = newPlace;
    };
    PlaceDataHolder.prototype.updatePlace = function (place) {
        this.removePlace(place.getPlaceId());
        this.addNewPlace(place);
    };
    PlaceDataHolder.prototype.addPlace = function (newPlace) {
        if (this.places[newPlace.getPlaceId()] == null) {
            this.addNewPlace(newPlace);
        }
        else {
            this.updatePlace(newPlace);
        }
    };
    PlaceDataHolder.prototype.removePlace = function (removePlace) {
        if (this.places[removePlace] != null) {
            this.placeCount--;
            delete this.places[removePlace];
        }
    };
    PlaceDataHolder.prototype.getPlaceCopy = function (placeId) {
        return this.places[placeId];
    };
    return PlaceDataHolder;
}());
var pdh = new PlaceDataHolder();
exports.pdh = pdh;
//Basic functionality to acces the DataHolder
var DataHolder = (function () {
    function DataHolder() {
    }
    //new user are not yet put in a building
    DataHolder.setNewUserPlace = function (user) {
        for (var item in pdh.places) {
        }
    };
    DataHolder.addNewUser = function (newUser) {
    };
    return DataHolder;
}());
var DataHolder2 = (function () {
    function DataHolder2() {
        this.users = new Array();
        this.userCount = 0;
        this.places = new Array();
        this.placeCount = 0;
    }
    DataHolder2.prototype.unitIsInPlace = function (unitCor, placeCor) {
        return unitCor.toString() == placeCor.toString();
    };
    DataHolder2.prototype.setUserPlace = function (userId, placeId) {
        this.users[userId].placeId = placeId;
    };
    DataHolder2.prototype.findUserPlace = function (user) {
        for (var item in this.places) {
        }
    };
    DataHolder2.prototype.addnewUser = function (newUser) {
        this.userCount++;
        this.users[newUser.getUserId()].user = newUser;
        this.findUserPlace(newUser);
    };
    DataHolder2.prototype.updateUser = function (user) {
        this.removeUser(user.getUserId());
        this.addnewUser(user);
    };
    DataHolder2.prototype.addNewPlace = function (place) {
        this.places[place.getPlaceId()] = place;
        for (var item in this.users) {
            var user = this.users[item].user;
        }
    };
    DataHolder2.prototype.addUser = function (newUser) {
        if (this.users[newUser.getUserId()] == null) {
            this.addnewUser(newUser);
        }
        else {
            this.updateUser(newUser);
        }
    };
    DataHolder2.prototype.removeUser = function (removeUser) {
        if (this.users[removeUser] != null) {
            this.userCount--;
        }
        var p = this.users[removeUser].placeId;
        this.places[p].remove(removeUser);
        delete this.users[removeUser];
    };
    DataHolder2.prototype.print = function () {
        console.log('==================================================');
        for (var item in this.users) {
            console.log(this.users[item].user.toString());
        }
    };
    return DataHolder2;
}());
udh.addUser(new User_1.User("person1", "alejandro", UtilityClasses_1.Gender.Male));
udh.addUser(new User_1.User("person2", "diego", UtilityClasses_1.Gender.Female));
udh.addUser(new User_1.User("person3", "jordi", UtilityClasses_1.Gender.DontAssumeMyGender));
udh.addUser(new User_1.User("person4", "Jorge", UtilityClasses_1.Gender.Male));
udh.addUser(new User_1.User("person4", "Varela", UtilityClasses_1.Gender.DontAssumeMyGender));
udh.addUser(new User_1.User("person5", "Lage", UtilityClasses_1.Gender.Male));
udh.addUser(new User_1.User("person6", "Chavez", UtilityClasses_1.Gender.Female));
udh.addUser(new User_1.User("person7", "Jose", UtilityClasses_1.Gender.DontAssumeMyGender));
udh.addUser(new User_1.User("person8", "Roque", UtilityClasses_1.Gender.Male));
udh.addUser(new User_1.User("person9", "Leo", UtilityClasses_1.Gender.DontAssumeMyGender));
udh.addUser(new User_1.User("person10", "Fernando", UtilityClasses_1.Gender.Male));
udh.addUser(new User_1.User("person11", "Hernandez", UtilityClasses_1.Gender.Female));
udh.addUser(new User_1.User("person12", "Barrera", UtilityClasses_1.Gender.DontAssumeMyGender));
udh.addUser(new User_1.User("person13", "Carlos", UtilityClasses_1.Gender.Male));
udh.addUser(new User_1.User("person14", "Zac", UtilityClasses_1.Gender.DontAssumeMyGender));
/*let dh = new DataHolder2();
dh.addUser(new User("person1", "alejandro", Gender.Male));
dh.addUser(new User("person2", "diego", Gender.Female));
dh.addUser(new User("person3", "jordi", Gender.DontAssumeMyGender));
dh.addUser(new User("person4", "Jorge", Gender.Male));
dh.addUser(new User("person4", "Jorge", Gender.DontAssumeMyGender));

dh.print();

dh.removeUser("person3");
dh.removeUser("person1");
dh.removeUser("person4");


dh.print();*/
//# sourceMappingURL=DataHolder.js.map