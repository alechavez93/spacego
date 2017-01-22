/*--------------------------------------------------------------------------------------
|	UtilityClasses Module: Created by Jorge Varela on 1/20/2017.
|---------------------------------------------------------------------------------------
|   Description: small classes
|
---------------------------------------------------------------------------------------*/

class Coordinate {
    public latitude  : number;
    public longitude : number;


    public static getNullCoordinate():Coordinate{
        let c = new Coordinate();
        c.latitude = -1;
        c.longitude = -1;

        return c;
    }

    public toString():string{
        return this.latitude + "," + this.longitude;
    }
}

enum Gender{
    Male = <any>"Male",
    Female = <any>"Female",
    DontAssumeMyGender = <any>"DontAssumeMyGender"
}

enum Sign{
    Less = <any>"-",
    Equal = <any>"=",
    More = <any>"+"
}

export {Coordinate,Gender,Sign}