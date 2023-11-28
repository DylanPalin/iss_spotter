const request = require('request');
const { fetchMyIP } = require('./iss');
const { fetchCoordsByIP } = require('./iss');
const { fetchISSFlyOverTimes } = require('./iss');
const { nextISSTimesForMyLocation } = require('./iss');

let fetchedCoords = {};

// fetchCoordsByIP('68.150.77.178', (error, data) => {
//   if (error) {
//     console.log("It didn't work!" , error);
//     return;
//   }

//   console.log('It worked! Returned Coords:' , data);


//   fetchISSFlyOverTimes(data, (error, data) => {
//     if (error) {
//       console.log("It didn't work!" , error);
//       return;
//     }
//   console.log('It worked! Returned Flyover Times:' , data);
// });
// });

const printPassTimes = function(passTimes) {  
  for (const pass of passTimes) {
    const datetime = new Date(0);
    datetime.setUTCSeconds(pass.risetime);
    const duration = pass.duration; 
    console.log(`Next pass at ${datetime} for ${duration} seconds!`);
  }
}

nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("It didn't work!" , error);
  }
  printPassTimes(passTimes);
});
