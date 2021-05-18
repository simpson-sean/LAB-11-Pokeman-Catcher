import { findById } from '../utils.js';
import { getPokedex } from './local-storage.js';
import pokemon from './pokemons.js';

export function mungeCaptured(pokemonArray) {
    const results = [];

    for (let poke of pokemonArray) {
        
        results.push(poke.captured);

    }

    return results;
}

export function mungeNames(pokemonArray) {
    const results = [];

    for (let poke of pokemonArray) {
        const data = findById(pokemon, poke.id);
    //  console.log(data.pokemon);
        results.push(data.pokemon);
    }

    return results;
}

export function mungeColors(pokemonArray) {
    const results = [];

    for (let poke of pokemonArray) {
        const data = findById(pokemon, poke.id);
        results.push(data.color_1);
    }

    return results;
}

export function getTotalCaptured() {
    
    let captureCounter = 0;
    
    let capPokedex = getPokedex();

    for (let poke of capPokedex) {
        captureCounter = captureCounter + poke.encountered;
    }
    return captureCounter;

}