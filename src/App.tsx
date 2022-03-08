import React, { useEffect, useState } from 'react';
import './App.css';

// https://randomuser.me/api/?results=20


function App() {
  const [personData, setPersonData] = useState<any[]>([])


  useEffect(() => {
    // GET request using fetch inside useEffect React hook
    fetch('https://randomuser.me/api/?results=20')
      .then(response => response.json())
      .then(data => setPersonData(data.results))
      .catch(err => console.log(err))
  }, []);


  return (
    <div>
      {personData.map(p => (<div>{p.name.title}</div>))}
      {/* <button onClick={() => { console.log(personData[1]) }}>click me</button> */}
    </div>
  );
}

export default App;
