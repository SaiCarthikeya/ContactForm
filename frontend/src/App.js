import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Admin from  './components/Admin'
import ContactForm from  './components/ContactForm'
import Header from './components/Header'
import Success from  './components/Success'
import './App.css';

function App() {
  return (
   <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<ContactForm/>} />
        <Route path="/admin" element={<Admin/>} />
        <Route path="/success" element={<Success/>} />
      </Routes>
   </BrowserRouter>
  );
}

export default App;
