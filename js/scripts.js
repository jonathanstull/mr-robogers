// Utility logic

const outputArray = [];

function intArray(int) {
  let input = parseInt(int);
  if (isNaN(input)) {
    return "Beep! Boop! Not a number, neighbor. Please try again.";
  } else if (input >= 0) {
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

// Business logic

function robogerize(array) {
  array.forEach(function(int) {
    if (int.toString().includes(3)) {
      array.splice(int, 1, "Won't you be my neighbor?");
    };
  });
  return array;
};

// User interface logic