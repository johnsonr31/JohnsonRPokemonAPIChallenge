import { GetAPI, monTxt, searchInput, SearchPokemon, searchBarInput, SearchAPI, GetRandomMon } from './functions.js';
// Get Element by ID
let test = document.getElementById('test');
let testBtn = document.getElementById('testBtn');
let pkmnName = document.getElementById('pkmnName');
let randomBtn = document.getElementById('randomBtn');


testBtn.addEventListener('click', function(){
    SearchPokemon();
})

randomBtn.addEventListener('click', function(){
    GetRandomMon();
})

GetAPI();