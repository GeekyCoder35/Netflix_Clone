import './App.css';
import Topbar from './components/topbar/Topbar';
import Sidebar from './components/sidebar/Sidebar';
import Home from './Pages/Home/Home';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import UserList from './Pages/UserList/UserList';
import User from './Pages/User/User';
import NewUser from './Pages/NewUser/NewUser';
import ProductList from './Pages/ProductList/ProductList';
import Product from './Pages/Product/Product';
import NewProduct from './Pages/NewProduct/NewProduct';

function App() {
  return (
    <Router>
      <Topbar/>
      <div className='container'>
        <Sidebar/>

        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/user' element={<UserList/>}/>
          <Route path='/user/:userId' element={<User/>}/>
          <Route path='/newuser' element={<NewUser/>}/>
          <Route path='/products' element={<ProductList/>}/>
          <Route path='/products/:productid' element={<Product/>}/>
          <Route path='/newproduct' element={<NewProduct/>}/>
        </Routes>
        
      </div>
    </Router>
  );
}

export default App;
