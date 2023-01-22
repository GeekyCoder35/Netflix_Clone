import './App.scss';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import Watch from './Pages/Watch/Watch';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

const App = () => {
  const user = true;
  return(
    <Router>
      <Routes>
        <Route path='/' element={user ? <Home/> : <Register/>} />
        <Route path='/login' element={!user ? <Login/> : <Home/>} />
        <Route path='/register' element={!user ? <Register/> : <Home/>} />
        <Route path='/movies' element={user ? <Home type={'movie'}/> : <Register/> } />
        <Route path='/series' element={user ? <Home type={'series'}/> : <Register/> } />
        <Route path='/watch' element={user? <Watch/> : <Register/>} />
      </Routes>
    </Router>
  )
} 

export default App;
