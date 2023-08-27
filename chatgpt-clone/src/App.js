import "./App.css";
import OptionSelection from "./Components/OptionSelection";
import arrayItems from "./AIOptions/index";
import Translation from "./Components/Translation";
import { useState } from "react";
import { Configuration, OpenAIApi } from "openai";
import OpenAI from "openai";
import ChatComponent from "./Components/CheckApi";

function App() {
    const [option, setoption] = useState({});
    const selectoption = (option) => {
      setoption(option);
    };
    const [input, setInput] = useState("");
    const [result, setResult] = useState("");
    const doStuff = async () => {
      console.log("Input:", input);
      const message = [
        { role: "system", content: "You are a helpful assistant." },
        { role: "user", content: input },
      ];

      const requestOptions = {
        ...option,
        messages: message,
      };

      const response = await openai.chat.completions.create(requestOptions);
      setResult(response.data.choices[0].text);
      console.log("Result", result);
    };
    const openai = new OpenAI({
      apiKey: "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",
      dangerouslyAllowBrowser: true,
    });
    console.log(option);
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
