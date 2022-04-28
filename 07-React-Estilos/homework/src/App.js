import React from 'react';
import './App.css';
import Header from './components/Header';
import Card from './components/Card.jsx';
import Cards from './components/Cards.jsx';
import SearchBar from './components/SearchBar.jsx';
import data, { Cairns } from './data.js';
import cs from './components/Cards.module.css';

function App() {
  let array = {
    name: "Eric Yoel",
    surname: "Ferreyra"
  }
  return (
    
    <div className="App">
      <div>
        <Header 
        name={array.name}
        surname={array.surname}
        />
      </div>
      <div className={cs.cards}>
        <Card
          max={Cairns.main.temp_max}
          min={Cairns.main.temp_min}
          name={Cairns.name}
          img={Cairns.weather[0].icon}
          onClose={() => alert(Cairns.name)}
        />
      </div>
      <hr />
      <div>
        <Cards
          cities={data}
        />
      </div>
      <hr />
      <div>
        <SearchBar
          onSearch={(ciudad) => alert(ciudad)}
        />
      </div>
    </div>
  );
}

export default App;
