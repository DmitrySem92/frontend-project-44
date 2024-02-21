// src/logic/progression-logic-helper.js

const hideElementInProgression = (progression) => {
  const hiddenIndex = Math.floor(Math.random() * progression.length);
  const hiddenValue = progression[hiddenIndex];
  const progressionWithHidden = [...progression];
  progressionWithHidden[hiddenIndex] = '..';

  return { hiddenValue, progression: progressionWithHidden };
};

export default hideElementInProgression;
