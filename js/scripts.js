// Utility logic

let input = [2];

function countDown(fromNumber) {
  let array = [];
  array.unshift(fromNumber);
  let nextNumber = fromNumber - 1;
  while (nextNumber > 0) {
    array.unshift(nextNumber);
    nextNumber = nextNumber - 1;
  };
  return array;
};

// Business logic

function robogerize(int) {
  let input = parseInt(int);
  let outputArray = [];
  if (isNaN(input)) {
    return "Beep boop, not a number, neighbor. Please try again.";
  } else if (input === 0) {
    outputArray.unshift(input);
    return outputArray;
  } else if (input > 0) {
    outputArray.unshift(input);
    let newInput = input - 1;
    while (newInput >= 0) {
      outputArray.unshift(newInput)
      newInput = newInput - 1;
    };
  } else {
    return "I am a banana";
  };
  return outputArray;
};




// function robogerize(input) {
//   let output = [];
//   if (isNaN(input[0])) {
//     return "Beep boop, not a number, neighbor. Please try again.";
//   } else if (input[0] < 0) {
//     return output;
//   } else if (input[0] >= 0) {
//     output = new Array(input[0]);
//     for (i = input[0]; i <= input[0]; i--) {
//       output.unshift(input[0]);
//       input[0] = [input[0] - 1];
//       robogerize(input[0]);
//     };
//   } else {
//     return "I am a banana";
//   };
// };

// User interface logic