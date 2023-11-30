import './App.css'
import Header from './components/Header';
import Login from '../pages/Login';
import { Route, Routes } from 'react-router-dom';
import Perfil from '../pages/Perfil';
import InfiniteScrollListImage from './components/InfiniteScrollListImage';

function App() {

  return (
    <>
      <Header/>
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/perfil' element={<Perfil/>}/>
        <Route path='/' element={<InfiniteScrollListImage/>}/>
      </Routes>
    </>
  )
}

export default App
