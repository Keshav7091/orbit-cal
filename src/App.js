// import React from 'react';
import React, {useState} from 'react';

import './App.css';
import moonIcon from './assets/moon.png'
import sunIcon from './assets/sun.png'

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  return (
    <div className="app">
      <div className="app_calculator">
        <div className="app_calculator_navbar">
          <div className="app_calculator_navbar_toggle" onClick ={()=>setIsDarkMode(!isDarkMode)}>
            <div className={`app_calculator_navbar_toggle_circle ${isDarkMode?"app_calculator_navbar_toggle_circle_active": ""}`} />             
            
          </div>
          <img src={isDarkMode ? moonIcon : sunIcon} alt="mode" />
        </div>
      </div>
    </div>
  );
}

export default App;
