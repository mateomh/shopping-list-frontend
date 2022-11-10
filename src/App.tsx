import React from 'react';
import NavBar from './components/NavBar';
import AppRouter from './routes';
import './css-reset.css'

function App() {
  return (
    <>
      <NavBar />
      <AppRouter />
    </>
  );
}

export default App;
