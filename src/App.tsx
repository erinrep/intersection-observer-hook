import React from 'react';
import './App.css';
import Items from './Items';

function App() {
  return (
    <div className="App">
      <div>
        <h1>Custom React Hook with Intersection Observer</h1>
        <p>An example of a custom hook that can be used to request additional information when a component is scrolled into view.</p>
        <p>
          On page load, we hit the fortniteapi.io's /items/list endpoint to get a list of ten items and render item cards.
          <br/>
          Then we use the hook to hit /items/get to update the item card with more details when it is scrolled into view
        </p>
      </div>
      <Items/>
    </div>
  );
}

export default App;
