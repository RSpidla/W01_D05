// PROBLEM - A local research group has tasked you with building their new web application! They want to be able to input numerical data and sort it accordingly. For this application, you're going to need a custom module for sorting data.
    // Create a module that exports a function that takes a number as a parameter and stores it in a list. The list should not be accessible from outside the module.
    // Export another function that returns a version of the data list that is sorted in ascending order. The function you use to sort the data correctly should not be accessible from outside the module.
    // Implement a Node.js script that imports the functionality of your module, adds at least 5 different data points to the module's data list, and outputs the sorted list.

// Create array with 5 different data points
let list = [21, 12, 23, 32, 45, 54, 29, 94, 16, 09, 222];

// Declare the function 'AddToList'
function addToList(num) {
    list = list.concat(num);
}

// Declare the function 'sortList'
function sortList() {
    return list.sort(function(a, b) {
        return a - b;
    });
};

// Exports functions to module
module.exports = { addToList, sortList };