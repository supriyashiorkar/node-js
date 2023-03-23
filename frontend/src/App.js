
import './App.css';
import Nav from './Nav';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './Footer';
import Signup from './Signup';
import PrivateCompo from './PrivateCompo';
import Login from './Login';
import AddProduct from './AddProduct';
import ProductList from './ProductList';
import UpdateProduct from './UpdateProduct';

function App() {
  return (
    <div className="App">
   <BrowserRouter>
      <Nav/>
   <Routes>
    
    <Route element={<PrivateCompo/>}>
    <Route path='/' element={<ProductList/>}></Route>
    <Route path='/add' element={<AddProduct/>}></Route>
    <Route path='/update/:id' element={<UpdateProduct/>}></Route>
    <Route path='/logout' element={<h1>Logout</h1>}></Route>
    <Route path='/profile' element={<h1>Profile</h1>}></Route>
    </Route>

    <Route path='/signup' element={<Signup/>}></Route>
    <Route path='/login' element={<Login/>}></Route>
   </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
