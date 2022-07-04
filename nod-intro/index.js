const superheroes = require('superheroes');
const superVillains = require('supervillains');
// superheroes.all;
//=> ['3-D Man', 'A-Bomb', …]
 
var yourVillain = superheroes.random();
var yourSuper = superVillains.random();
//=> 'Spider-Ham'

console.log(yourSuper);
console.log(yourVillain);