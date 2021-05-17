## Making a plan
1) Make a drawing of your app. Simple "wireframes"
2) Once you have a drawing, name the HTML elements you'll need to realize your vision
3) For each HTML element ask: Why do I need this?
4) Once we know _why_ we need each element, think about how to implement the "Why" as a "How"
5) Is there some state we need to initialize?
6) Find all the 'events' (user clicks, form submit, etc) in your app. Ask one by one, "What happens when" for each of these events.
7) Think about how to validate each of your steps
8) Consider your data model. What objects will you be using? What are the key/value pairs? What arrays do you need? What needs to live in local storage?
9) Consider what features _depend_ on what other features. Use this dependency logic to figure out what order to complete tasks.




##HTML
1) Three Radio Buttons
2) Single Button
3) The `<img>` tags


##JAVASCRIPT
1) Create pokemon Objects
2) on LOAD, we're:
    -rendering three pokemon
        - in a renderPokemon function
            - opening out pokedex and using our math.random to generate three randome pokemon
            - store three choices in LET variables for rendering page
3) When user selects a pokemon, and clicks submit button
    - Storing their choice in local storage

    - catching the pokemon they selected
    - matching what they selceted with the ID in our pokedex
    -remembering (in localstorage) which pokemon they've seen



##FUNCTIONS

findByID Function
- when rendering pokemon, we're searching thru for a match
- arguements: pokedex array, and then ID
- if match found by array.id, return entire object
- if pokemon in pokedex, pokemon.id === selected.id
- if nothing found, return []

capturePokemon Function
- selection, pokedex are the parameters
- matches selection in pokedex with findById
- captured++
- call setPokedex to put what the function just did into localStorage

encounterPokeman Function
- grab pokedex
- it takes the pokedex and the displayed pokemon
- matches stuff with findById
- with an if/else statement, check to see if the currently encountered pokemon are already in our CART, if so, encounter++
- else: create new item with pokedex.push [id: selected ID, captured: 0, encountered: 1]
- set pokedex to update CART 

setPokedex Function
- putting the "CART" into local storage
- need to stringify whatever is in our CART

getPokedex function
- parses stringy thing
- sets it equal to a constant
- returning a CART

In app.js file:
- on LOAD
    - we want to have three random pokemon appear using math.random  * the length of the pokedex (math.floor this)
    - store result into three separate LET statements
    - getPokedex function, return it to the CART
    - setPokedex function, stringify whatever is in CART
    - encounterPokeman function
    - so, while pokemon1.id === || pokemon2.id: the three LETS get math.random'd again

BUTTON
- on click, call capturePokeman in wich we are putting them in the pokedex and the user selection