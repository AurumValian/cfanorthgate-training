import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Category from "./Category"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Chick-Fil-A
      </header>
      <section className="category-buttons">
        <Category />
      </section>
    </div>
  );
}

export default App;
