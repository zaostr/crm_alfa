import {
  Routes,
  Route
} from "react-router-dom";
import './App.css';
import { Layout } from './Layout/Layout';
import { Leads } from './Leads/Leads';
import { NotFound } from '../Pages/NotFound/NotFound';
import { LoginPage } from '../Pages/LoginPage/LoginPage';
import { HomePage } from "../Pages/HomePage/HomePage";
import { RequireAuth } from "../hooks/RequireAuth";
import { AuthProvider } from "../hooks/authProvider"

function App() {
  return (
    <Routes>
      <Route path="/" element={ <Layout /> } >
        <Route index element={<HomePage />} />
        <Route path="/dashboard" element={ 
          <RequireAuth>
            <Leads />
          </RequireAuth> 
        } />
        <Route path="/leads" element={ 
          <RequireAuth>
            <Leads />
          </RequireAuth> 
        } />
        <Route path="/sign-in" element={ <LoginPage /> } />
        <Route path="*" element={ <NotFound /> } />
      </Route>
    </Routes>
  );
}

export default App;
