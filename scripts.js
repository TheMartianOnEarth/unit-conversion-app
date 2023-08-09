//fetch DOM elements
let inputElement = document.getElementById('value-input');
let lengthEl = document.getElementById('length-text');
let volumeEl = document.getElementById('volume-text');
let massEl = document.getElementById('mass-text');

//variables
let input = 10;
let meters = 0;
let feet = 0;
let liters = 0;
let gallons = 0;
let kilos = 0;
let pounds = 0;

let doConversion = (input) => {
    //feet to meters
    meters = (input * 0.3048).toFixed(3);
    //meters to feet
    feet = (input * 3.28084).toFixed(3);
    //gallons to liters
    liters = (input * 3.78541).toFixed(3);
    //liters to gallons
    gallons = (input * 0.264172).toFixed(3);
    //pounds to kilos
    kilos = (input * 0.453592).toFixed(3);
    //kilos to pounds
    pounds = (input * 2.20462).toFixed(3);
}

//look out for inputs
inputElement.addEventListener('input', () => updateConversion());

//update the conversion container
let updateConversion = () => {

    //if the input elements is empty
    if(!inputElement.value) {
        resetConversion();
    } else {
        doConversion(inputElement.value)

        //length
        lengthEl.textContent = `
            ${inputElement.value} meters = ${feet} feet |     
            ${inputElement.value} feet = ${meters} meters
        `;

        //volume
        volumeEl.textContent = `
            ${inputElement.value} liters = ${gallons} gallons |     
            ${inputElement.value} gallons = ${liters} liters
        `;

        //mass
        massEl.textContent = `
            ${inputElement.value} kilograms = ${pounds} pounds |     
            ${inputElement.value} pounds = ${kilos} kilograms
        `;
    }
    
};

//if the input is empty
let resetConversion = () => {
    doConversion(inputElement.placeholder)

        //length
        lengthEl.textContent = `
            ${inputElement.placeholder} meters = ${feet} feet |     
            ${inputElement.placeholder} feet = ${meters} meters
        `;

        //volume
        volumeEl.textContent = `
            ${inputElement.placeholder} liters = ${gallons} gallons |     
            ${inputElement.placeholder} gallons = ${liters} liters
        `;

        //mass
        massEl.textContent = `
            ${inputElement.placeholder} kilograms = ${pounds} pounds |     
            ${inputElement.placeholder} pounds = ${kilos} kilograms
        `;
}

resetConversion();