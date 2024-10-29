function repeatStringNumTimes(string, times) {
    var repeatString = "";

    if (times < 0) {
        return "ERROR";
      }

    while (times > 0) {
      repeatString += string;
      times--;
    }
    return repeatString;
  }
  repeatStringNumTimes("hey", 3);
  repeatStringNumTimes("hello", 10);
  repeatStringNumTimes("hi", 1);
  repeatStringNumTimes("bye", 0);
  repeatStringNumTimes("goodbye", -1);
  repeatStringNumTimes("", 10);
  



// Do not edit below this line
module.exports = repeatStringNumTimes;
