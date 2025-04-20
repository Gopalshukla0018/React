import React, { useState } from 'react';
import Usercart from './componants/usercart';
import "./app.css"
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className='container'>
      <Usercart name="Gopal" desc='desc1'/>
      <Usercart name="rana" desc='desc2'/>
      <Usercart name="Prthviraj chauhan"desc='desc3' />
    </div>
  );
}

export default App;
