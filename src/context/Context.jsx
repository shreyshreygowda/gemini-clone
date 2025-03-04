import { createContext, useState } from "react";
import runChat from "../config/gemini";  // Assuming runChat is a function you've created

export const Context = createContext();

const ContextProvider = (props) => {
  const [input, setInput] = useState("");
  const [recentPrompt, setRecentPrompt] = useState("");
  const [prevPrompts, setPrevPrompts] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(false);
  const [resultData, setResultData] = useState("");

  const onSent = async (prompt) => {
    if (!prompt.trim()) return; 

    setRecentPrompt(prompt);  
    setShowResult(true);
    setLoading(true);
    setResultData("");

    const response = await runChat(prompt); 
    setResultData(response);

    setLoading(false);
    setInput("");  
};

  const contextValue = {
    prevPrompts,
    setPrevPrompts,
    onSent,
    setRecentPrompt,
    recentPrompt,
    showResult,
    loading,
    resultData,
    input,
    setInput
  };

  return (
    <Context.Provider value={contextValue}>
      {props.children}
    </Context.Provider>
  );
};

export default ContextProvider;
