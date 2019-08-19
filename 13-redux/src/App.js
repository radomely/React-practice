import React from 'react';
import Timer from './components/Timer/TimerContainer';
import StepSelector from './components/StepSelector/StepSelector';
import './App.module.css';

const containerStyle = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '100vh',
};

const App = () => (
  <div style={containerStyle}>
    <Timer />
    <StepSelector />
  </div>
);

export default App;
