// code your solution here
function saturdayFun(activity= 'roller-skate') {
    return `This Saturday, I want to ${activity}!`
    
}
saturdayFun();
function mondayWork(activity= 'go to the office') {
    return `This Monday, I will ${activity}.`    
}

wrapAdjective('*');
function wrapAdjective(wrapper = "*") {
    return function(adjective = "special") {
      return `You are ${wrapper}${adjective}${wrapper}!`;
    };
  }
  const wrapWithStar = wrapAdjective("*");
console.log(wrapWithStar("awesome")); // "*awesome*"

const wrapWithPipes = wrapAdjective("||");
console.log(wrapWithPipes("amazing")); // "||amazing||"

console.log(wrapAdjective()("cool")); // "*cool*" (default wrapper)
