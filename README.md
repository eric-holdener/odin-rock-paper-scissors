# odin-rock-paper-scissors

This project is all about creating a simple rock paper scissors game for an individual to play against a computer.

Reflection: To start, I created the functionality for selecting the computers play, using a simple math.random equation to get a number 1 to 3 then making the play based off that.

After that, I initially added a dropdown value for rock, paper, or scissors, that would capture the input from the player and run the game function. However, I realized this was not good for multiple runs from one button press, which was being asked of me in the project, so I quickly swapped from this to a simple prompt() function instead.

Once I swapped to the prompt function, I wanted to make sure there as a catchall in case the user misspelled something or put in an incorrect value. I added functionality to return "no one" for winner in my single game runner if the player inputted something that was not correct.

Finally, I made a for loop that ran on button click 5 times to play the rock paper scissors game 5 times. If the no one prompt came up, I decremented i by 1, so 5 full correct games will always be played.

Overall, it was a good exercise in taking how I think initially and reworking the code to fit into the projects scope. I didn't want to use a prompt at first because of the option for the user to input something incorrect, but I overcame that by simply putting in the catch discussed earlier.

One part that did trip me up was returning multiple values from the single game function. I was used to python, where you can return multiple values, so I wasn't sure why the winner was always undefined and my program would run infinitely. However, after a little bugfixing, I learned to return an array of multiple values then assign the values in the function it's being returned to. Easy enough