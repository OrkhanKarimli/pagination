import React from 'react';
import './App.css';
import Pagination from './assets/pages/index';
import Postcomp from './assets/components/postcomp';
function App() {
  return (
    <div>
      <Pagination itemPerPage={10} totalPage={10}/>
       <Postcomp></Postcomp> 
    </div>


  );
}

export default App;
