import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import {Provider } from 'react-redux'
import store from './store/store';
import { Testing } from './components/Testing';

function App() {

  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/">
              <Route path="login" element={Login}/>
            </Route>
            
          </Routes>
        </BrowserRouter>

        <Testing/>

      </Provider>
    </div>
  );
}

export default App;
