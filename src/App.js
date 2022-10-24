import React from 'react';
import './App.css';

import InputField from './components/InputField';
import Cards from './components/Cards';
import Header from './components/Header';

const App = () => {

  const [inputItems, setInputItems] = React.useState([]);
  const [search, setSearch] = React.useState("");
  
  const handleDelete = (delteItem) => {
    setInputItems(inputItems.filter((item) => {
      return item.key !== delteItem;
    }))
  }

  return (<>
    <Header setSearch={setSearch} />
    <div className="container">
      {inputItems.filter((val) => {
        if (search.trim().length === 0) {
          console.log(val);
          return val;
        }
        else if (val.text.includes(search)) {
          return val;
        }
      }).map((item) => {
        return (<Cards text={item.text} key={item.key} itemId={item.key} handleDelete={handleDelete} />);
      })}
      <InputField setInputItems={setInputItems} />
    </div>
  </>
  )
}

export default App;