/** CHALLENGE:
 * Instead of receiving all the timers ahead of time via process.argv, let's listen for user input and set timers "on demand".
   * The user can press b and it should beep right away.
   * The user can input any number from 1 to 9 and it should:
     * immediately output "setting timer for x seconds...", and
     * eep after that number of seconds has passed.
   * The user can use ctrl + c to exit the program, at which point the program should say "Thanks for using me, ciao!" before terminating
 */

// SETUP:
const stdin = process.stdin;
stdin.setRawMode(true);
stdin.setEncoding('utf8');

// SOLUTION:
stdin.on('data', (key) => {
  // When the user inputs 'b' or 'B',
  if (key === 'b' || key === 'B') {
    
    // immediately outputs a beep.
    process.stdout.write('\n\n*BEEP*\n\n');
  }

  // When the user inputs any number between 1 to 9,
  if (key === '1' || key === '2' || key === '3' || key === '4' || key === '5' || key === '6' || key === '7' || key === '8' || key === '9') {
    
    // immediately outputs the following message, and
    process.stdout.write(('\n\nsetting timer for ' + key + ' seconds...'));

    // beeps after the number of seconds has passed.
    setTimeout(() => {
      process.stdout.write('\n\n*BEEP*\n\n');
    }, key * 1000);
  }
  
  // When the user inputs ctrl + c (\u003), 
  if (key === '\u0003') {
    
    // immediately output the following message, and
    process.stdout.write('\n\nThanks for using me, ciao!\n\n');
    
    // terminate the program.
    process.exit();
  }
});
