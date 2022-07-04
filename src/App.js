import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [gifs, setGifs] = useState(GIFS);

  useEffect (function (){
    console.log ('efecto ejecutado  ')
  })


  // const state=useState([])
  // const value =state[0]
  // const updateValue = state[1]

  //const [value, updateValue]=useState([])

  return (
    <div className="App">
      <section className="App-content">
        {
          gifs.map(singleGif => <img src =  {singleGif}/>)
        }
      </section>
    </div>
  );
}

export default App;
