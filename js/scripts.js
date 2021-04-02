// Utility logic

const input = [0];

// Business logic

function robogerize() {
  let inputStr = input.toString();
  let output = [];
  if (inputStr === "") {
    return output;
  } else if (input[0] === 0) {
    output.push(input[0]);
    return output;
  } else {
    return "I am a banana";
  };
};

// User interface logic