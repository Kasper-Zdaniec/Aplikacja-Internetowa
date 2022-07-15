import React from 'react';
import Home from './pages/Home/Home';
import AddAdoptions from './pages/Add/Adoptions/Adoptions';
import AddMissing from './pages/Add/Missing/Missing';
import Missing from './pages/Missing/Missing';
import Contact from './pages/Contact/Contact';
import { Routes, Route } from 'react-router-dom';
import DogDetails from './components/DogDetails/DogDetails';
import DogDetailsMissing from './components/DogDetails/DogDetailsMissing';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/addAdoption" element={<AddAdoptions />} />
      <Route path="/addMissing" element={<AddMissing />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/missing" element={<Missing />} />
      <Route path="/dogs/:id" element={<DogDetails />} />
      <Route path="/dogsMissing/:id" element={<DogDetailsMissing />} />
    </Routes>
  );
}

export default App;
