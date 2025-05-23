// run `node index.js` in the terminal

// don't remove this line if are using prompt
const prompt = require('prompt-sync')();

// Fundementals week 3
// 1) Create an async function named getJoke that:
//  - Use prompt to ask the user if they want to hear a joke, e.g., wantsJoke.
//  - Makes a fetch request to a joke API that does not require an API key (https://official-joke-api.appspot.com/random_joke).
//  - Parses the JSON response and extracts the setup and punchline.
//  - Check if the user answered yes to wantsJoke.
//  - If yes, console.log to display the joke.
//  - If the user answers no, display a friendly message like "Maybe next time!"

// Put your code/answer below here ⬇️
// 1st create async function
async function getJoke() {
  const wantsJoke = prompt(
    'Do you want to hear a joke? (yes/no)'
  ).toLowerCase();
  // ask user if want to hear a joke
  if (wantsJoke === 'yes') {
    try {
      // if yes link to joke API
      const response = await fetch(
        'https://official-joke-api.appspot.com/random_joke'
      );
      // if unable to connect to API
      if (!response.ok) throw new Error('Failed to fetch the joke.');

      // using async/Wait for response
      const joke = await response.json();
      // create the joke and display joke setup and joke punchline!
      console.log(`Setup: ${joke.setup}\nPunchline: ${joke.punchline}`);
    } catch (error) {
      console.error(
        // display this text when unable to fetch joke from API
        'Oops! Something went wrong while fetching the joke.',
        error
      );
    }
  } else {
    console.log('Maybe some ohter time! When you feeling like Laughing');
  }
}
// Run whole functionn
getJoke();

// Put your code/answer above here ⬆️
// 2nd Joke with slight change to code which is adding async/await, fetch and user interaction via prompt:
async function getJoke() {
  const wantsJoke = prompt(
    'Do you want to hear a joke? (yes/no)'
  ).toLowerCase();

  if (wantsJoke === 'yes') {
    try {
      const response = await fetch(
        'https://official-joke-api.appspot.com/random_joke'
      );
      const data = await response.json();

      const joke = `Setup: ${data.setup}\nPunchline: ${data.punchline}`;
      console.log(joke);
    } catch (error) {
      console.error(
        'Oops! Something went wrong while fetching the joke.',
        error
      );
    }
  } else {
    console.log('MMaybe some ohter time! When you feeling like Laughing');
  }
}

// Run the function
getJoke();

// 3rd try with different way of coding.
// Please remove the */ to try out the code as with so many prompt the joke would not be under stood with so many jokes run at once.

/* async function getJoke() {
  const userResponse = prompt('Do you want to hear a joke? (yes/no)')
    .trim()
    .toLowerCase();

  if (userResponse === 'yes') {
    try {
      const jokeResponse = await fetch(
        'https://official-joke-api.appspot.com/random_joke'
      );
      // use num
      if (jokeResponse.status !== 200) {
        throw new Error('Unable to retrieve joke.');
      }

      const { setup, punchline } = await jokeResponse.json();
      console.log(`Setup: ${setup}\nPunchline: ${punchline}`);
    } catch (err) {
      console.error('Something went wrong fetching the joke:', err.message);
    }
  } else {
    console.log('Maybe next time!');
  }
}
// run the function
getJoke(); */
