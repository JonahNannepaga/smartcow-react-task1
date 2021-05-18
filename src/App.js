import './App.css';
import Header from './components/Header';
import SideBar from './components/Sidebar';
import Card from './components/Card';
import { useState } from 'react';

function App() {
  const [string, setString] = useState('');
  const [arr, setArray] = useState([]);

  function onChangeHandler(e) {
    setString(e.target.value);
    setArray((e.target.value).split(''));
  }

  return (
    <>
      <Header />
      <div className="container">
        <div className="search-box">
          <input id="search" val="agagag" placeholder="Type a string..." onChange={onChangeHandler} />
        </div>
        <div className="wrapper">
          <SideBar string={string} />
          <div className="card-wrapper">
            {
              arr.map((item, index) => {
                if ((index + 1) % 3 === 0) {
                  return <Card blueborder={true} letter={item} key={index} />
                } else {
                  return <Card blueborder={false} letter={item} key={index} />
                }
              })
            }
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
