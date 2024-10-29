function sumAll(a, b) {

    if (!Number.isInteger(a) || !Number.isInteger(b)) {
        return "ERROR";
      }
    // Ensure the inputs are positive integers
    if (a < 0 || b < 0) return "ERROR";
    
    // Determine the smaller and larger number
    const start = Math.min(a, b);
    const end = Math.max(a, b);
    
    // Initialize the sum variable
    let sum = 0;
  
    // Loop from start to end and calculate the sum
    for (let i = start; i <= end; i++) {
      sum += i;
    }
  
    return sum; // Return the final sum
  }

  sumAll(1,4);
  sumAll(1,4000);
  sumAll(123,1);
  sumAll(-10,4);
  sumAll(2.5, 4);
  sumAll(10, "90");
  sumAll(10, [90, 1]);

// Do not edit below this line
module.exports = sumAll;
