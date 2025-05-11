import './App.css'
import { Route, Routes } from 'react-router-dom';
import TermsAndConditions from './terms&conditions';
import Home from './home';

function App() {
  return (
    <>
      {/* Define Routes */}
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/terms&conditions" element={<TermsAndConditions />} />
      </Routes>
    </>
  )
}

export default App
