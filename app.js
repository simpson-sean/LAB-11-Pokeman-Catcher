// import functions and grab DOM elements
import pokeBall from './data/pokemons.js';
import { capturePokemon, encounterPokemon } from './data/local-storage.js';
import { getTotalCaptured } from './data/data-utils.js';


// initialize state
const catchButton = document.getElementById('catch-button');
const radioOne = document.querySelector('#poke-1');
const radioTwo = document.querySelector('#poke-2');
const radioThree = document.querySelector('#poke-3');
const pokeImg1 = document.querySelector('#p-img-1');
const pokeImg2 = document.querySelector('#p-img-2');
const pokeImg3 = document.querySelector('#p-img-3');

renderThreePokemon();

catchButton.addEventListener('click', () => {
  //on clicking catch button
    const selectedRadio = document.querySelector(':checked');
    const selectedPokemonId = selectedRadio.value;
    const totalCaptured = getTotalCaptured();
    console.log(totalCaptured);

    capturePokemon(selectedPokemonId);
    if (totalCaptured === 10) {
        window.location.replace('./results/index.html');
    
    } else {
        renderThreePokemon();
    }

});

// set event listeners 


  // get user input
  // use user input to update state 
  // update DOM to reflect the new state

//a function to get and display random pokemon
function getRandomPokemon() {

    const randomIndex = Math.floor(Math.random() * pokeBall.length);

    const randomPokemon = pokeBall[randomIndex];

    return randomPokemon;

}

//Renders three pokemon in HTML
function renderThreePokemon() {
  
  //generate three new random pokemon
    let pokeOne = getRandomPokemon();
    let pokeTwo = getRandomPokemon();
    let pokeThree = getRandomPokemon();



// we need to check if any pokemon are the same
// Q: How do we do this? A: Use a WHILE loop

    while (
        pokeOne.id === pokeTwo.id || pokeOne.id === pokeThree.id || pokeTwo.id === pokeThree.id

    ) {
  //generate three new pokemon
        pokeOne = getRandomPokemon();
        pokeTwo = getRandomPokemon();
        pokeThree = getRandomPokemon();

    }

//Look at these new three pokemon and increment their "encountered" properties
    encounterPokemon(pokeOne.id);
    encounterPokemon(pokeTwo.id);
    encounterPokemon(pokeThree.id);

//Rerender the poke images
    pokeImg1.src = `./assets/${pokeOne.image}`;
    pokeImg2.src = `./assets/${pokeTwo.image}`;
    pokeImg3.src = `./assets/${pokeThree.image}`;

//add values to the radio buttons
    radioOne.value = pokeOne.id;
    radioTwo.value = pokeTwo.id;
    radioThree.value = pokeThree.id;

}

//Need to track total number of catches
