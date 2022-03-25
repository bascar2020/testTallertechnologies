//1 - Non-Constructible Change
/* Given an array of positive integers representing the values of coins in your possession, write a function that returns the minimum amount of change (the minimum sum of money) that you CANNOT create. The given coins can have any positive integer value and aren't necessarily unique (i.e., you can have multiple coins of the same value). */

const nonConstructibleChange = (arr) => {
    arr.sort((a,b) => a - b);
    // console.log(arr)
    let currentValue = 0;
    for (let coin of arr) {
		    //console.log("coin before", coin);
        if (coin > currentValue + 1) return currentValue + 1;        
        currentValue += coin;
				// console.log("currentValue", currentValue)
        //console.log("coin after", coin);
     
    }
    return currentValue + 1;
}

console.log(nonConstructibleChange([5, 7, 1, 1, 2, 3, 22]))
 
const testCasesA = {
  test1 : [5, 7, 1, 1, 2, 3, 22],
  test2 : [1, 1, 1, 1, 1],
  test3 : [1, 5, 1, 1, 1, 10, 15, 20, 100],
  test4 : []
}

for (const test in testCasesA) {
  console.log(`${test}: ${testCasesA[test]}`);
  console.log(nonConstructibleChange(testCasesA[test]))
}


/* 2 - Sorted Squared Array
Write a function that takes in a non-empty array of integers that are sorted in ascending order and returns a new array of the same length with the squares of the original integers also sorted in ascending order. */

const sortedSquaredArray = (arr) => {
  const square = arr.map((num) => num*num);
  return square.sort((a,b) => a - b);
}

const testCasesB = {
  test1 : [1, 2, 3, 5, 6, 8, 9],
  test2 : [-10, -5, 0, 5, 10],
  test3 : [-2, -1],
  test4 : []
}

for (const test in testCasesB) {
  console.log(`${test}: ${testCasesB[test]}`);
  console.log(sortedSquaredArray(testCasesB[test]))
} 
