/*--------------------------------------------------------------------------------------
|	Place Module: Created by Jorge Varela on 1/20/2017.
|---------------------------------------------------------------------------------------
|   Description: one of the main objects to send to the client
|
---------------------------------------------------------------------------------------*/

import {Coordinate, Gender} from './UtilityClasses';
import {udh} from './../Data Adapter/DataHolder';
import {User} from "./User";

class Place{
    private placeId : string;
    private name : string;
    private coordinate : Coordinate;

    private usersId : Array<number>;
    private userCount : number;

    //public avgAge : number;

    constructor(placeId : string, name : string = "No name", coordinate: Coordinate = Coordinate.getNullCoordinate()){
        this.placeId = placeId;
        this.name = name;
        this.coordinate = coordinate;

        this.usersId = new Array<number>();
        this.userCount = 0;
    }

    public addUser(userId : string){
        if(!this.containUser(userId) && udh.contains(userId)){
            this.userCount++;
            this.usersId[userId] = 1;
        }
    }

    public containUser(userId : string) : boolean{
        return this.usersId[userId] != null
    }

    public remove(userId : string){
        if(this.containUser(userId)){
            this.userCount--;
        }
        delete this.usersId[userId];
    }

    public getUserCount() :number {return this.userCount;}

    public getGenderAmount(): Array<number>{
        let genderCount = new Array<number>();

        for(let item in Gender){
            genderCount[item] = 0;
        }

        for(let item in this.usersId){
            let temp : User = udh.getUser(item);
            genderCount[temp.gender]++;
        }

        return genderCount;
    }

    public getGenderPercentage() : Array<number>{
        let genderPer : Array<number> = this.getGenderAmount();

        for(let item in genderPer){
           genderPer[item] /= this.userCount;
        }

        return genderPer;
    }

    public getPlaceId() : string {return this.placeId;}

    public toString(): string{
        let val = "ID : " + this.placeId + "|| Name: " + this.name + "|| Coordinates: " + this.coordinate;

        let count = 0;
        for(let item in this.usersId){
            val += "\n\t"+ count++  +"\t";
            val += udh.getUser(item).toString();
        }

        val+= "\n===========================================================================\n"
        return val;
    }
}



let p = new Place("a");

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

export {Place};