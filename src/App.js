import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Landing from './pages/Landing';
import Order from './pages/Order';
import NotFound from './pages/NotFound';

const App = () => {
  return (
    <BrowserRouter basename="one-dash-bar">
      <Routes>
        <Route index element={<Landing />} />
        <Route path="order" element={<Order />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
