const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo']
const returnFirstTwoDrivers = function(){return drivers.slice(0,2)}

const returnLastTwoDrivers = function(){return drivers.slice(2)}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(number){
    return function(fare){
        return fare*number}
}
createFareMultiplier(5)(5)

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

function selectDifferentDrivers(drivers, twoDrivers){
    if (twoDrivers === returnFirstTwoDrivers){
        return returnFirstTwoDrivers(drivers)
    }
    else if (twoDrivers === returnLastTwoDrivers){
        return returnLastTwoDrivers(drivers)
    }
}


