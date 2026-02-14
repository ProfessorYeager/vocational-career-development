import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Layout from './components/Layout';
import Home from './pages/Home';
import UnitView from './pages/UnitView';
import DayView from './pages/DayView';
import Artifacts from './pages/Artifacts';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/unit/:unitId" element={<UnitView />} />
            <Route path="/day/:dayId" element={<DayView />} />
            <Route path="/artifacts" element={<Artifacts />} />
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
