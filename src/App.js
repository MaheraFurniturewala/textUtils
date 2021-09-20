import './App.css';
import Navbar from './components/Navbar.js';
function App() {
  return (
   <>
   {/* here the title is a prop that is being passed*/}
<Navbar title="TextUtils" aboutText="About Us" />
   </>
  );
}

export default App;
