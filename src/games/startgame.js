/* eslint-disable linebreak-style */
import brainEvenGame from '../index.js';
import {
  random,
  isEven,
} from '../usefulfunctions.js';

const descriptionGame = 'Answer "yes" if the number is even, otherwise answer "no".';

const getQuestionAndAnswer = () => {
  const question = random(0, 50);
  const correctAnswer = isEven(question) ? 'yes' : 'no';

  return [question, correctAnswer];
};

export default () => {
  brainEvenGame(descriptionGame, getQuestionAndAnswer);
};
