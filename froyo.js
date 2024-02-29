// The user is prompted for froyo flavors upon entering the website.
// The Code below receives User Input (Froyo Flavors sperated by commas)
const userInputFroyo = prompt(
    "Please enter Froyo flavors separted by commas.ᐟ.ᐟ.ᐟ"
)

// Split the string of flavors into an array of strings.
// The ".split" method splits a string into an array of 'substrings'.
const flavorArray = userInputFroyo.split(",");


// Create a function that returns the Object.
function countFlavors(array) {
    
    // Create an Object used to keep count of how many orders there are of each flavor.
    // I created an empty Object for the user input to be plugged into.
    // User Input being the array of flavors given.
    const froyoObject = {};
   
    // Create a loop that is used to iterate through the array of flavors.
    // 'initialization' begins at '0'.
    // 'stopping condition' is 'i < array.length'. The loop will continue until the full length of the array has been looped through.
    // 'iteration statement', iterator is incremented by one everytime loop completes.
    for (i = 0; i < array.length; i++) {
        // 'if statement' creates the Key / Value pair if non-existent within object.
        // If the string is not held within 'froyoObject', the new key is added and given a value of '1'.
        if (froyoObject[array[i]] === undefined) {
          froyoObject[array[i]] = 1;
          // 'else statement' adds to the value of an already existing Key.
          // if key exists within 'froyoObject', the key's value is incremented by one.
        } else {
          froyoObject[array[i]] += 1;
        }
    }
    // Code below then returns the data stored within the object as a table.
    console.table(froyoObject);
};

countFlavors(flavorArray);