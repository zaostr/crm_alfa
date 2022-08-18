import { useState, useEffect } from 'react';
import {
  Routes,
  Route
} from "react-router-dom";
import './App.css';
import { Layout } from './Layout/Layout';
import { Leads } from './Leads/Leads';
import { NotFound } from '../Pages/NotFound/NotFound';

function App() {
  return (
    <Routes>
      <Route path="/" element={ <Layout /> } >
        <Route index element={<></>} />
        <Route path="/leads" element={ <Leads /> } />
        <Route path="*" element={ <NotFound /> } />
      </Route>
    </Routes>
  );
}

export default App;
