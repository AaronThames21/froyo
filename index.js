// Step 1: prompt the user for flavors
const input = prompt("Enter a list of froyo flavors (comma-separated):");

// Step 2: split the input string into an array
const flavorsArray = input.split(",");

// Step 3: clean the array
const cleanedFlavors = flavorsArray.map(flavor => flavor.trim().toLowerCase());

// Step 4: create an empty object
const flavorCounts = {};

// Step 5–7: loop and count each flavor
for (let flavor of cleanedFlavors) {
  if (flavorCounts[flavor]) {
    flavorCounts[flavor]++;
  } else {
    flavorCounts[flavor] = 1;
  }
}

// Step 8: log the result
console.log("Froyo Order Summary:");
console.log(flavorCounts);
