/*--------------------------------------------------------------------------------------
|	Request Module: Created by Alejandro on 1/21/2017.
|---------------------------------------------------------------------------------------
|   Description:
|
---------------------------------------------------------------------------------------*/
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var UtilityClasses_1 = require("../Bussniess Objects/UtilityClasses");
var Filter = (function () {
    function Filter(sign, value) {
        this.sign = sign;
        this.value = value;
    }
    return Filter;
}());
exports.Filter = Filter;
var RatioFilter = (function (_super) {
    __extends(RatioFilter, _super);
    function RatioFilter(sign, value, gender) {
        _super.call(this, sign, value);
        this.gender = gender;
    }
    return RatioFilter;
}(Filter));
exports.RatioFilter = RatioFilter;
var Request = (function () {
    function Request(req) {
        if (req.body == null)
            return;
        //Action and Authentication Fields
        this.action = req.body.action;
        this.userId = req.body.userId;
        this.password = req.body.password;
        //Filters
        var filterMap = {
            "+": UtilityClasses_1.Sign.More,
            "-": UtilityClasses_1.Sign.Less,
            "=": UtilityClasses_1.Sign.Equal,
            "f": UtilityClasses_1.Gender.Female,
            "m": UtilityClasses_1.Gender.Male
        };
        if (req.radius) {
            this.radius = req.radius;
        }
        //Populating the filters
        var format;
        if (req.body.ratio) {
            format = req.body.ratio.split("|");
            this.ratioFilter = new RatioFilter(filterMap[format[0]], parseFloat(format[1]), filterMap[format[2]]);
        }
        if (req.body.peopleGoing) {
            format = req.body.peopleGoing.split("|");
            this.peopleGoingFilter = new Filter(filterMap[format[0]], parseInt(format[1]));
        }
        if (req.body.peopleThere) {
            format = req.body.peopleThere.split("|");
            this.peopleThereFilter = new Filter(filterMap[format[0]], parseInt(format[1]));
        }
        if (req.body.rating) {
            format = req.body.rating.split("|");
            this.rating = new Filter(filterMap[format[0]], parseInt(format[1]));
        }
    }
    return Request;
}());
exports.Request = Request;
//# sourceMappingURL=Request.js.map