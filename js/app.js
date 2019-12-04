'use strict';

var myAge = prompt('Am I 98 years old?');
// validates response to prompt
if (myAge.toLowerCase() === 'y' || myAge.toLowerCase() === 'yes') {
  alert('I\'m a tad younger that 98!');
} else if (myAge.toLowerCase() === 'n' || myAge.toLowerCase() === 'no') {
  alert('You are correct!');
} else {
  alert('You didnt respond correctly!');
}
var myFavoriteActivity = prompt('Is my favorite winter activity snowboarding?');
if (myFavoriteActivity.toLowerCase() === 'y' || myFavoriteActivity.toLowerCase() === 'yes') {
  alert('You are correct!');
} else if (myFavoriteActivity.toLowerCase() === 'n' || myFavoriteActivity.toLowerCase() === 'no') {
  alert('I actually love to snowboard!');
} else {
  alert('You didnt respond correctly!');
}
var myChicken = prompt('Do I like chicken?');
if (myChicken.toLowerCase() === 'y' || myChicken.toLowerCase() === 'yes') {
  alert('You are correct!');
} else if (myChicken.toLowerCase() === 'n' || myChicken.toLowerCase() === 'no') {
  alert('Incorrect. I really like chicken!');
} else {
  alert('You didnt respond correctly!');
}
var myPineapple = prompt('Do I like pinapple on pizza?');
if (myPineapple.toLowerCase() === 'y' || myPineapple.toLowerCase() === 'yes') {
  alert('No Way! Pineapple does\'t belong on pizza!');
} else if (myPineapple.toLowerCase() === 'n' || myPineapple.toLowerCase() === 'no') {
  alert('You are correct!');
} else {
  alert('You didnt respond correctly!');
}
var beachWalk = prompt('Do I like long walks on the beach?');
if (beachWalk.toLowerCase() === 'y' || beachWalk.toLowerCase() === 'yes') {
  alert('You are correct!');
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
//
var userName = prompt('What is your name?');
alert('Hello, ' + userName + '! Welcome to my site!');
