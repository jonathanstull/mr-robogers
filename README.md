# Mr. Robogers

### A cute webpage to translate numbers into text, 4.5.21

_By Jonathan Stull_

## **Description**

This web application is a final project for week III of Epicodus' full-stack C#/.NET cohort in March of 2021. It translates user input, an integer, into a string of text that summarizes, as briefly as the user wants, the current status of Mr. Robogers. Sometimes that isn't so brief, indeed. In any event, Mr. Robogers has a lot to say, and this webpage gives it a way to communicate with its creators.

## **Setup/Installation Requirements**

* Software requirements (internet browser, code editor, etc.)
  1. Internet browser
  2. A code editor like VSCode or Atom to view or edit the codebase

* Download/clone instructions
  1. Download this repository onto your computer by clicking the 'code' button
  2. Open the project folder.
  3. Double-click the index.html to open it in your web browser

* Open via Bash/GitBash:
  1. Clone this repository onto your computer: git clone [mr-robogers](https://github.com/jonathanstull/mr-robogers.git)
  2. Navigate into the ~/mr-robogers  directory, and open in VSCode or preferred text editor code .
  3. Open index.html in Chrome or preferred browser

To see my live website, go to [GitHub Pages](https://jonathanstull.github.io/mr-robogers/)!

## **Known Bugs**

* None

## **Specs**

* Create an application that takes a number from a user and returns a range of numbers from 0 to the user input with the following exceptions **in this order of operations**:
* Numbers that contain 3: Replace all digits with "Won't you be my neighbor?"
* Numbers that contain 2: Replace all digits with "Boop!"
* Numbers that contain 1: Replace all digits with "Beep!"
* Include functionality that refreshes the form so that the user can input a number again _ad infinitum_
* Example: a user inputs the number 45
  * The application should return a list of values as a string or an array
  * The values should correspond with: 0, Beep!, Boop!, Won't you be my neighbor?, 4, 5, 6, 7, 8, 9, ... 40, Beep!, Boop!, Won't you be my neighbor, 44, 45

## **Tests**

Describe: robogerize(int);
  1. Test: "It returns an empty string when there is no input"<br>
  Code:<br>
  const input = [];<br>
  createArray(int);<br>
  Expected Output: "";<br>

  2. Test: "It returns an empty array when there is no input"<br>
  Code:<br>
  const input = [];<br>
  createArray(int);<br>
  Expected Output: [];<br>

  3. Test: "It returns an array with the number 0 when the input is 0"<br>
  Code:<br>
  const input = [0];<br>
  createArray(int);<br>
  Expected Output: [0]<br>

  4. Test: "It returns an array with the number 0 and 1 when the input is 1"<br>
  Code:<br>
  const input = [1];<br>
  createArray(int);<br>
  Expected Output: [0, 1]<br>

  5. Test: "It returns NaN when the input is NaN"<br>
  Code:<br>
  let input = ["NaN"]<br>
  createArray(int);<br>
  Expected Output: NaN<br>

  6. Test: "It returns array [0, 1, 2] when the input is the string 2"<br>
  Code:<br>
  let input = 2;<br>
  createArray(int);<br>
  Expected Output: [0, 1, 2]<br>

  7. Test: "It returns an array that counts to zero from any integer input"<br>
  Code:<br>
  createArray(int);<br>
  Expected Output: (int) [0, ... , int - 1, int]<br>

  8. Test: "It returns converts the number 3 to 'Won't you be my neighbor?'"<br>
  Code:<br>
  convertArray(array);<br>
  Expected Output: (int) [0, 1, 2, "Won't you be my neighbor?", ... , 13, ... , int - 1, int]<br>

  9. Test: "It converts any number containing 3 to 'Won't you be my neighbor?'"<br>
  Code:<br>
  convertArray(array);<br>
  Expected Output: (int) [0, 1, 2, "Won't you be my neighbor?", ... , 12, "Won't you be my neighbor?", 14, ... , int - 1, int]<br>

  10. Test: "It converts any number containing 2 to 'Boop!'"<br>
  Code:<br>
  convertArray(array);<br>
  Expected Output: (int) [0, 1, "Boop!", "Won't you be my neighbor?", ... , 12, "Won't you be my neighbor?", 14, ... , int - 1, int]<br>

  11. Test: "It returns an array that converts any number containing 1 to 'Beep!'"<br>
  Code:<br>
  convertArray(array);<br>
  Expected Output: (int) [0, "Beep!", "Boop!", "Won't you be my neighbor?", ... , "Beep!", "Won't you be my neighbor?", "Beep!", ... , int - 1, int]<br>

  12. Test: "It calls createArray and convertArray and returns array with Mr. Robogers' language"<br>
  Code:<br>
  robogerize(int);<br>
  Expected Output: (int) [0, "Beep!", "Boop!", "Won't you be my neighbor?", ... , "Beep!", "Won't you be my neighbor?", "Beep!", ... , int - 1, int]<br>

  13. Test: "It calls robogerize and returns a string with converted numbers"<br>
  Code:<br>
  robogerize(int);<br>
  Expected Output: "0, Beep! Boop! Won't you be my neighbor? ... Beep! Won't you be my neighbor? Beep! ... , int - 1, int"<br>

  14. Test: "It displays Mr. Robogers' language on a webpage"<br>
  Code:<br>
  robogerize(int);<br>
  Expected Output: "0, Beep! Boop! Won't you be my neighbor? ... Beep! Won't you be my neighbor? Beep! ... , int - 1, int"<br>

## **Technologies Used**

* HTML/CSS
* JavaScript
* jQuery
* Markdown
* VS Code
* Google Chrome/Mozilla Firefox

## **MIT License**

Copyright (c) 2021 Jonathan Stull

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

## **Contact Information**

Interested parties should contact Jonathan at <jonathan.d.stull@gmail.com>.