'use strict';
var score = 0;
var myAge = prompt('Am I 98 years old?');
// validates response to prompt
if (myAge.toLowerCase() === 'y' || myAge.toLowerCase() === 'yes') {
  alert('I\'m a tad younger that 98!');
} else if (myAge.toLowerCase() === 'n' || myAge.toLowerCase() === 'no') {
  alert('You are correct!');
  score++;
} else {
  alert('You didnt respond correctly!');
}
var myFavoriteActivity = prompt('Is my favorite winter activity snowboarding?');
if (myFavoriteActivity.toLowerCase() === 'y' || myFavoriteActivity.toLowerCase() === 'yes') {
  alert('You are correct!');
  score++;
} else if (myFavoriteActivity.toLowerCase() === 'n' || myFavoriteActivity.toLowerCase() === 'no') {
  alert('I actually love to snowboard!');
} else {
  alert('You didnt respond correctly!');
}
var myChicken = prompt('Do I like chicken?');
if (myChicken.toLowerCase() === 'y' || myChicken.toLowerCase() === 'yes') {
  alert('You are correct!');
  score++;
} else if (myChicken.toLowerCase() === 'n' || myChicken.toLowerCase() === 'no') {
  alert('Incorrect. I really like chicken!');
} else {
  alert('You didnt respond correctly!');
}
var myPineapple = prompt('Do I like pineapple on pizza?');
if (myPineapple.toLowerCase() === 'y' || myPineapple.toLowerCase() === 'yes') {
  alert('No Way! Pineapple does\'t belong on pizza!');
} else if (myPineapple.toLowerCase() === 'n' || myPineapple.toLowerCase() === 'no') {
  alert('You are correct!');
  score++;
} else {
  alert('You didnt respond correctly!');
}
var beachWalk = prompt('Do I like long walks on the beach?');
if (beachWalk.toLowerCase() === 'y' || beachWalk.toLowerCase() === 'yes') {
  alert('You are correct!');
  score++;
} else if (beachWalk.toLowerCase() === 'n' || beachWalk.toLowerCase() === 'no') {
  alert('You are incorrect. I do like long walks on the beach.');
} else {
  alert('You didnt respond correctly!');
}
// logs all answers to console
// console.log(myAge);
// console.log(myFavoriteActivity);
// console.log(myChicken);
// console.log(myPineapple);
// console.log(beachWalk);
// console.log(userName);

var numGuess = prompt('Guess a number between 1 and 20.');
// Generates a random whole number between 1 and 20
var numAnswer = Math.ceil(Math.random() * 20);
// Gives you 4 attempts with hints to guess correct number
for (var i = 0; i < 4; i++) {
  if (numGuess < numAnswer) {
    numGuess = prompt('Higher!');
  } else if (numGuess > numAnswer) {
    numGuess = prompt('Lower!');
  } else if (parseInt(numGuess) === numAnswer) {
    alert('You are correct!');
    score++;
    i = 4;
  } else {
    numGuess = prompt('Please enter a number!');
  }
}
alert('The answer was ' + numAnswer + '!');

var songAnswer = ['Amerika', 'My Body', 'Apartment', 'Titus was Born', 'Cough Syrup'];
var songGuess = prompt('Name a song by Young the Giant.');
// Prompts user to guess a string in the array 6 times. If correct answer is guessed loop is terminated
// Had some help from a friend to make loop work. Did not set i to 6 when correct answer was selected
for (i = 0; i < 6; i++) {
  for (var j = 0; j < songAnswer.length; j++) {
    if (songGuess.toLowerCase() === songAnswer[j].toLowerCase()) {
      alert('You are correct!');
      i = 6;
      score++;
      break;
    }
  }
  if (i !== 6) {
    songGuess = prompt('Try again!');
  }
}

alert('You got ' + score + ' out of 7 questions correct!');
var userName = prompt('What is your name?');
alert('Hello, ' + userName + '! Welcome to my site!');
