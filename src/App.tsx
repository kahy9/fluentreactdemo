import React from 'react';
import { HelloWorld, FluentButton } from './components/index';

function App() {
  return (
    <div id="container">
        <HelloWorld id="helloWorld" start="Hello" end="World!"></HelloWorld>
        <FluentButton content="Hello, World!"></FluentButton>
    </div>
  );
}

export default App;
