/*--------------------------------------------------------------------------------------
|	PlaceSearchOptions Module: Created by Alejandro on 1/21/2017.
|---------------------------------------------------------------------------------------
|   Description: Gives a class description of how the Options for a Places Search should
|   be encapsulated. Parameters that are necessary will be required in construction.
---------------------------------------------------------------------------------------*/

class PlaceSearchOptions{
    public location: string;
    public radius: number;
    public types: string;
    public keyword: string;
    public key: string;

    constructor(location: string, radius: number){
        this.location = location;
        this.radius = radius;
        this.types = "night_club";
    }

    setAdtionalParams(){

    }
}

export {PlaceSearchOptions}