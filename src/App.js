import React from 'react';
import './App.css';
import NavBar from './Components/User/NavBar'
import {HashRouter} from 'react-router-dom'
import router from './router'

function App() {
  return (
    <HashRouter>
      <NavBar />
      {router}
    </HashRouter>
  );
}

export default App;
