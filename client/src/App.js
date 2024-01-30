import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Provider } from "react-redux";
import store from "./store/store";
import { Testing } from "./components/Testing";
import { Login } from "./components/Login";
import ProtectedRoutes from "./components/ProtectedRoutes";
import DashBoard from "./pages/DashBoard";
import Signup from "./components/Signup";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/">
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup />} />
            <Route element={<ProtectedRoutes />}>
              <Route path="dashboard" element={<DashBoard />}></Route>
            </Route>
          </Route>
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
