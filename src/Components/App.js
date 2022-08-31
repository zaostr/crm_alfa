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


function App() {
  const location = useLocation();
  const layout = ['/sign-in'].includes(location.pathname) ? <EmptyLayout /> : <Layout />;

  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={ layout } >
          <Route index element={<HomePage />} />
          <Route path="/dashboard" element={ 
            <RequireAuth>
              <Dashboard />
            </RequireAuth> 
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
          <Route path="/sign-in" element={ <LoginPage /> } />
          <Route path="*" element={ <NotFound /> } />
        </Route>
      </Routes>
  </AuthProvider>
  );
}

export default App;
