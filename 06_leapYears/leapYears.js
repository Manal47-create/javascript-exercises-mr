function leapYears(year) {
    // Check if the year is divisible by 400 (leap year)
    if (year % 400 === 0) {
      return true;
    }
    // If not divisible by 400, check if it’s divisible by 100 (not a leap year)
    if (year % 100 === 0) {
      return false;
    }
    // If not divisible by 100, check if it’s divisible by 4 (leap year)
    if (year % 4 === 0) {
      return true;
    }
    // Otherwise, it’s not a leap year
    return false;
  }

  leapYears(1996);
  leapYears(1997);
  leapYears(34992);
  leapYears(1900);
  leapYears(1600);
  leapYears(700);

// Do not edit below this line
module.exports = leapYears;
