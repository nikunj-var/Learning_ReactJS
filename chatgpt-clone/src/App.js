import "./App.css";
import OptionSelection from "./Components/OptionSelection";
import arrayItems from "./AIOptions/index";
import Translation from "./Components/Translation";
import { useState } from "react";
import { NlpManager } from "node-nlp"; 

function App() {
  const [option, setoption] = useState({});
  const selectoption = (option) => {
    setoption(option);
  };

  const [input, setInput] = useState("");
  const [result, setResult] = useState("");
  const manager = new NlpManager();

  // Add training data for the NLP manager (you can customize this)
  manager.addDocument("en", "tell me about yourself", "greeting.about");

  const doStuff = async () => {
    console.log("Input:", input);

    // Process input using nlp.js
    const response = await manager.process("en", input);

    // Handle response (you can customize this)
    setResult(JSON.stringify(response, null, 2));
  };
   
  return (
    <div className="App">
      {Object.values(option).length === 0 ? (
        <OptionSelection arrayItem={arrayItems} selectoption={selectoption} />
      ) : (
        <Translation doStuff={doStuff} setInput={setInput} result={result} />
      )}
    </div>
  );
}

export default App;

// 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
