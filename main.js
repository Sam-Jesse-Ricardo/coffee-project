"use strict"

function getCoffeeList(coffee) {
    let container = document.createElement('div')
    let child1 = document.createElement('div')
    child1.innerText = coffee.name
    let child2 = document.createElement('div')
    child2.innerText = coffee.roast


    container.appendChild(child1)
    container.appendChild(child2)



    // var html = '<div class="coffee">';
    // html += '<td>' + coffee.id + '</td>';
    // html += '<div>' + coffee.name + '</div>';
    // html += '<div>' + coffee.roast + '</div>';
    // html += '</div>';

    return container;
}
// getCoffeeList() // this is a comment

function renderCoffees(coffees) {
    let coffeesContainer = document.getElementById("coffees");
    for(let i = coffees.length - 1; i >= 0; i--) {
        coffeesContainer.appendChild(getCoffeeList(coffees[i]))
    }
}

function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    let selectedRoast = roastSelection.value;
    let filteredCoffees = [];

    if(e === "all"){
        coffees.forEach(function (coffee){
            filteredCoffees.push(coffee)
        })
    }else
    coffees.forEach(function(coffee) {
        if (coffee.roast === selectedRoast) {
            filteredCoffees.push(coffee);
        }
    });
    renderCoffees(filteredCoffees);
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

renderCoffees(coffees);

submitButton.addEventListener('click', updateCoffees);
roastSelection.addEventListener('click', updateCoffees)
