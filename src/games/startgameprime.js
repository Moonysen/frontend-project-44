import brainPrime from '../index.js';
import { random } from '../usefulfunctions.js';

const descriptionGame = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrimeNumber = (randomNumber) => {
  if (randomNumber === 0 && randomNumber === 1) {
    return 'no';
  } if (randomNumber === 2) {
    return 'yes';
  }
  for (let i = 2; i < randomNumber; i += 1) {
    if (randomNumber % i === 0) {
      return 'no';
    }
  }
  return 'yes';
};

const getQuestionAndAnswer = () => {
  const question = random(0, 30);
  const correctAnswer = isPrimeNumber(question);

  return [question, correctAnswer];
};

export default () => {
  brainPrime(descriptionGame, getQuestionAndAnswer);
};
