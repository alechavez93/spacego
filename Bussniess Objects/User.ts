
/*--------------------------------------------------------------------------------------
|	User Module: Created by Jorge Varela on 1/20/2017.
|---------------------------------------------------------------------------------------
|   Description: 
|
---------------------------------------------------------------------------------------*/

import {Coordinate, Gender} from './UtilityClasses';

class User{
    private userId: string;
    public name : string;
    public gender : Gender;
    public age : number;
    public coordinate : Coordinate;
    public picture : string;

    constructor(userId : string, name : string = "No name", gender : Gender = Gender.DontAssumeMyGender, age : number = -1, coordinate : Coordinate = Coordinate.getNullCoordinate(), picture : string = "") {
        this.userId = userId;
        this.name = name;
        this.gender = gender;
        this.age = age;
        this.coordinate = coordinate;
        this.picture = picture;
    }

    public getUserId() : string {return this.userId;}


    public toString():string{
        return "ID :    " + this.getUserId() +
            "\n Name:   " + this.name +
            "\n Gender: " + this.gender;
    }
}

export {User};