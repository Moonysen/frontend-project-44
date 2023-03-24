import gcdgame from '../index.js';
import { random } from '../usefulfunctions.js';

const descriptionGame = 'Find the greatest common divisor of given numbers';

const getGcd = (firstValue, secondValue) => {
  if (firstValue === 0) {
    return secondValue;
  }
  return getGcd(secondValue % firstValue, firstValue);
};

const getQuestionAndAnswer = () => {
  const firstNumber = random(0, 50);
  const secondNumber = random(0, 50);

  const question = `${firstNumber} ${secondNumber}`;
  const correctAnswer = String(getGcd(firstNumber, secondNumber));

  return [question, correctAnswer];
};

export default () => {
  gcdgame(descriptionGame, getQuestionAndAnswer);
};
