/*--------------------------------------------------------------------------------------
|	Place Module: Created by Jorge Varela on 1/20/2017.
|---------------------------------------------------------------------------------------
|   Description: one of the main objects to send to the client
|
---------------------------------------------------------------------------------------*/

import {Coordinate, Gender} from './UtilityClasses';

class Place{
    private placeId : string;
    public name : string;
    public coordinate : Coordinate;
    public peopleCount : number;
    public genderAmount : number[];
    public avgAge : number;

    constructor(placeId : string, name : string = "No name", coordinate: Coordinate = Coordinate.getNullCoordinate(), peopleCount : number = 0, genderAmount : number[], avgAge : number = 0 ){
        this.placeId = placeId;
        this.name = name;
        this.coordinate = coordinate;
        this.peopleCount = peopleCount;
        this.genderAmount =genderAmount;
        this.avgAge = avgAge;
    }

    public addUser(userId : String){

    }

    public getPlaceId() : string {return this.placeId;}
}

export {Place};