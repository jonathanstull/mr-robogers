# _{Application Name}_

#### _{Brief description of application}, {Date of current version}

#### By _**{List of contributors}**_

## Description

_{This is a detailed description of your application. Give as much detail as needed to explain what the application does as well as any other information you want users or other developers to have.}_

## Setup/Installation Requirements

* Software requirements (internet browser, code editor, etc.)
1. Internet browser
2. A code editor like VSCode or Atom to view or edit the codebase

* Download/clone instructions
1. Download this repository onto your computer by clicking the 'code' button
2. Open the project folder.
3. Double-click the index.html to open it in your web browser

*Open via Bash/GitBash:
1. Clone this repository onto your computer: git clone {PUT_REPO_HERE}
2. Navigate into the {NAME_OF_DIRECTORY}  directory, and open in VSCode or preferred text editor code .
3. Open index.html in Chrome or preferred browser

To see my live website go to {GH_PAGES_LINK_HERE}!

_{Leave nothing to chance! You want it to be easy for potential users, employers and collaborators to run your app. Do I need to run a server? How should I set up my databases? Is there other code this application depends on? We recommend deleting the project from your desktop, re-cloning the project from GitHub, and writing down all the steps necessary to get the project working again.}_

## Known Bugs

* _Any known issues_
* _should go here_

## Specs

* Create an application that takes a number from a user and returns a range of numbers from 0 to the user input with the following exceptions **in this order of operations**:
* Numbers that contain 3: Replace all digits with "Won't you be my neighbor?"
* Numbers that contain 2: Replace all digits with "Boop!"
* Numbers that contain 1: Replace all digits with "Beep!"
* Include functionality that refreshes the form so that the user can input a number again _ad infinitum_
* Example: a user inputs the number 45
  * The application should return a list of values as a string or an array
  * The values should correspond with: 0, Beep!, Boop!, Won't you be my neighbor?, 4, 5, 6, 7, 8, 9, ... 40, Beep!, Boop!, Won't you be my neighbor, 44, 45


## Tests

Describe: robogerize(int);
  1. Test: "It returns an empty string when there is no input"
  Code:
  const input = [];
  createArray(int);
  Expected Output: "";

  2. Test: "It returns an empty array when there is no input"
  Code:
  const input = [];
  createArray(int);
  Expected Output: [];

  3. Test: "It returns an array with the number 0 when the input is 0"
  Code:
  const input = [0];
  createArray(int);
  Expected Output: [0]

  4. Test: "It returns an array with the number 0 and 1 when the input is 1"
  Code:
  const input = [1];
  createArray(int);
  Expected Output: [0, 1]

  5. Test: "It returns NaN when the input is NaN"
  Code:
  let input = ["NaN"]
  createArray(int);
  Expected Output: NaN

  6. Test: "It returns array [0, 1, 2] when the input is the string 2"
  Code:
  let input = 2;
  createArray(int);
  Expected Output: [0, 1, 2]

  7. Test: "It returns an array that counts to zero from any integer input"
  Code:
  createArray(int);
  Expected Output: (int) [0, ... , int - 1, int]

  8. Test: "It returns converts the number 3 to 'Won't you be my neighbor?'"
  Code:
  convertArray(array);
  Expected Output: (int) [0, 1, 2, "Won't you be my neighbor?", ... , 13, ... , int - 1, int]

  9. Test: "It converts any number containing 3 to 'Won't you be my neighbor?'"
  Code:
  convertArray(array);
  Expected Output: (int) [0, 1, 2, "Won't you be my neighbor?", ... , 12, "Won't you be my neighbor?", 14, ... , int - 1, int]

  10. Test: "It converts any number containing 2 to 'Boop!'"
  Code:
  convertArray(array);
  Expected Output: (int) [0, 1, "Boop!", "Won't you be my neighbor?", ... , 12, "Won't you be my neighbor?", 14, ... , int - 1, int]

  11. Test: "It returns an array that converts any number containing 1 to 'Beep!'"
  Code:
  convertArray(array);
  Expected Output: (int) [0, "Beep!", "Boop!", "Won't you be my neighbor?", ... , "Beep!", "Won't you be my neighbor?", "Beep!", ... , int - 1, int]

  12. Test: "It calls createArray and convertArray and returns array with Mr. Robogers' language"
  Code:
  robogerize(int);
  Expected Output: (int) [0, "Beep!", "Boop!", "Won't you be my neighbor?", ... , "Beep!", "Won't you be my neighbor?", "Beep!", ... , int - 1, int]

  13. Test: "It calls robogerize and returns a string with converted numbers"
  Code:
  robogerize(int);
  Expected Output: "0, Beep! Boop! Won't you be my neighbor? ... Beep! Won't you be my neighbor? Beep! ... , int - 1, int"

  14. Test: "It displays Mr. Robogers' language on a webpage"
  Code:
  robogerize(int);
  Expected Output: "0, Beep! Boop! Won't you be my neighbor? ... Beep! Won't you be my neighbor? Beep! ... , int - 1, int"

## Technologies Used

* _List all_
* _the major technologies_
* _you used in your project_
* _here_

## Open Source statement



## MIT License

Copyright (c) 2021 Jonathan Stull

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

_{Let people know what to do if they run into any issues or have questions, ideas or concerns.  Encourage them to contact you or make a contribution to the code.}_

## Contact Information

_{Add your contact information here.}_