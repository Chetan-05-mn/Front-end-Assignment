import './App.css';
import Nav from './Components/Navbar/Nav';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import Login from './Pages/Login';
import Footer from './Pages/Footer';
import men_banner from './Components/Assets/banner_mens.png';
import women_banner from './Components/Assets/banner_women.png';
import kids_banner from './Components/Assets/banner_kids.png';
import banner from './Components/Assets/banner1.jpg';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav/>
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/casual' element={<ShopCategory banner={men_banner} category="men"/>}/>
        <Route path='/Winter' element={<ShopCategory banner={kids_banner}  category="kid"/>}/>
        <Route path='/Ethnic' element={<ShopCategory banner={men_banner} category="men"/>}/>
        <Route path='/womens casual' element={<ShopCategory banner={women_banner} category="women"/>}/>
        <Route path='/womens Winter' element={<ShopCategory banner={banner}  category="women"/>}/>
        <Route path='/womens Ethnic' element={<ShopCategory banner={women_banner} category="women"/>}/>
        <Route path='/product'element={<Product/>}>
        <Route path=':productId'element={<Product/>}/>
        </Route>
        <Route path='/Cart' element={<Cart/>}/>
        <Route path='/Login' element={<Login/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter> 
    </div>
  );
}

export default App;
