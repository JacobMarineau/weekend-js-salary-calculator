# Salary Calculator

[Project Instructions](./INSTRUCTIONS.md), this line may be removed once you have updated the README.md

## Description

This project is designed to take in salaries then return a new number of all the added salaries to report the earnings of the month.

HTML:

Contains the inputs for the form and the table heads.

CSS:

Contains the styles for the HTML containers, forms, tables and other small styles

JS:

Contains functions that allow the form to work properly

function grabValues()
Grabs the values from the input forms then appends that inputted data to the table by creating new table rows to contain the data

function removeRow()
Passes in the click event to find which row was clicked than deletes that row
Also runs the subtract function to remove the added on salary

function addSalaries()
Grabs the salary value, checks if its a !NaN then changes the h3 in the HTML to reflect the newly added amount

function subtractSalaries()
Grabs the salary value of the deleted row than checks if its a !NaN than changes the h3 in the HTML to reflect the newly subtracted amount

Additional README details can be found [here](https://github.com/PrimeAcademy/readme-template/blob/master/README.md).
