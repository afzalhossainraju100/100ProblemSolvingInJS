//Problem 2 — Contains Duplicate
//Return true if any value appears at least twice.
//is the duplicate available in the array
function containsDuplicate(nums){
    const set = new Set(nums);
    console.log(findDuplicates(nums));
    return set.size !== nums.length;

}
//the duplicate values in the array
function findDuplicates(nums) {
  const seen = new Set();
  const duplicates = new Set();
  for (let num of nums) {
    if (seen.has(num)) {
      duplicates.add(num);
    } else {
      seen.add(num);
    }
  }
  return [...duplicates];
}




console.log(containsDuplicate([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,14,15]));