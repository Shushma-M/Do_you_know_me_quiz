const chalk=require('chalk')
var center = require('center-align');
var justify = require('justify');
console.log(center(chalk.bgMagenta("-----DO YOU KNOW ME???-----"),70),"\n");

var readlineSync=require("readline-sync");
var userName=readlineSync.question("First tell me who you are?? - ");
console.log("oh!! it's youuuu","\n");
console.log(center(chalk.bgWhite.black.bold("Hi!! " +userName ),70),"\n");

var userRate;
function rate(){
userRate=readlineSync.question("Now Rate yourself between 1-10 on How well you know me? - ");
if (userRate > 0 && userRate < 11){
  console.log("\n","oh Really! Come on Let's test it!!","\n");
}
else{
  console.log("Please do as I say and enter the rating correctly");
  rate();
}
}
rate();

console.log(chalk.bgWhite.magenta.bold("Let's begin Level 1, You go to Level 2 only when you score 100% in Level 1"),"\n");

var score=0;
var question1 = {
  question: `1. The universe knows this as my color
  a. Black
  b. Pink
  c. White
  d. Blue
  
  What's your choice: `,
  answer: "b",
}
var question2 = {
  question: `2. For me she/he is the best avenger
  a. Captain America
  b. Black Widow
  c. Iron Man
  d. Hawkeye
  
  What's your choice: `,
  answer: "c",
}
var question3 = {
  question: `3. I surrender my taste buds to this beauty
  a. Cake
  b. Pani Puri
  c. 5 star choclate
  d. Ice Cream
  
  What's your choice: `,
  answer: "a",
}
var question4 = {
  question: `4. I binge watch them like it's the end of the world
  a. K-Drama
  b. American Sitcom
  c. Kannada Serial
  d. Amazon Prime Originals
  
  What's your choice: `,
  answer: "a",
}
var question5 = {
  question: `5. Do you believe if I say i'm non-vegetarian
  a. Yes
  b. No
  
  What's your choice: `,
  answer: "b",
}
var question6 = {
  question: `6. I have checklisted this in my bucket list
  a. Parasailing
  b. Sky-diving
  c. Paragliding
  d. Rafting
  
  What's your choice: `,
  answer: "a",
}
var question7 = {
  question: `7. I won't stop untill I visit these places
  a. Newyork, Disney Land, England
  b. Dubai, Canada, Switzerland
  c. Paris, South Korea, Maldives
  d. Singapore, Australia 
  
  What's your choice: `,
  answer: "c",
}
var question8 = {
  question: `8. Dog Person or Cat Person??
  a. woof woof
  b. Meow Meow
  c. Both
  d. None
  
  What's your choice: `,
  answer: "d",
}
var question9 = {
  question: `9. Do I have a sibbling?
  a. Yes, one younger brother
  b. No, a lone child
  c. Yes, one elder sister
  d, Yes, one younger sister
  
  What's your choice: `,
  answer: "d",
}
var question10 = {
  question: `10. What do you think i would choose
  a. Power of invisibility
  b. Teleporting Power
  c. Telepathy
  d. Super strength
  
  What's your choice: `,
  answer: "c",
}
var questionnaire=[question1, question2, question3, question4, question5, question6, question7, question8, question9, question10];

function validation(quest, choice){
  var userAnswer=readlineSync.question(chalk.magentaBright.bold(quest));
  if(userAnswer.toUpperCase() === choice.toUpperCase()){
    console.log("Aww!! You are right :)","\n");
    score++;
  }
  else {
    console.log("pfft!! That's wrong","\n");
  }
}

for(var i=0;i<questionnaire.length/2;i++){
  validation(questionnaire[i].question, questionnaire[i].answer);
}

if(score==5){
  console.log(chalk.magenta.bgWhite("Yay!! you got it all right, Let's move to Level 2"))
  for(var i=questionnaire.length/2;i<questionnaire.length;i++){
    validation(questionnaire[i].question, questionnaire[i].answer);
  }
  if (score < userRate){
  console.log(chalk.bgMagenta("You scored " +score +", so you dont know me as well as you thought!! Let's Catch up and know each other better :D "));
}
else if (score > userRate){
  console.log(chalk.bgMagenta("You scored " +score +", so you do know me better than you thought "));
}
else if (score === 10){
  console.log(chalk.bgMagenta("Yay!! you scored " +score +", so you do know me well :D"));
}
else{
  console.log(chalk.bgMagenta("You scored " +score +", you were right about how much you know me!!"));
}
}
else{
  console.log(center(chalk.bgMagenta("You scored " +score+". Play again & score 100% to go to Level 2"),80));
}
