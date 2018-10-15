// Question 1
room1 = [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20];
// first let's make function to sort the array
let numSort = (arr) => arr.sort((a, b) => a - b);
// then we will make a variable to store the sorted arr
let sortedArr = numSort(room1);

// second we will make a function to loop and group every duplicate value
// into individual array
const cleanRoom = (sortedArr) => {
    // and we will make another variable to store our temporary array
    // that we will use in that function
    let cleaned = [[sortedArr[0]]];
    // now we will loop through our array
    // and we will use if condition to group equal values
    for (let i = 0; i < sortedArr.length-1; i++) {
        if (sortedArr[i+1] === sortedArr[i]){
            cleaned[cleaned.length - 1].push(sortedArr[i+1])
        }else {
            cleaned.push([sortedArr[i+1]])
        }
    }
    return cleaned;
};

let before = cleanRoom(sortedArr);
// the last step is make a function to get one array
// with sub arrays of repeated values
const answer = before.reduce(
    (accumulator, array) => {
        if (array.length === 1){
            return accumulator.concat(array);
        }else {
            accumulator.push(array);
        }
        return accumulator},[]
);

console.log(answer);

// Bonus Question
room2 = [1, "2", "3", 2, 5, 3, "1", 6, "6"];
// first we will divide our array to two arrays number array and string array
const numArray = room2.filter(ele => typeof ele === 'number');
const strArray = room2.filter(ele => typeof ele === 'string');

// second we will sort our number array using our numsort function
// that we use above
const sortedNumArray = numSort(numArray);
// and we will sort our string array using simple sort() method
const sortedStrArray = strArray.sort();
// last step
// we will combine our number array and our string array into one final array
const finalArray = [].concat([sortedNumArray],[sortedStrArray]);


