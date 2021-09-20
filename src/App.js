import './App.css';
import Navbar from './components/Navbar.js';
import TextForm from './components/TextForm.js';
function App() {
  return (
   <>
   {/* here the title is a prop that is being passed*/}
<Navbar title="TextUtils" aboutText="About Us" />
<div className="container my-3">

  <TextForm heading="Enter the text to analyze below" />

</div>

   </>
  );
}

export default App;
