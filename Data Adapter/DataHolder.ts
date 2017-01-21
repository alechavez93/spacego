/*--------------------------------------------------------------------------------------
 |	DataHolder Module: Created by Jorge Varela on 1/21/2017.
 |---------------------------------------------------------------------------------------
 |   Description: keeps track of all user and place in the ram
 |
 ---------------------------------------------------------------------------------------*/

import {User} from './../Bussniess Objects/User';
import {Coordinate, Gender} from './../Bussniess Objects/UtilityClasses';
import {Place} from './../Bussniess Objects/Place';

class DataHolder {
    private users: Array<{user : User, placeId : string}>;
    private userCount: number;

    private places : Array<Place>
    private placeCount: number;

    constructor() {
        this.users = new Array<{user : User, placeId : string}>();
        this.userCount = 0;

        this.places = new Array<Place>();
        this.placeCount = 0;
    }

    public addNewPlace(place : Place){
        this.places[place.getPlaceId()] = place;

        for(let item in this.users){
            let user : User = this.users[item].user;
            if(this.unitIsInPlace(user.coordinate ,place.coordinate)){
                let id = this.users[item].user.getUserId();
                place.addUser(id);
                this.setUserPlace(id,place.getPlaceId());
            }
        }
    }

    private unitIsInPlace(unitCor : Coordinate, placeCor : Coordinate):boolean{
        return unitCor.toString() == placeCor.toString();
    }

    private setUserPlace(userId : string, placeId : string){
        this.users[userId].placeId = placeId;
    }

    private addnewUser(newUser: User){
        this.userCount++;
        this.users[newUser.getUserId()].user = newUser;

        for (let item in this.places) {
            if(this.unitIsInPlace(newUser.coordinate, this.places[item].coordinate)){
                this.places[item].addUser(newUser.getUserId());

            }
        }
    }
    private updateUser(user : User){
        this.users[user.getUserId()] = user;
    }

    public addUser(newUser: User) {
        if (this.users[newUser.getUserId()] == null) {
            this.addnewUser(newUser);
        } else{
            this.updateUser(newUser);
        }
    }

    public removeUser(removeUser: string) {
        if (this.users[removeUser] != null){
            this.userCount--;
        }
        delete this.users[removeUser];
    }

    public print() {
        console.log('==================================================')
        for (let item in this.users) {
            console.log(this.users[item].user.toString());
        }
    }
}

let dh = new DataHolder();
dh.addUser(new User("person1", "alejandro", Gender.Male));
dh.addUser(new User("person2", "diego", Gender.Female));
dh.addUser(new User("person3", "jordi", Gender.DontAssumeMyGender));
dh.addUser(new User("person4", "Jorge", Gender.Male));
dh.addUser(new User("person4", "Jorge", Gender.DontAssumeMyGender));

dh.print();

dh.removeUser("person3");
dh.removeUser("person1");
dh.removeUser("person4");


dh.print();