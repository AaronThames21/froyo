// Step 1: Prompt user for flavors
const input = prompt("Enter a list of froyo flavors (comma-separated):");

// Step 2: Split the input string into an array
const flavorsArray = input.split(",");

// Step 3: Clean the array
const cleanedFlavors = flavorsArray.map(flavor => flavor.trim().toLowerCase());

// Step 4: Create an empty object
const flavorCounts = {};

// Step 5–7: Loop and count each flavor
for (let flavor of cleanedFlavors) {
  if (flavorCounts[flavor]) {
    flavorCounts[flavor]++;
  } else {
    flavorCounts[flavor] = 1;
  }
}

// Step 8: Log the result
console.log("Froyo Order Summary:");
console.log(flavorCounts);
