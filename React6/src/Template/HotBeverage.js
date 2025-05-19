export class HotBeverage {
  prepare() {
    this.boilWater();
    this.brew();
    this.pourInCup();
    this.addCondiments();
  }

  pourInCup() {
    console.log("Pouring into cup...");
  }
  boilWater() {
    console.log("Boiling water...");
  }
  brew() {
    throw new Error("the function must be overridden in the subclasses");
  }
  addCondiments() {
    throw new Error("the function must be overridden in the subclasses");
  }
}
