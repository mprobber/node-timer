function median(values){
  values.sort(function(a, b){return a - b;});
  if (values.length === 0){
    return;
  }
  if (values.length % 2 === 0){
    return (values[(values.length / 2) - 1] + values[(values.length / 2)]) / 2;
  }
  return values[Math.floor(values.length / 2)];
}

export default class {
  constructor() {
    this.numbers = {};
  }

  _addToBucket(n, b){
    if (this.numbers[b] === undefined){
      this.numbers[b] = [];
    }
    this.numbers[b].push(n);
    if (this.numbers[b].length % 100 === 0){
      var med = median(this.numbers[b]);
      this._addToBucket(med, b * 100);
      delete this.numbers[b];
    }
  }
  addNumber(n) {
    this._addToBucket(n, 1);
  }
  estimateMedian() {
    var allNumbers = [];
    for (let reps of Object.keys(this.numbers)){
      for (let i = 0; i < reps; i++) {
        for (let med of this.numbers[reps]){
          allNumbers.push(med);
        }
      }
    }
    return median(allNumbers);
  }
}
