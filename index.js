// Code your solution here
// findMatching() - returns all drivers that match the passed in name
function findMatching(drivers, name) {
  return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase());
}

// fuzzyMatch() - returns drivers that match the beginning letters of the passed in name
function fuzzyMatch(drivers, letters) {
  const lengthOfLetters = letters.length;
  return drivers.filter(driver => driver.slice(0, lengthOfLetters) === letters);
}

// matchName() - accesses the data structure to check if the name matches
function matchName(drivers, name) {
  return drivers.filter(driver => driver.name === name);
}

module.exports = {
  findMatching,
  fuzzyMatch,
  matchName
};
