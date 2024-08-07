function oddAverage(numbers) {
  let sumNumber = [];

  for (const number of numbers) {
    if (number % 2 !== 0) {
        sumNumber.push(number);
    }
  
  }

  let total = 0;

  for(const sum of sumNumber){
        total = total + sum; 
  }
  const average = total / sumNumber.length;
  return average;
}

const averageResult = oddAverage([10, 20, 30, 45, 67, 54, 32, 34]);

console.log(averageResult);
