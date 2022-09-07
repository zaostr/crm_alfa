import {
  Routes,
  Route,
  useLocation
} from "react-router-dom";
import './App.css';
import { Layout } from './Layout/Layout';
import { Leads } from './Leads/Leads';
import { NotFound } from '../Pages/NotFound/NotFound';
import { LoginPage } from '../Pages/LoginPage/LoginPage';
import { HomePage } from "../Pages/HomePage/HomePage";
import { RequireAuth } from "../hoc/RequireAuth";
import { AuthProvider } from "../hoc/AuthProvider"
import { Dashboard } from "../Pages/Dashboard/Dashboard";
import { EmptyLayout } from "./EmptyLayout/EmptyLayout";
import { Account } from "../Pages/Account/Account";
import { Settings } from "../Pages/Settings/Settings";
import { Register } from "../Pages/Register/Register";
import { Products } from "../Pages/Products/Products";
import { Customers } from "../Pages/Customers/Customers.js";


function App() {
  const location = useLocation();
  const layout = ['/sign-in','/register'].includes(location.pathname) ? <EmptyLayout /> : <Layout />;

  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={ layout } >
          <Route index element={<HomePage />} />
          <Route path="/dashboard" element={
            <Dashboard />
          } />
          <Route path="/leads" element={ 
            <RequireAuth>
              <Leads />
            </RequireAuth> 
          } />
          <Route path="/account" element={ 
            <RequireAuth>
              <Account />
            </RequireAuth> 
          } />
          <Route path="/settings" element={
            <Settings />
          } />
          <Route path="/customers" element={
            <Customers />
          } />
          <Route path="/products" element={
            <Products />
          } />
          <Route path="/register" element={
            <Register />
          } />
          <Route path="/sign-in" element={ <LoginPage /> } />
          <Route path="*" element={ <NotFound /> } />
        </Route>
      </Routes>
  </AuthProvider>
  );
}

export default App;
