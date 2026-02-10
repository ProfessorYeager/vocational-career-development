import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import UnitView from './pages/UnitView';
import DayView from './pages/DayView';
import Artifacts from './pages/Artifacts';

function App() {
  return (
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
  );
}

export default App;
