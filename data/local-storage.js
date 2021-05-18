//import findById from utilities.  This function will be used to help determine if the pokemon is on our data base or will need to be added.
import { findById } from '../utils.js';

//I think this makes POKEDEX static?
const POKEDEX = 'POKEDEX';

//This function looks into the pokemon database in local storage and turns "something" into a string.  The numerical ID?
export function getPokedex() {
    //This looks into local storage to get an item for comparison?
    const stringyPokedex = localStorage.getItem(POKEDEX);
    
    //if it is NOT a string, return an empty array.
    if (!stringyPokedex) return [];

    //I think this analyzes pokedex but I'm not sure for what?
    const pokedex = JSON.parse(stringyPokedex);

    //This returns the result of the parsing above
    return pokedex;
}


//This function modifies or adds to the pokemon database
export function setPokedex(newPokedex) {
    //This is a constant that turns a value into a string
    const stringyPokedex = JSON.stringify(newPokedex);
    //This appears to be writing back to local storage, but not clear what
    localStorage.setItem(POKEDEX, stringyPokedex);
}

//This function captures a pokeman and adds it to the pokeman database
export function capturePokemon(selectedPokemonId) {
    //Before we can capture, we need to make sure we don't already have it.
    const pokedex = getPokedex();
    //This appears to be looking for matches between what we're catching, and what we have.
    const matchingPokemon = findById(pokedex, selectedPokemonId);
    //This increments captured pokemon?
    matchingPokemon.captured++;
    //This writes the captured pokemon to the pokemon database
    setPokedex(pokedex);
}

//This function tracks encounters and updates the database with total encounters
export function encounterPokemon(selectedPokemonId) {
    //Opens the pokemon database
    const pokedex = getPokedex();
    //This appears to compare what we've encountered with what we already have
    const matchingPokemon = findById(pokedex, selectedPokemonId);
    //if the pokemon already exists, then we up the total encounters by ONE
    if (matchingPokemon) {
        matchingPokemon.encountered++;
    //If we've NOT encountered the pokemon, we create a new entry
    } else {
        //This is the new pokemon entry, encounter is defaulted to ONE as this is our first encounter
        const newPokemon = {
            captured: 0,
            encountered: 1,
            id: selectedPokemonId //Not sure what is going on here.
        };
        //This addes the newly encountered, non-existant pokemon to our database
        pokedex.push(newPokemon);
    
    }
    //This updates the master database?
    setPokedex(pokedex);

}

