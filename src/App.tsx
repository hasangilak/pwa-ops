import React from 'react';
import Header from './components/Header';
import SearchFilters from './components/Locations';
import Map from './components/Map';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="container">
      <Header />
      <div className="main-content">
        <SearchFilters />
        <Map />
      </div>
    </div>
  );
};

export default App;
