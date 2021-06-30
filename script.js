


const pokeappear=document.getElementById('pokeappear');
const pokepic=document.getElementById('pokepic');
let inputval=0;
 let API_POKEMON= 'https://pokeapi.co/api/v2/pokemon/';

const getUser=async()=>{
  const SEARCH_STR=API_POKEMON+inputval;
  const response= await fetch(SEARCH_STR);
  const data= await response.json();
  pokeappear.innerHTML=`<h2>${data.name}</h2>`
  pokepic.innerHTML=`<img src=${data.sprites.front_default}></img>`
}


function ShowPokemon(form){
   inputval= form.inputbox.value
  console.log(inputval);
  getUser();
}


