import { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextArea from './components/TextArea';
import About from './components/About';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {

  const[mode, setMode] = useState("light"); // Weather dark mode is enabled or disabled
  const[alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert ({
      message: message,
      type: type
    });

    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const toggleMode = () => {
    if ( mode === "dark" ) {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode turned on Successfully", "success");
    } else if ( mode === "light" ) {
      setMode("dark");
      document.body.style.backgroundColor = "black";
      showAlert("Dark Mode turned on Successfully", "success");
    }
  };

  return (
    <>
    <Router>
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className='container my-5'>
      <Routes>
          <Route exact path="/about" element={<About />}/>
          <Route exact path="/" element={<TextArea heading='Enter the text Here' mode={mode} showAlert={showAlert}/>}/>
      </Routes>
      </div>
    </Router>
    </>
  );
}

export default App;
