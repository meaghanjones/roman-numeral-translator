# Roman Numeral Converter

#### By Meaghan Jones and Brett New

## Description
This program translates Roman numerals to numbers. 

## Specs
-This program should translate all the Roman numerals to numbers.
  -Example Input: "VIXV"
  -Example Output: "5","1","10","5" <br>

-This program should add the number that is in the last place to the total.
  -Example Input: "5"
  -Example Output: "5" <br>

-If the number in the second-to-last placeholder is greater than or equal to the number in the last place, the program should add this to the total.
  -Example Input: "VI"
  -Example Output: "6" <br>

-If the number in the second-to-last placeholder is less than the number in the last place, the program should subtract this from the total.
  -Example Input: "IV"
  -Example Output: "4" <br>

-If the number in the third-to-last placeholder is less than the total of the last two numbers, the program should subtract this from the total.
  -Example Input: "IVV"
  -Example Output: "9"<br>

-If the number in the third-to-last placeholder is greater than the total of the last two numbers, the program should add this to the total.
  -Example Input: "VVI"
  -Example Output: "11"<br>

-If the number in the fourth-to-last placeholder is greater than the total of the last three numbers, the program should add this to the total.
  -Example Input: "VVVV"
  -Example Output: "20"<br>

-If the number in the fourth-to-last placeholder is less than the total of the last three numbers, the program should subtract this to the total.
  -Example Input: "VVVV"
  -Example Output: "20"<br>

-If a non roman numeral is entered than the program should return the message "Please enter a single word with no spaces".
  -Example Input: "e"
  -example output: "Please enter a single word with no spaces"<br>


## Setup/Installation Requirements

To create your own template repository on github

* Clone the github repository using the git clone command from /Desktop
* Create a new repository on github to keep your template
* Using git remote add pair the clone on your desktop with your new repository
* Add, commit, and push, and then you'll have your own copy of the template to do with as you wish


## Known Bugs

None.  


## Technologies Used

* Bootstrap
* JQuery

### License

Licensed under the MIT License

Copyright (c) 2016 **Meaghan and Brett**
