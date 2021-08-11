'use strict'

//get the total sleep hours that you actually slept
function getActualSleepHours(a = 5.5, b = 5.5, c = 5.5, d = 6, e = 7, f = 8.5, g = 8){
    //check that hours are valid
    for(let hours of [a,b,c,d,e,f,g]) if(hours === null || hours === undefined || hours === '' || hours < 0 || hours > 24) 
{
        return 'one or more of the hours input are incorrect, please try again'
    }

    return a + b + c + d + e + f + g
}

//get the ideal sleep hours that you prefer
//Some people need to sleep longer than others. 
//pass an argument to getIdealSleepHours(idealHoursPerDay) where idealHoursPerDay is the ideal/prefered hours per night
function getIdealSleepHours(idealHoursPerDay = 3){
    return idealHoursPerDay * 7
}

//calculate sleep debt
function calculateSleepDebt(){
    const actualSleepHours = getActualSleepHours(),
    idealSleepHours = getIdealSleepHours()
    //make the program more interactive & informative by including the actual hours of sleep
    if(actualSleepHours === idealSleepHours){
        return `WOW ${actualSleepHours} hours!, you got the perfect amount of sleep :)`
    }else if(actualSleepHours > idealSleepHours){
        return `${actualSleepHours} hours, it looks like you got more sleep than needed!`
    }else{
        return `${actualSleepHours} hours :(( You should get some rest!!`
    }
}

//test code 
console.log(calculateSleepDebt()) //46 hours, it looks like you got more sleep than needed!