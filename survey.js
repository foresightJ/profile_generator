const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("What do you think of Node.js? ", (a) => {
  rl.question("What's an activity you like doing?", (b) => {
    rl.question("What do you listen to while doing that?", (c) => {
      rl.question("Which meal is your favourite dinner?", (d) => {
        rl.question(
          "What's your favourite thing to eat for that meal?",
          (e) => {
            rl.question("Which sport is your absolute favourite?", (f) => {
              rl.question(
                "What is your superpower? In a few words, tell us what you are amazing at!",
                (g) => {
                  console.log(
                    `${a}'s favourite activity is to ${b} while ${c}, prefers ${d} over any other food, and would not miss out on a good ${e}. Favourite sport is ${f} and amazing at ${g}`
                  );
                  rl.close();
                }
              );
            });
          }
        );
      });
    });
  });
});
