var DEFAULT_NAME = "timer";

export default class {
  constructor(timeAgragator, name) {
    if (name === undefined){
      this.name = DEFAULT_NAME;
    } else {
      this.name = name;
    }
    
    this.timeAgragator = timeAgragator;
  }
  start() {
    this.start_time = process.hrtime();
    this.done = false;
  }
  stop() {
    if (this.start_time === undefined || this.done){
      return;
    }
    this.timeAgragator.addTime(process.hrtime(this.start_time), this.name);
    this.done = true;
  }
}
