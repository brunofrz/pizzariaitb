import {useState} from 'react'
import './App.css'
import {Routes, Route} from 'react-router-dom'
import Listagem from './pages/Listagem';

const App = () => {

  const [color] = useState("#0000FF")
  document.body.style.backgroundColor = color

  return (
    <Routes>
      <Routes path="/" element={<Listagem />}/>
    </Routes>
  )
}

export default App;
