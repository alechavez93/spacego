/*--------------------------------------------------------------------------------------
|	PlaceSearchOptions Module: Created by Alejandro on 1/21/2017.
|---------------------------------------------------------------------------------------
|   Description: Gives a class description of how the Options for a Places Search should
|   be encapsulated. Parameters that are necessary will be required in construction.
---------------------------------------------------------------------------------------*/

class PlaceSearchOptions{
    public location: string;
    public radius: number;
    public type: string;
    public keyword: string;
    public opennow: boolean;
    public key: string;

    constructor(location: string, radius: number){
        this.location = location;
        this.radius = radius;
        this.type = "night_club";
        this.key = "AIzaSyD1whdcvkuAPmUGCu1ddIpaO1CMCreWYKY";
    }

    getJSON(){
        return JSON.parse(JSON.stringify(this));
    }
}

export {PlaceSearchOptions}