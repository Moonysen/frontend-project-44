import brainProgressionGame from '../index.js';
import { random } from '../usefulfunctions.js';

const descriptionGame = 'What number is missing in the progression?';

const numberOfPoints = 7;

const getArithmeticProgression = () => {
  const progression = [];
  let progressionNumbers = random(0, 20);
  const step = random(3, 5);

  for (let i = 0; i < numberOfPoints; i += 1) {
    progression.push(progressionNumbers);
    progressionNumbers += step;
  }
  return progression;
};

const getQuestionAndAnswer = () => {
  const progress = getArithmeticProgression();
  const index = random(0, progress.length);
  const correctAnswer = String(progress[index]);
  progress[index] = '..';
  const question = progress.toString().replace(/,/g, ' ');

  return [question, correctAnswer];
};

export default () => {
  brainProgressionGame(descriptionGame, getQuestionAndAnswer);
};
