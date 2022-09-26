import React from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Routes,
} from 'react-router-dom';
import routes from './Config/routes.js';
import { AuthProvider } from "./Contexts";
import AppRoutes from './Components/Approutes';

 
function App() {
  return (
    <AuthProvider>
    <Router>
      <Routes>
        {routes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={<route.component/>}
          />
        ))}
      </Routes>
    </Router>
    </AuthProvider>
  );
}
 
export default App;