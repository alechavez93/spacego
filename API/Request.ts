/*--------------------------------------------------------------------------------------
|	Request Module: Created by Alejandro on 1/21/2017.
|---------------------------------------------------------------------------------------
|   Description: 
|
---------------------------------------------------------------------------------------*/

import {Gender, Sign} from "../Bussniess Objects/UtilityClasses";

class Filter{
    public sign: Sign;
    public value: number;
    constructor(sign: Sign, value: Gender){
        this.sign = sign;
        this.value = value;
    }
}

class RatioFilter extends Filter{
    public gender: Gender;
    constructor(sign: Sign, value: number, gender: Gender){
        super(sign, value);
        this.gender = gender;
    }
}

class Request{
    public action: string;
    public userId: string;
    public password: string;
    public radius: number;
    public ratioFilter: RatioFilter;
    public peopleGoingFilter: Filter;
    public peopleThereFilter: Filter;
    public rating: Filter;

    constructor(req: any){
        if(req.body == null)return;

        //Action and Authentication Fields
        this.action = req.body.action;
        this.userId = req.body.userId;
        this.password = req.body.password;

        //Filters
        let filterMap = {
            "+": Sign.More,
            "-": Sign.Less,
            "=": Sign.Equal,
            "f": Gender.Female,
            "m": Gender.Male
        };

        if(req.radius) {
            this.radius = req.radius;
        }

        //Populating the filters
        var format;
        if(req.body.ratio) {
            format = req.body.ratio.split("|");
            this.ratioFilter = new RatioFilter(filterMap[format[0]], parseFloat(format[1]), filterMap[format[2]]);
        }

        if(req.body.peopleGoing) {
            format = req.body.peopleGoing.split("|");
            this.peopleGoingFilter = new Filter(filterMap[format[0]], parseInt(format[1]));
        }

        if(req.body.peopleThere) {
            format = req.body.peopleThere.split("|");
            this.peopleThereFilter = new Filter(filterMap[format[0]], parseInt(format[1]));
        }

        if(req.body.rating) {
            format = req.body.rating.split("|");
            this.rating = new Filter(filterMap[format[0]], parseInt(format[1]));
        }
    }
}

export{Request, Filter, RatioFilter}