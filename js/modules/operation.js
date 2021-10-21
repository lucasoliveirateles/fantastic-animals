export default class Operation {
  constructor(operation, activeClass) {
    this.operation = document.querySelector(operation);
    this.activeClass = activeClass;
  }

  operationData() {
    this.daysWeek = this.operation.dataset.week.split(',').map(Number);
    this.timeWeek = this.operation.dataset.time.split(',').map(Number);
  }

  dataNow() {
    this.dateNow = new Date();
    this.daysNow = this.dateNow.getDay();
    this.timeNow = this.dateNow.getUTCHours() - 3;
  }

  isOpen() {
    const semanaAberto = this.daysWeek.indexOf(this.daysNow) !== -1;
    const horarioAberto = (this.timeNow >= this.timeWeek[0]
      && this.timeNow < this.timeWeek[1]);
   
      return semanaAberto && horarioAberto;
  }

  activeOpen() {
    if (this.isOpen()) {
      this.operation.classList.add(this.activeClass);
    }
  }

  init() {
    if (this.operation) {
      this.operationData();
      this.dataNow();
      this.activeOpen();
    }
    
    return this;
  }
}
