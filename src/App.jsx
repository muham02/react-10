
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './components/login/Login'
import SignUp from './components/signUp/SignUp'
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <>
    <Routes>
    
      <Route path='/'element={<SignUp/>}/>
      <Route path='/Login'element={<Login/>}/>

    </Routes>
    <ToastContainer/>
    </>
  )
}

export default App
