import './App.css'
import Header from './components/Header';
import Login from './pages/Login';
import { Route, Routes  } from 'react-router-dom';
import Perfil from './pages/Perfil';
import InfiniteScrollListImage from './pages/InfiniteScrollListImage';
import SignUp from './pages/SignUp';


function App() {

  return (
    <>
      <Header/>
      <Routes>
          <Route path='/login' element={<Login/>}/>
          <Route path='/perfil/username/:username' element={<Perfil/>}/>
          <Route path='/signup' element={<SignUp/>}/>
          <Route path='/' element={<InfiniteScrollListImage/>}/>
      </Routes>
    </>
  )
}

export default App
