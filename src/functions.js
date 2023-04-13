// This file is where most of the functions will be stored, to avoid cluttering up the main app.js file too much


let radNum = Math.floor(Math.random() * 646);
let monTxt = '';
let searchInput = '';
let savedInput = '';
let searchURL = '';
let searchBarInput = document.getElementById('searchBarInput');
let pkmnSprite = document.getElementById('pkmnSprite');

function saveToFavoritesByName(name){
    let favorites = [];
}

function GetAPI()
{
    fetch(`https://pokeapi.co/api/v2/pokemon/${radNum}/`)
    .then((response) => response.json())
    .then((data) => console.log(data.name));
}

function GetRandomMon()
{
    radNum = Math.floor(Math.random() * 646);
    
    fetch(`https://pokeapi.co/api/v2/pokemon/${radNum}/`)
    .then((response) => response.json())
    .then((data) => pkmnName.innerHTML = data.name);
}

async function SearchAPI(url)
{
    await fetch(url).then(response => response.json())
    .then((data) => pkmnName.innerHTML = data.name);
}

function SearchPokemon()
{
    if(searchBarInput.value)
    {
        searchInput = searchBarInput.value;
        savedInput = searchInput.toLowerCase();
        searchURL = `https://pokeapi.co/api/v2/pokemon/${savedInput}/`;
        SearchAPI(searchURL);
        console.log(savedInput);
    }else{
        console.log('please enter a valid search term');
    }
}

export{ GetAPI, monTxt, searchInput, savedInput, SearchPokemon, searchBarInput, SearchAPI, GetRandomMon };