"use strict"
function searchCoffees(e) {
    let filteredCoffees = [];
    console.log(e.target)
    for (let i = 0; i < coffees.length; i++) {
        if (coffees[i].name.toLowerCase().indexOf(e.target.value.toLowerCase()) > -1) {
            filteredCoffees.push(coffees[i]);
        }
    }
    renderCoffees(filteredCoffees);
}

function getCoffeeList(coffee) {
    let container = document.createElement('div')
    let child1 = document.createElement('h2')
    child1.innerText = coffee.name
    child1.className = "col-6"
    let child2 = document.createElement('div')
    child2.innerText = coffee.roast
    child2.className = "roast col-6 text-right"
    container.appendChild(child1)
    container.appendChild(child2)
    return container;
}
// child2.setAttribute('style' , 'color=lightgray')
// document.getElementsByClassName("roast").style.color = "lightgray";

function renderCoffees(coffees) {
    let coffeesContainer = document.getElementById("coffees");
    coffeesContainer.innerHTML = ""
    for(let i = coffees.length - 1; i >= 0; i--) {
        coffeesContainer.appendChild(getCoffeeList(coffees[i]))
    }
}

function updateCoffees(e) {
    if (e)e.preventDefault(); // don't submit the form, we just want to update the data
    let selectedRoast = roastSelection.value;
    let filteredCoffees = [];

    if(selectedRoast === "all"){
        filteredCoffees = coffees
    }else
    coffees.forEach(function(coffee) {
        if (coffee.roast === selectedRoast) {
            filteredCoffees.push(coffee);
        }
    });
    renderCoffees(filteredCoffees);
}

function addCoffee(e){
    e.preventDefault();
    let coffee = {
        id: coffees.length + 1,
        name: newName(),
        roast: newRoast(),
    }
    coffees.push(coffee);
    updateCoffees();
}


function newName(){
    return document.getElementById('new-name').value;
}

function newRoast(){
   return document.getElementById('coffee-roast-selection').value;
}
// function searchCoffees(value) {
//     let filteredCoffees = [];
//     for(let i = 0; i < coffees.length; i++) {
//         if (coffees[i].name.toLowerCase().indexOf(value.toLowerCase()) > -1) {
//             filteredCoffees.push(coffees[i]);
//         }
//     }
//     renderCoffees(filteredCoffees);
// }



// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
let coffees = [
    {id: 1, name: 'Light City', roast: 'light'},
    {id: 2, name: 'Half City', roast: 'light'},
    {id: 3, name: 'Cinnamon', roast: 'light'},
    {id: 4, name: 'City', roast: 'medium'},
    {id: 5, name: 'American', roast: 'medium'},
    {id: 6, name: 'Breakfast', roast: 'medium'},
    {id: 7, name: 'High', roast: 'dark'},
    {id: 8, name: 'Continental', roast: 'dark'},
    {id: 9, name: 'New Orleans', roast: 'dark'},
    {id: 10, name: 'European', roast: 'dark'},
    {id: 11, name: 'Espresso', roast: 'dark'},
    {id: 12, name: 'Viennese', roast: 'dark'},
    {id: 13, name: 'Italian', roast: 'dark'},
    {id: 14, name: 'French', roast: 'dark'},
];

document.querySelector('#coffees');
let submitButton = document.querySelector('#submit');
let roastSelection = document.querySelector('#roast-selection');
let searchBar = document.querySelector('#search-bar')

renderCoffees(coffees);

submitButton.addEventListener('click', addCoffee);
roastSelection.addEventListener('change', updateCoffees)
searchBar.addEventListener('keyup', searchCoffees)


