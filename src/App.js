import './App.css';
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import { LoginPage } from './LoginPage';
import { ProductPage } from './ProductPage';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/*" element={<LoginPage />} /> 
          <Route path="/login" element={<LoginPage />} />
          <Route path="/termekek" element={<ProductPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
