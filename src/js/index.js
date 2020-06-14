import '../scss/main.scss';

/* place your code below */

console.log('HELLO 🚀')

function Hello (imie, wiek)
{
    console.log (`Mam na ${imie} i mam ${wiek} lat`);
   
};


Hello ('Marlena', 28);


const deathStar = {
diameter: 1200000,
fire: (target) => {
    console.log (`${trget} destroyed`) },
    isOperating: true,
    levels: 357,
    name: 'Death Star',
    population: 1000,
}


console.log (deathStar);

const Marlena = {
waga: 57,
wiek: 28,
name: 'Marlena',
sex: 'woman',

}

console.log (`Mam na imię ${Marlena.name} i mam ${Marlena.wiek} lat` );


const menu = document.querySelector ('.burger--js')


menu.addEventListener ('click', () => {

const marlenka = document.querySelector ('.navigation--js');
marlenka.classList.toggle('hamburger');
}
);

const age = document.querySelector ('.age--js')
age.innerHTML ('')
console.log (age.value);