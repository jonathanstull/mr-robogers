// Utility logic

let input = [1];

// Business logic

function robogerize(input) {
  let output = [];
  if (isNaN(input[0])) {
    return "Beep boop, not a number, neighbor. Please try again.";
  } else if (input[0] === 0) {
    output.push(input[0]);
    return output;
  } else if (input[0] >= 1) {
    output.push(input[0]);
    for (i = 0; i < input.length; i += 1) {
      output.push(input[i] - 1);
      return output.reverse();
    };
  } else {
    return "I am a banana";
  };
};

// User interface logic