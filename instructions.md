### Coding Challenge: Random Joke Generator 🤣

#### Task:

Create a small program that fetches and displays a random joke.

#### Instructions:

1. Create an `async` function named `getJoke` that:

   - Use `prompt` to ask the user if they want to hear a joke, e.g., `wantsJoke`.
   - Makes a fetch request to a joke API that does not require an API key (`https://official-joke-api.appspot.com/random_joke`).
   - Example json: 
   ```json
   {
      "type":"general",
      "setup":"Why do valley girls hang out in odd numbered groups?",
      "punchline":"Because they can't even.",
      "id":353
   }

   ```
   - Parses the JSON response and extracts the `setup` and `punchline`.
   - Returns the joke in the format:

   ```
   "Setup: [setup]\nPunchline: [punchline]".
   ```

   - Check if the user answered `yes` to `wantsJoke`.
   - If `yes`, `console.log` to display the joke.
   - If the user answers `no`, display a friendly message like `"Maybe next time!"`

2. Run the `getJoke` function

#### Example:

If the user enters `yes` when asked if they want to hear a joke, the output might be:

```
Setup: Why don't scientists trust atoms?
Punchline: Because they make up everything!
```

If the user enters `no`, the output might be:

```
Maybe next time!
```
