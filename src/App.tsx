import React from "react";
import "./App.css";
import { Provider as JotaiProvider } from "jotai";
import { List } from "./Components/List";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <JotaiProvider>
          <List />
        </JotaiProvider>
      </header>
    </div>
  );
}

export default App;

