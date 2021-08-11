'use strict'

//determine number of hours of sleep you got per night of the week
function getSleepHours(day){
  //make the function flexible
    day = day.toLowerCase()
    //return the number of hours you slept each night/day
    switch(day){
        case 'sunday': case'monday': 
        case 'tuesday':
            return 5.5
        case 'wednesday':
            return 6
        case 'thursday':
            return 7
        case 'friday': case 'saturday':
            return 8.5
        case 'sunday':
            return 8
        default: 
            return 'day unrecongnized!'
    }
}
//test code 
console.log(getSleepHours('FriDaY'))