// Utility logic

let outputArray = [];
let monologue;

function convertArray(array) {
  array.forEach(function(int) {
    if (int.toString().includes(3)) {
      array.splice(int, 1, "Won't you be my neighbor?");
    } else if (int.toString().includes(2)) {
      array.splice(int, 1, "Boop!");
    } else if (int.toString().includes(1)) {
      array.splice(int, 1, "Beep!");
    };
  });
  return array;
};

function robogersArray(int) {
  let input = parseInt(int);
  if (isNaN(input) === true) {
    return outputArray = ["Beep! Boop! Not a number, neighbor. Please try again."];
  } else if ((isNaN(input) === false) && (input >= 0)) {
    outputArray.unshift(input);
    let newInput = input - 1;
    while (newInput >= 0) {
      outputArray.unshift(newInput)
      newInput = newInput - 1;
    };
  };
  return convertArray(outputArray);
};

// Business logic

function robogerize(int) {
  robogersArray(int);
  return outputArray.join(" ");
};

// User interface logic

$(document).ready(function() {
  $("#robogerize").submit(function(event) {
    event.preventDefault();
    let int = $("#int").val();
    const monologue = robogerize(int);

    $("#monologue").text(monologue);

    $("#monologue").show();
  });
});