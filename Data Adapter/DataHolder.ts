/*--------------------------------------------------------------------------------------
 |	DataHolder Module: Created by Jorge Varela on 1/21/2017.
 |---------------------------------------------------------------------------------------
 |   Description: keeps track of all user and place in the ram
 |
 ---------------------------------------------------------------------------------------*/

import {User} from './../Bussniess Objects/User';
import {Coordinate, Gender} from './../Bussniess Objects/UtilityClasses';
import {Place} from './../Bussniess Objects/Place';


// hold all the active users
class UserDataHolder{
    public users: Array<User>;
    public userCount: number;

    constructor() {
        this.users = new Array<User>();
        this.userCount = 0;
    }

    private addNewUser(newUser: User){
        this.userCount++;
        this.users[newUser.getUserId()] = newUser;
    }

    private updateUser(user : User){
        this.removeUser(user.getUserId());

        this.addNewUser(user);
    }

    public addUser(newUser: User) {
        if (this.users[newUser.getUserId()] == null) {
            this.addNewUser(newUser);
        } else{
            this.updateUser(newUser);
        }
    }

    public removeUser(removeUser: string) {
        if (this.users[removeUser] != null){
            this.userCount--;
            delete this.users[removeUser];
        }
    }

    public getUser(userId : string) : User{
         return this.users[userId];
    }

    public contains(userId : string):boolean{
        return this.users[userId] != null;
    }
}

var udh = new UserDataHolder();

//holds all the active places
class PlaceDataHolder{
    public places : Array<Place>
    public placeCount: number;

    constructor() {
        this.places = new Array<Place>();
        this.placeCount = 0;
    }

    private addNewPlace(newPlace: Place){
        this.placeCount++;
        this.places[newPlace.getPlaceId()] = newPlace;
    }

    private updatePlace(place : Place){
        this.removePlace(place.getPlaceId());

        this.addNewPlace(place);
    }

    public addPlace(newPlace: Place) {
        if (this.places[newPlace.getPlaceId()] == null) {
            this.addNewPlace(newPlace);
        } else{
            this.updatePlace(newPlace);
        }
    }

    public removePlace(removePlace: string) {
        if (this.places[removePlace] != null){
            this.placeCount--;
            delete this.places[removePlace];
        }
    }

    public getPlaceCopy(placeId : string) : Place{
        return this.places[placeId];
    }
}

var pdh = new PlaceDataHolder();


//Basic functionality to acces the DataHolder
class DataHolder{

    //new user are not yet put in a building
    private static setNewUserPlace(user : User){
        for (let item in pdh.places) {
            /* if(this.unitIsInPlace(user.coordinate, this.places[item].coordinate)){
             this.places[item].addUser(user.getUserId());
             this.setUserPlace(user.getUserId(), this.places[item].getPlaceId());
             break;
             }*/
        }
    }

    public static addNewUser(newUser : User){

    }




}

class DataHolder2 {
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

    private unitIsInPlace(unitCor : Coordinate, placeCor : Coordinate):boolean{
        return unitCor.toString() == placeCor.toString();
    }

    private setUserPlace(userId : string, placeId : string){
        this.users[userId].placeId = placeId;
    }
    private findUserPlace( user: User){
        for (let item in this.places) {
           /* if(this.unitIsInPlace(user.coordinate, this.places[item].coordinate)){
                this.places[item].addUser(user.getUserId());
                this.setUserPlace(user.getUserId(), this.places[item].getPlaceId());
                break;
            }*/
        }
    }

    private addnewUser(newUser: User){
        this.userCount++;
        this.users[newUser.getUserId()].user = newUser;

        this.findUserPlace(newUser);
    }


    private updateUser(user : User){
        this.removeUser(user.getUserId());

        this.addnewUser(user);
    }

    public addNewPlace(place : Place){
        this.places[place.getPlaceId()] = place;

        for(let item in this.users){
            let user : User = this.users[item].user;
          /*  if(this.unitIsInPlace(user.coordinate ,place.coordinate)){
                let id = this.users[item].user.getUserId();
                place.addUser(id);
                this.setUserPlace(id,place.getPlaceId());
            }*/
        }
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
        let p = this.users[removeUser].placeId;
        this.places[p].remove(removeUser);

        delete this.users[removeUser];
    }

    public print() {
        console.log('==================================================')
        for (let item in this.users) {
            console.log(this.users[item].user.toString());
        }
    }
}


udh.addUser(new User("person1", "alejandro", Gender.Male));
udh.addUser(new User("person2", "diego", Gender.Female));
udh.addUser(new User("person3", "jordi", Gender.DontAssumeMyGender));
udh.addUser(new User("person4", "Jorge", Gender.Male));
udh.addUser(new User("person4", "Varela", Gender.DontAssumeMyGender));
udh.addUser(new User("person5", "Lage", Gender.Male));
udh.addUser(new User("person6", "Chavez", Gender.Female));
udh.addUser(new User("person7", "Jose", Gender.DontAssumeMyGender));
udh.addUser(new User("person8", "Roque", Gender.Male));
udh.addUser(new User("person9", "Leo", Gender.DontAssumeMyGender));
udh.addUser(new User("person10", "Fernando", Gender.Male));
udh.addUser(new User("person11", "Hernandez", Gender.Female));
udh.addUser(new User("person12", "Barrera", Gender.DontAssumeMyGender));
udh.addUser(new User("person13", "Carlos", Gender.Male));
udh.addUser(new User("person14", "Zac", Gender.DontAssumeMyGender));







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

export {udh,pdh}