import React,{useState} from 'react';  ///imrs
import './App.css';
import Navbar from './components/Navbar.js';
import TextForm from './components/TextForm.js';
import About from './components/About.js';
function App() {
  const [mode, setMode] = useState('light'); //whether dark mode is enabled or not
  const toggleMode=()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor='#373737';
    }else{
      setMode('light');
      document.body.style.backgroundColor='white';
    }
  }

  return (
   <>
   {/* here the title is a prop that is being passed*/}
<Navbar title="TextUtils" aboutText="About Us" mode={mode} toggleMode={toggleMode} />
<div className="container my-3">

  <TextForm heading="Enter the text to analyze below" mode={mode} />
  {/* <About/> */}
</div>

   </>
  );
}

export default App;
