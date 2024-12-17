// https://www.codewars.com/kata/grasshopper-messi-goals-function/train/javascript
function goals(laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
  const totalGoalsCount = laLigaGoals + copaDelReyGoals + championsLeagueGoals;
  return totalGoalsCount;
}

// https://www.codewars.com/kata/55685cd7ad70877c23000102/train/javascript
function makeNegative(num) {
  return num > 0 ? -num : num;
}

// https://www.codewars.com/kata/grasshopper-terminal-game-move-function/train/javascript
function move(position, roll) {
  const newPosition = position + roll * 2;
  return newPosition;
}

// https://www.codewars.com/kata/grasshopper-personalized-message/train/javascript
function greet(name, owner) {
  if (name === owner) {
    return "Hello boss";
  } else {
    return "Hello guest";
  }
}

// https://www.codewars.com/kata/keep-hydrated-1/train/javascript
function litres(time) {
  //return Math.floor(time * 0.5)
  return (time * 0.5) | 0;
}

// https://www.codewars.com/kata/555086d53eac039a2a000083/train/javascript
function lovefunc(flower1, flower2) {
  return flower1 % 2 !== flower2 % 2;
}
