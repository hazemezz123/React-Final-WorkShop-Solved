import { HotBeverage } from "./HotBeverage";

export class Coffee extends HotBeverage {
  brew() {
    console.log("Dripping coffee through filter...");
  }
  addCondiments() {
    console.log("Adding sugar and milk...");
  }
}
