import calcgame from '../index.js';
import { random } from '../usefulfunctions.js';

const descriptionGame = 'What is the result of the expression?';

const operSymbol = ['+', '-', '*'];

const getRandomSymbol = (symbol) => {
  const symbolLenght = symbol.length;
  const randomIndexOfArr = random(0, symbolLenght);
  const randomSymbol = symbol[randomIndexOfArr];
  return randomSymbol;
};

const arithmeticOperation = (symbol, firstValue, secondValue) => {
  switch (symbol) {
    case '+': return firstValue + secondValue;
    case '-': return firstValue - secondValue;
    case '*': return firstValue * secondValue;
    default: return null;
  }
};

const getQuestionAndAnswer = () => {
  const randomSymbol = getRandomSymbol(operSymbol);
  const firstNumber = random(0, 15);
  const secondNumber = random(0, 15);

  const question = `${firstNumber} ${randomSymbol} ${secondNumber}`;
  const correctAnswer = String(arithmeticOperation(randomSymbol, firstNumber, secondNumber));

  return [question, correctAnswer];
};

export default () => {
  calcgame(descriptionGame, getQuestionAndAnswer);
};
