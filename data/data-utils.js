import { findById } from '../utils.js';
import { getPokedex } from './local-storage.js';
import pokemon from './pokemons.js';

export function pokemonCaptured(pokemonArray) {
    const results = [];

    for (let poke of pokemonArray) {
        
        results.push(poke.captured);

    }

    return results;
}

export function pokemonNames(pokemonArray) {
    const results = [];

    for (let poke of pokemonArray) {
        const data = findById(pokemon, poke.id);
        console.log(data);
    //  console.log(data.pokemon);
        results.push(data.name);
    }

    return results;
}

export function pokemonColors(pokemonArray) {
    const results = [];

    for (let poke of pokemonArray) {
        const data = findById(pokemon, poke.id);
        results.push(data.color_1);
    }

    return results;
}

export function getTotalCaptured() {
    
    let captureCounter = 1;
    
    const capPokedex = getPokedex();

    for (let poke of capPokedex) {
        captureCounter = captureCounter + poke.captured;
    }
    return captureCounter;

}