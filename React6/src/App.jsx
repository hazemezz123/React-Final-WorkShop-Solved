import React from "react";
import { Tea } from "./Template/Tea.js";
import { Coffee } from "./Template/Coffee.js";
import { useEffect } from "react";
function App() {
  useEffect(() => {
    const tea = new Tea();
    console.log("preparing the tea");
    tea.prepare();
    console.log("preparing the Coffee");
    const coffee = new Coffee();
    coffee.prepare();
  }, []);
  return (
    <div>
      <h1 className="text-center display-1 my-5">TemplateMethod Pattern</h1>
      <pre className="text-center font-monospace">
        <code>check the console !</code>
      </pre>
    </div>
  );
}

export default App;
