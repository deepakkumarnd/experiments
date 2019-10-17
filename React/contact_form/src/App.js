import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <form>
        <p>
          <label for="name">Full name</label>
          <input 
            name="name" 
            type="text" 
            className="textInput" 
            placeholder="Deepak Kumar" />
        </p>
        
        <p>
          <label for="address1">Address line 1</label>
          <input name="address1" type="text" className="textInput"/>
        </p>      
        
        <p>
          <label for="address2">Address line 2 (o)</label>
          <input name="address2" type="text" className="textInput" />
        </p>

        <p>
          <label for="landmark">Landmark</label>
          <input 
            name="landmark" 
            type="text" 
            className="textInput" 
            placeholder="Near TDM hall"/>
        </p>

        <p>
          <label for="mobile">Mobile</label>
          <input 
            name="mobile" 
            type="text" 
            className="textInput" 
            placeholder="9887989768"/>
        </p>

        <p>
          <label for="email">Email</label>
          <input 
            name="email" 
            type="email" 
            className="textInput" 
            placeholder="deepak@example.com"/>
        </p>

        <p>
          <input type="submit" value="Submit"/>
        </p>
      </form>
    </div>
  );
}

export default App;
