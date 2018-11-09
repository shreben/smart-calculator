class SmartCalculator {
  constructor(initialValue) {
    this.initialValue = initialValue;
    // your implementation
  }

  add(number) {
    return this.initialValue + number;
    // your implementation
  }
  
  subtract(number) {
    return this.initialValue - number;
    // your implementation
  }

  multiply(number) {
    return this.initialValue * number;
    // your implementation
  }

  devide(number) {
    return this.initialValue / number;
    // your implementation
  }

  pow(number) {
    return Math.pow(this.initialValue, number);
    // your implementation
  }
}

module.exports = SmartCalculator;
