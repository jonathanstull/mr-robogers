// Utility logic

let input = [1];

// Business logic

function robogerize() {
  let inputStr = input.toString();
  let output = [];
  if (inputStr === "") {
    return output;
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