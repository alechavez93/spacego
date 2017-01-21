/*--------------------------------------------------------------------------------------
|	Place Module: Created by Jorge Varela on 1/20/2017.
|---------------------------------------------------------------------------------------
|   Description: one of the main objects to send to the client
|
---------------------------------------------------------------------------------------*/

import {Coordinate, Gender} from './UtilityClasses';

class Place{
    private placeId : String;
    public name : String;
    public coordinate : Coordinate;
    public genderAmount : number[];



    public getPeopleCount() : number {
        return 0;
    }

}