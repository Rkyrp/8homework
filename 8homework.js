//1задание
function capitalizeStrings(strings) {
    return strings.map(str => str[0].toUpperCase() + str.slice(1).toLowerCase());
  }
  const words = ["apple","banaNA","kiWi","ORANGE"];
  const capitalizedStrings = capitalizeStrings(words);
console.log(capitalizeStrings(words));
//2задание
function findCommonElements(arr1, arr2) {
    const set2 = new Set(arr2);
    return arr1.filter(element => set2.has(element));
  }
  const array1 = [1, 2, 3, 4, 5];
  const array2 = [3, 4, 5, 6, 7];
  const commonElements = findCommonElements(array1, array2);
  console.log(commonElements);
  
  //3задание
  function analyzeArray(numbers) {
    const sum = numbers.reduce((acc, num) => acc + num, 0);
    const average = sum / numbers.length;
    const min = Math.min(...numbers);
    const max = Math.max(...numbers);
    return {
      sum: sum,
      average: average,
      min: min,
      max: max
    };
  }
  const inputNumbers = [1, 2, 3, 4, 5];
  const analysis = analyzeArray(inputNumbers);
  console.log(analysis); 
  
