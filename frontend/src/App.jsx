import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Fortune from './pages/Fortune';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route index element={<Home />} />
        <Route path="fortune" element={<Fortune />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
import React from "react";

function App() {
    return (
        <div>
            <div>ここに処理を書いていきます</div>
        </div>
    );
}


