/* eslint-disable linebreak-style */
import readlineSync from 'readline-sync';

const roundsCount = 3;
const random = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const isEven = (number) => number % 2 === 0;

export default () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);

  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let i = 0; i < roundsCount; i += 1) {
    const question = random(0, 50);
    const correctAnswer = isEven(question) ? 'yes' : 'no';
    console.log(`Question: ${question}`);
    const playerAnswer = readlineSync.question('You answer: ');

    if (correctAnswer === playerAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${playerAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}.'`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}`);
};
