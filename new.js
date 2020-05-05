// For a list of n - 1 integers write a function to find missing integer

let testArr = [1,2,3,5]

function findMissingInt(input) {
  let sumArr = 0;
  let sumTotal = input.length +1;

  for (let i = 0; i < input.length; i++) {
    sumArr += input[i];
    sumTotal += i+1
  }

  return sumTotal - sumArr;
}