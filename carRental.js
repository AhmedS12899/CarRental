"use strict";

window.onload = function(){
    document.getElementById("calBtn").onclick = carRentalCalculation;
}

function carRentalCalculation(){
    const basicCarRental = 29.99;
    // let pickUpDate = new Date(document.getElementById("pickupField").value);
    let numberDays = Number(document.getElementById("numberDaysField").value);

    //calculate car rental price based on amount of days
    let carRentalPrice = numberDays * basicCarRental;


    //calculate option per day based on what was checked 
    let optionPerDay = function(){
        let optionPerDay =  0;
        if(document.getElementById("ElectronicTollField").checked){
            optionPerDay += 3.95 * numberDays;
        }
        if(document.getElementById("GPSField").checked){
            optionPerDay += 2.95 * numberDays;
        }
        if(document.getElementById("roadsideField").checked){
            optionPerDay += 2.95 * numberDays;
        }
        return optionPerDay;
    }

    //check if under 25 
    let surcharge = 0;
    if(document.getElementById("yesRadioField").checked){
        surcharge = 0.30 * carRentalPrice;
    }

    //calculate total
    let total = carRentalPrice + optionPerDay() + (surcharge);

    document.getElementById("carRentalOutput").innerHTML = `Car rental: $${carRentalPrice.toFixed(2)}`;
    document.getElementById("optionsOutput").innerHTML = `Options: $${(optionPerDay()).toFixed(2)}`;
    document.getElementById("surchargeOutput").innerHTML = `Under 25 surcharge: $${(surcharge).toFixed(2)}`;
    document.getElementById("totalDueOutput").innerHTML = `Total: $${total.toFixed(2)}`;
}