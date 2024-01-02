import './App.css'
import Header from './components/Header';
import Login from './pages/Login';
import { Route, Routes  } from 'react-router-dom';
import Perfil from './pages/Perfil';
import InfiniteScrollListImage from './pages/InfiniteScrollListImage';
import SignUp from './pages/SignUp';
import Config from './pages/Config';
import Upload from './pages/Upload';
import Footer from './components/Footer';


function App() {

  return (
    <>
      <Header/>
      <Routes>
          <Route path='/login' element={<Login/>}/>
          <Route path='/:username' element={<Perfil/>}/>
          <Route path='/register' element={<SignUp/>}/>
          <Route path='/config' element={<Config/>}/>
          <Route path='/upload' element={<Upload/>}/>
          <Route path='/' element={<InfiniteScrollListImage/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
