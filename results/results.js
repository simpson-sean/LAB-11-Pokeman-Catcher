import { getPokedex } from '../data/local-storage.js';
import { pokemonNames, pokemonCaptured, pokemonColors, } from '../data/data-utils.js';

var ctx = document.getElementById('my-chart').getContext('2d');

const pokedex = getPokedex();

//console.log(pokedex);

const names = pokemonNames(pokedex);
//console.log(names);

const capturedData = pokemonCaptured(pokedex);
//console.log(capturedData);

const colors = pokemonColors(pokedex);

let myChart = new Chart(ctx, {

    type: 'bar',
    data: {
        labels: names,
        datasets: [
            {
                label: 'Number of Captures',
                data: capturedData,
                backgroundColor: colors, 
                borderColor: colors, 
                borderWidth: 1,
            },
        ],
    },

    options: {
        scales: {
            y: {
                beginAtZero: true,
            },
        },
    },
});

