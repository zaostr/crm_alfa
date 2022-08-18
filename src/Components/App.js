import { useState, useEffect } from 'react';
import {
  Routes,
  Route
} from "react-router-dom";
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={ <Header /> }>
        <Route index element={<></>} />
        <Route path="/leads" element={ <Leads /> } />
        <Route path="*" element={ <NotFound /> } />
      </Route>
    </Routes>
  );
}

export default App;
