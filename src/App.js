import './App.css';
import Navbar from './components/Navbar';
// import TextArea from './components/TextArea';
import About from './components/About';

function App() {
  return (
    <>
    <Navbar title="TextUtils"/>
    
    <div className='container my-5'>
      {/* <TextArea heading='Enter the text Here'/> */}
      <About />
      </div>
    </>
  );
}

export default App;
