/*
 * Mario. 10 points.
 *
 * Write a function that prompts the user for a height, and prints a
 * Mario-style half-pyramid of that height.
 *
 *     ##
 *    ###
 *   ####
 *  #####
 * ######
 *
 * Height values must be integers within the range [1, 23]. Users should
 * be continuously re-prompted until they comply with this restriction.
 *
 * As always, certain portions of the starter code are critical to the
 * the feedback script. Please do not modify these sections. They are
 * clearly marked.
 *
 * All output should be displayed on the page, not printed to the console.
 */

function mario() {

  ////////////// DO NOT MODIFY
  let height; // DO NOT MODIFY
  ////////////// DO NOT MODIFY

  // WRITE YOUR EXERCISE 1 CODE HERE
while (height < 1 || height > 23 || height % 1  != 0) {
  height = prompt("Enter an integer from 1 to 23 for the height");
}

height = Number(height);
  
let i = 1;
let block = '#';
let s1 = height - 2;
let hold
let code = "<code>"

 while(i <= height){
  hold = '' 
    for(let j = 0; j<=spaces; j++) {
     hold =hold + '&nbsp;'; 
    }
   block = block +'#';
   space--;
   code = code + hold + block + "</br>";
   i++
 }

let p = document.getElementById('mario-easy-output');
p.innerHTML= code + "</code>";
  ////////////////////////// DO NOT MODIFY
  check('mario', height); // DO NOT MODIFY
  ////////////////////////// DO NOT MODIFY
}

/*
 * Mario, Again. 10 points.
 *
 * Write a function that prompts the user for a height, and prints a
 * Mario-style pyramid of that height.
 *
 *     ##  ##
 *    ###  ###
 *   ####  ####
 *  #####  #####
 * ######  ######
 *
 * Height values must be integers within the range [1, 23]. Users should
 * be continuously re-prompted until they comply with this restriction.
 *
 * As always, certain portions of the starter code are critical to the
 * the feedback script. Please do not modify these sections. They are
 * clearly marked.
 *
 * All output should be displayed on the page, not printed to the console.
 */

function marioAgain() {

  ////////////// DO NOT MODIFY
  let height; // DO NOT MODIFY
  ////////////// DO NOT MODIFY

  // WRITE YOUR EXERCISE 2 CODE HERE
while (height < 1 || height > 23 || height % 1  != 0) {
  height = prompt("Enter an integer from 1 to 23 for the height");
}

height = Number(height); 
let i = 1;
let block ='#'
let s1 = height - 2;
let s2 = `&nbsp` + `&nbsp` 
let code = "<code>"
let hold

 while(i <= height){
  hold = '';
   for(j = 0; j = space1;j++){
    hold = hold + `&nbsp;`;
   }
   space1 = space - 1;
   block = block +'#';
   code = code + hold + block + space2 + block + `</br>`
 }
   
let p = document.getElementById('mario-hard');
p.innerHTML= code + "</code>";
  //////////////////////////////// DO NOT MODIFY
  check('mario-again', height); // DO NOT MODIFY
  //////////////////////////////// DO NOT MODIFY
}

/*
 * Credit. 10 points.
 *
 * Write a function that prompts the user for a credit card number (valid
 * and invalid examples will be provided), and displays either:
 *   - an invalid image (provided)
 *   - an American Express image (provided)
 *   - a Mastercard image (provided)
 *   - a Visa image (provided)
 *
 * We'll use Luhn's algorithm to determine the validity of a credit card
 * number. Review the steps of the algorithm below.
 *
 *   0. Multiply every other digit by 2, starting with the number’s
 *      second-to-last digit, and then add those products' digits together.
 *   1. Add the sum to the sum of the digits that weren’t multiplied by 2.
 *   2. If the total’s last digit is 0 (or, put more formally, if the total
 *      modulo 10 is congruent to 0), the number is valid!
 *
 * American Express uses 15-digit numbers, starting with 34 or 37.
 * Mastercard uses uses 16-digit numbers, starting with 51, 52, 53, 54,
 * or 55. Visa uses 13- or 16-digit numbers, starting with 4.
 *
 * 378282246310005 should verify as American Express.
 * 371449635398431 should verify as American Express.
 * 5555555555554444 should verify as Mastercard.
 * 5105105105105100 should verify as Mastercard.
 * 4111111111111111 should verify as Visa.
 * 4012888888881881 should verify as Visa.
 *
 * Credit card numbers must be integers. Users should be continuously
 * re-prompted until they comply with this restriction.
 *
 * As always, certain portions of the starter code are critical to the
 * the feedback script. Please do not modify these sections. They are
 * clearly marked.
 *
 * All output should be displayed on the page, not printed to the console.
 */

function credit() {

  //////////// DO NOT MODIFY
  let card; // DO NOT MODIFY
  //////////// DO NOT MODIFY

  // WRITE YOUR EXERCISE 3 CODE HERE
do {
    card = prompt("Please enter your credit card number:");
  } while ((card % 1) != 0);

  let cardTwo = card;
  let i = ((cardTwo.length) - 2);
  let value = "";
  let totalSum = "";
  let sum = "";

  while (i >= 0) {
    value = 2 * Number(cardTwo.charAt(i));
    if (value >= 10) {
      value = value.toString();
      sum = Number(value.charAt(0)) + Number(value.charAt(1));
    } else {
      sum = value;
    }
    totalSum = Number(totalSum) + sum;
    i = i - 2;
  }

  i = ((cardTwo.length) - 1);

  while (i >= 0) {
    value = Number(cardTwo.charAt(i));
    sum = value;
    totalSum = Number(totalSum) + sum;
    i = i - 2;
  }


  let creditResult = document.getElementById('credit-output');

  if ((totalSum % 10) == 0) {
    if ((cardTwo.length) == 15) {
      creditResult.innerHTML = "<img src ='images/amex.png'/>";
    } else if ((cardTwo.length) == 13) {
      creditResult.innerHTML = "<img src ='images/visa.png'/>";
    } else if ((cardTwo.length) == 16) {
      if (cardTwo.charAt(0) == "4") {
        creditResult.innerHTML = "<img src ='images/visa.png'/>";
      } else {
        creditResult.innerHTML = "<img src ='images/mastercard.png'/>";
      }
    }
  } else {
    creditResult.innerHTML = "<img src ='images/invalid.png'/>";
  }

  card = Number(card);
  /*
   * NOTE: After reading in the card number and storing it in the 'card'
   *       variable, do not modify it. If you find it necessary to manipulate
   *       this value, you will need to create a second variable to serve
   *       as a copy of the 'card' variable.
   */

  ///////////////////////// DO NOT MODIFY
  check('credit', card); // DO NOT MODIFY
  ///////////////////////// DO NOT MODIFY
}

/*
 * Guess. 5 points.
 *
 * Write a function that generates a random number, and asks the user to
 * try to guess this number. When all is said and done, your function
 * should output the random number and the number of attempts it took the
 * user to correctly guess that number. Your function should also provided
 * helpful hints, indicating whether the most recent guess was greater than
 * or less than the target.
 *
 * Random numbers must be between 1 and 1000. User guesses must be integers
 * within the range [1, 1000], and users should be continuously re-prompted
 * until they comply with this restriction. In the event a user guesses
 * something that violates this restriction, an attempt should not be
 * recorded.
 *
 * As always, certain portions of the starter code are critical to the
 * the feedback script. Please do not modify these sections. They are
 * clearly marked.
 *
 * All output should be displayed on the page, not printed to the console.
 */

function guess() {

  let answer = Math.floor(Math.random() * 1000) + 1;
  let guess = prompt("Guess the number between 1 and 1,000");
  while (guess < 0 || guess > 1,000 || NaN){
  guess = prompt("Guess an Integer number between 1, and 1,000") 
  }
  
  for(let g = 1; guess != answer; g++) { 
    if (guess > answer) {
      guess = prompt("Your last guess was too high try again");
      while (guess < 0 || guess > 1,000 || NaN){
        guess = prompt("Please enter a vaild number") 
      }
  }else {
    guess = prompt("Your last guess was too low try again")
    while(guess < 0 || guess > 1,000 || NaN){
      guess = prompt("Please enter a valid number") 
     }
  }
  }
    let word = "guess" 
    if (g > 1) {
     word = "guesses" 
    }
    
   let p =document.getElementById("guess-output")
   p.innerHTML = `You guessed it Right in Just ${g} ${word}!`
  // WRITE YOUR EXERCISE 4 CODE HERE

  ////////////////// DO NOT MODIFY
  check('guess'); // DO NOT MODIFY
  ////////////////// DO NOT MODIFY
}

/*
 * Hurricane. 5 points.
 *
 * Write a function that prompts the user to enter a windspeed, and prints
 * the hurricane category (if applicable) for that windspeed. We'll be
 * using the Saffir-Simpson scale, shown below in MPH.
 *   - Category 5: 157+
 *   - Category 4: 130-156
 *   - Category 3: 111-129
 *   - Catgeory 2: 96-110
 *   - Category 1: 74-95
 *   - Tropical Storm: 39-73
 *
 * Windspeeds must be non-negative integers in the range [0, INF), and
 * users should be continuously re-prompted until they comply with this
 * restriction.
 *
 * As always, certain portions of the starter code are critical to the
 * the feedback script. Please do not modify these sections. They are
 * clearly marked.
 *
 * All output should be displayed on the page, not printed to the console.
 */

function hurricane() {

  ///////////////// DO NOT MODIFY
  let windspeed; // DO NOT MODIFY
  ///////////////// DO NOT MODIFY
windspeed = prompt("please enter a nonnegative integer for windspeed" )
while(windspeed % 1 != 0||windspeed < 0 ){
  windspeed = prompt ("please enter a nonnegative integer for windspeed" )
}
let type = parseInt(windspeed,10);
if (windspeed <= 38){
  windspeed='The skies are calm...'
}
if (windspeed >= 39 && windspeed <= 73){
  windspeed='Tropical Storm.'
}
if (windspeed >= 74 && windspeed <= 95){
  windspeed='Category 1 Hurricane.'
}
if (windspeed >= 96 && windspeed <= 110){
  windspeed='Category 2 Hurricane.'
}
if (windspeed >= 111 && windspeed <= 130){
  windspeed='Category 3 Hurricane.'
}
if (windspeed >= 130 && windspeed <= 157){
  windspeed='Category 4 Hurricane.'
}
if (windspeed >= 157){
  windspeed='Category 5 Hurricane.'
}

var p=document.getElementById("hurricane-output")
p.innerHTML=`${windspeed}`;
windspeed = type
  ///////////////////////////////// DO NOT MODIFY
  check('hurricane', windspeed); // DO NOT MODIFY
  ///////////////////////////////// DO NOT MODIFY
}

/*
 * Gymnastics. 5 points.
 *
 * Write a function that prompts the user to enter six scores. From those
 * six scores, the lowest and highest should be discarded. An average score
 * should be computed from the remaining four. Your function should output
 * the discarded scores, as well as the average score.
 *
 * Scores must be real numbers in the range [0.0, 10.0], and users should
 * be continuously re-prompted until they comply with this restriction.
 *
 * As always, certain portions of the starter code are critical to the
 * the feedback script. Please do not modify these sections. They are
 * clearly marked.
 *
 * All output should be displayed on the page, not printed to the console.
 */

function gymnastics() {

  /////////////////// DO NOT MODIFY
  let total = 0; //// DO NOT MODIFY
  let scores = []; // DO NOT MODIFY
  /////////////////// DO NOT MODIFY
  let score1 = prompt("please enter a real number between 0.0 to 10.0 for score 1");
  while(score1 < 0.0 || score1 >10.0){
    score1=prompt("please enter a real number between 0.0 to 10.0 for score 1")
  }
  score1=parseInt(score1,10);
  scores.push(score1);
  let score2 = prompt("please enter a real number between 0.0 to 10.0 for score 2");
  while(score2 < 0.0 || score2 >10.0){
    score2=prompt("please enter a real number between 0.0 to 10.0 for score 2")
  }
   score2=parseInt(score2,10);
   scores.push(score2);

  let score3 = prompt("please enter a real number between 0.0 to 10.0 for score 3");
  while(score3 < 0.0 || score3 >10.0){
    score3=prompt("please enter a real number between 0.0 to 10.0 for score 3")
  }
  score3=parseInt(score3,10);
  scores.push(score3);

  let score4 = prompt("please enter a real number between 0.0 to 10.0 for score 4");
  while(score4 < 0.0 || score4 >10.0){
    score4=prompt("please enter a real number between 0.0 to 10.0 for score 4")
  }
   score4=parseInt(score4,10);
   scores.push(score4);

  let score5 = prompt("please enter a real number between 0.0 to 10.0 for score 5");
  while(score5 < 0.0 || score5 >10.0){
    score5=prompt("please enter a real number between 0.0 to 10.0 for score 5")
  }
  score5=parseInt(score5,10);
  scores.push(score5);

  let score6 = prompt("please enter a real number between 0.0 to 10.0 for score 6");
  while(score6 < 0.0 || score6 >10.0){
    score6=prompt("please enter a real number between 0.0 to 10.0 for score 6")
  }
   score6=parseInt(score6,10);
   scores.push(score6);

  total = score1+score2+score3+score4+score5+score6

   let minScore = Math.min(score1,score2,score3,score4,score5,score6);
   let maxScore = Math.max(score1,score2,score3,score4,score5,score6);

   let average=(total-(minScore+maxScore))/4;
   average=average.toFixed(2);

   discarded= `${minScore}, ${maxScore}`;
   let p =document.getElementById("gymnastics-output");
   p.innerHTML = `Discarded: ${discarded}<br/>Score: ${average}`;

  /*
   * NOTE: The 'total' variable should be representative of the sum of all
   *       six of the judges' scores.
   */

  /*
   * NOTE: You need to add each score (valid or not) to the 'scores' variable.
   *       To do this, use the following syntax:
   *
   *       scores.push(firstScore);   // your variable names for your scores
   *       scores.push(secondScore);  // will likely be different than mine
   */

  /////////////////////////////// DO NOT MODIFY
  check('gymnastics', scores); // DO NOT MODIFY
  /////////////////////////////// DO NOT MODIFY
}

/*
 * Report Card. 5 points.
 *
 * Write a function that prompts the user to enter test, quiz, and homework
 * grades for the marking period. Users can enter as many grades of each
 * category, entering -1 to signal they are finished. Your function should
 * output the user's final grade, where tests, quizzes, and homework are
 * weighted at 60%, 30%, and 10%, respectively.
 *
 * Grades must be real numbers in the range [0.0, 100.0], and users should
 * be continuously re-prompted until they comply with this restriction. The
 * only exception is -1, which signals the user is finished entering grades
 * for that category.
 *
 * As always, certain portions of the starter code are critical to the
 * the feedback script. Please do not modify these sections. They are
 * clearly marked.
 *
 * All output should be displayed on the page, not printed to the console.
 */

function reportCard() {

  ///////////////////////// DO NOT MODIFY
  let testTotal = 0; ////// DO NOT MODIFY
  let quizTotal = 0; ////// DO NOT MODIFY
  let homeworkTotal = 0; // DO NOT MODIFY
  ///////////////////////// DO NOT MODIFY

  /*
   * NOTE: The 'testTotal', 'quizTotal', and 'homeworkTotal' variables
   *       should be representative of the sum of the test scores, quiz
   *       scores, and homework scores the user enters, respectively.
   */

  ///////////////////// DO NOT MODIFY
  let tests = 0; ////// DO NOT MODIFY
  let quizzes = 0; //// DO NOT MODIFY
  let homeworks = 0; // DO NOT MODIFY
  ///////////////////// DO NOT MODIFY

  tests = -1;
   quizzes = -1;
   homeworks = -1;


 let testadd
   for (testadd = 0; testadd != -1; testTotal = testTotal + testadd) {
     testadd = prompt(`Enter your test grades between 0.0 and 100.0 when you are done enter "-1"`)
     while (testadd < 0 && testadd != -1 || testadd > 100.0){
       testadd = prompt(`Enter your test grades between 0.0 and 100.0 when you are done enter "-1"`)
     }
     testadd = parseInt(testadd, 10);
       tests = tests + 1
     if (testadd === -1) {
      testTotal++
     }
 }

 let quizadd
   for (quizadd = 0; quizadd != -1; quizTotal = quizTotal + quizadd) {
     quizadd = prompt(`Enter your quiz grades between 0.0 and 100.0 when you are done enter "-1"`)
     while (quizadd < 0 && quizadd != -1 || quizadd > 100.0){
       quizadd = prompt(`Enter your quiz grades between 0.0 and 100.0 when you are done enter "-1"`)
     }
     quizadd = parseInt(quizadd, 10);
       quizzes = quizzes + 1
     if (quizadd === -1) {
       quizTotal++
     }
 }


 let homeworkadd
   for (homeworkadd = 0; homeworkadd != -1; homeworkTotal = homeworkTotal + homeworkadd) {
     homeworkadd = prompt(`Enter your homework grades between 0.0 and 100.0 when you are done enter "-1"`)
     while (homeworkadd < 0 && homeworkadd != -1 || homeworkadd > 100.0){
       homeworkadd = prompt(`Enter your homework grades between 0.0 and 100.0 when you are done enter "-1"`)
     }
     homeworkadd = parseInt(homeworkadd, 10);
       homeworks = homeworks + 1
     if (homeworkadd === -1) {
       homeworkTotal++
     }
 }


 let testaverage = testTotal / tests
 let quizaverage = quizTotal / quizzes
 let homeworkaverage = homeworkTotal / homeworks
 testaverage = testaverage.toFixed(2);
 quizaverage = quizaverage.toFixed(2);
 homeworkaverage = homeworkaverage.toFixed(2);
 let grade = (testaverage * 0.6) + (quizaverage * 0.3) + (homeworkaverage * 0.1)
 grade = grade.toFixed(2);
 let p =document.getElementById("report-card-output");
 p.innerHTML =`Tests: ${testaverage}<br/>Quizzes: ${quizaverage}<br/>Homework: ${homeworkaverage}<br/>Grade: ${grade}`;

  /*
   * NOTE: The 'tests', 'quizzes', and 'homeworks' variables should be
   *       representative of the number of tests, quizzes, and homework
   *       grades the user enters, respectively.
   */

  /////////////////////// DO NOT MODIFY
  check('report-card', // DO NOT MODIFY
    testTotal, ////////// DO NOT MODIFY
    tests, ////////////// DO NOT MODIFY
    quizTotal, ////////// DO NOT MODIFY
    quizzes, //////////// DO NOT MODIFY
    homeworkTotal, ////// DO NOT MODIFY
    homeworks /////////// DO NOT MODIFY
  ); //////////////////// DO NOT MODIFY
  /////////////////////// DO NOT MODIFY
}
