// CHALLENGE: Implement an alarm clock / timer which will beep after a specified amount of time has passed. The user can specify an unlimited number of alarms using command line arguments

/** 
 * Example usage:
   * node timer.js 10 3 5 15 9
 
 * This will make it beep at:
   * 3 seconds
   * 5 seconds
   * 9 seconds
   * 10 seconds
   * 15 seconds
*/

// Confirm that the script can handle some common edge cases:
  // 1. No numbers are provided: Easy. It should just not beep at all and end immediately since no beeps should get scheduled.
  // 2. An input is a negative number: Ignore/skip any numbers that are negative. We can't schedule anything in the past.
  // 3. An input is not a number: Ignore/skip these as well, instead of attempting to call setTimeout with a non-number.

// Declare an input variable and store the array of string values passed into node.
const inputs = process.argv.slice(2);

// Declare a time variable as an empty array.
const time = [];

// Loop through each element of the input array.
for (const e of inputs) {
  
  // If the number value of the element is greater than (i.e. valid number data type and is a positive number), add the number value of the element into the time array. 
  if (Number(e) > 0) {
    time.push(Number(e));
  }
}
// Sort the numbers in the time array from smallest to largest.
time.sort((a, b) => a - b);

// Declare a sToMs function to convert the parameter from seconds to millisecondsm, by multiplying the parameter by 1000.
const sToMs = seconds => seconds * 1000;

// Loop through each element of the time array.
for (const e of time) {

  // Print the message to the console at each element with a delay equal to the element's value depicted in seconds/milliseconds.
  setTimeout(() => {
    console.log(`BEEP @ ${e} seconds`);
  }, sToMs(e))
}