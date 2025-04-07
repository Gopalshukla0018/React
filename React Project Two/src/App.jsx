import React, { useState } from 'react';
import Usercart from './componants/usercart';
import "./app.css"
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className='container'>
      <Usercart name="Gopal"/>
      <Usercart name="rana" />
      <Usercart name="Prthviraj chauhan"/>
    </div>
  );
}

export default App;
