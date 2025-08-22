import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import HomePage from './pages/HomePage';
import DestinationsPage from './pages/DestinationsPage';
import VacationsPage from './pages/VacationsPage';
import AboutUsPage from './pages/AboutUsPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="destinations" element={<DestinationsPage />} />
          <Route path="vacations" element={<VacationsPage />} />
          <Route path="about-us" element={<AboutUsPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
