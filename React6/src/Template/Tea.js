import { HotBeverage } from "./HotBeverage";

export class Tea extends HotBeverage {
  brew() {
    console.log("Steeping the tea...");
  }
  addCondiments() {
    console.log("Adding lemon...");
  }
}
 
