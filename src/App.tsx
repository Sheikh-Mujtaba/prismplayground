import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Main from './pages/Main';

const App: React.FC = () => {
  const [bgColor, setBgColor] = useState<string>('#ffffff'); // White color as the initial value
  const [txtColor, setTxtColor] = useState<string>('#000000'); // White color as the initial value
  const [primaryColor, setPrimaryColor] = useState<string>('#7c79b2'); // White color as the initial value
  const [secondaryColor, setSecondaryColor] = useState<string>('#3026e1'); // White color as the initial value




  return (
    <div className="App">
      <Navbar bgColor={bgColor} txtColor={txtColor}  />
      <Main bgColor={bgColor} txtColor={txtColor} setBgColor={setBgColor} 
      setTxtColor={setTxtColor}  primaryColor={primaryColor} setPrimaryColor={setPrimaryColor} 
      
      secondaryColor={secondaryColor} setSecondaryColor={setSecondaryColor}/>

    </div>
  );
};

export default App;
