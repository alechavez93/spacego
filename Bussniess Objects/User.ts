
/*--------------------------------------------------------------------------------------
|	User Module: Created by Jorge Varela on 1/20/2017.
|---------------------------------------------------------------------------------------
|   Description: 
|
---------------------------------------------------------------------------------------*/

import {Coordinate, Gender} from './UtilityClasses';

class User{
    private userId: String;
    public name : String;
    public gender : Gender;
    public age : number;
    public coordinate : Coordinate;
    public picture : String;

    constructor(userId : String, name : String = "No name", gender : Gender = Gender.DontAssumeMyGender, age : number = -1, coordinate : Coordinate = Coordinate.getNullCoordinate(), picture : String = "") {
        this.userId = userId;
        this.name = name;
        this.gender = gender;
        this.age = age;
        this.coordinate = coordinate;
        this.picture = picture;
    }

    public getUserId() : String {return this.userId;}
}

export {User};