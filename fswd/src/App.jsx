import React from 'react';
import './App.css';
import StudentDetails from './components/StudentList';

function App() {
  return (
  <div className="App">
    <StudentDetails name="Angel" rollNum="ADS123"></StudentDetails>
    <StudentDetails name="Saideep" rollNum="ADS124"></StudentDetails>
  </div>
);
}

export default App;
