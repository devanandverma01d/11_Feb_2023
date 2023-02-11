//1. Import area
import React from 'react';
import ReactDOM from 'react-dom/client';
import A from './Components/A';
import './index.css';
//2. Function definition area
function App() {
  //every functio return something
  return (
    <>
      <h1 className='head1'>This is 4th Project, How to pass data between React Functional Component</h1>
    </>
  )

}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <App />
    <A surname="Verma" />
  </>


);
//3. Export area

