import React, { useState } from 'react';
import Form from './Components/Form';
import Contacts from './Components/Contacts';

function App() {
  const [data, setData] = useState([{ name: 'Saman', age: '24', key: '1234' }]);

  const addDataHandler = function (gatheredData) {
    setData((prevData) => {
      return [...prevData, gatheredData];
    });
  };

  return (
    <div>
      <Form onAddData={addDataHandler} />
      <Contacts data={data} />
    </div>
  );
}

export default App;
