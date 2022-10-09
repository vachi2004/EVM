import './App.css';
import Two from './components/Two';
import Login from './components/Login'
import Signup from './components/Signup'
import Dashboard from './pag/Dashboard.jsx';
import Analytics from './pag/Analytics.jsx';
import Comment from './pag/Comment.jsx';
import Product from './pag/Product.jsx';
import ProductList from './pag/ProductList.jsx';
import Info from './pages/Info';
import Events from './pages/Events';
import Both from './components/Both';
import MiniApp from './pages/MiniApp';
import {BrowserRouter as BrowserRouter,Route, Routes} from "react-router-dom";
import About from './pag/About.jsx';
import Birth from './pages/Birth';
import Business from './pages/Business';
import Festivals from './pages/Festivals';
import Flash from './pages/Flash';
import Parties from './pages/Parties';
import Nav from './pages/Nav';
import NavBar from './pages/Navbar';
import Chat from './pages/Chat';
import WishList from './components/WishList.Tsx';
function App() {
  return (
    <div>
       <BrowserRouter>
        <Routes>
          <Route path="/" element={<Both />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/About" element={<About />} />
          <Route path="/comment" element={<Comment />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/product" element={<Product />} />
          <Route path="/productList" element={<ProductList />} />
          <Route path="/Info" element={<Info />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Two" element={<Two />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Both" element={<Both />} />
          <Route path="/MiniApp" element={<MiniApp />} />
          <Route path="/Birth" element={<Birth/>}/>
          <Route path="/Events" element={<Events/>}/>
          <Route path="/Business" element={<Business/>}/>
          <Route path="/Festivals" element={<Festivals/>}/>
          <Route path="/Flash" element={<Flash/>}/>
          <Route path="/Parties" element={<Parties/>}/>
          <Route path="/Nav" element={<Nav/>}/>
          <Route path="/NavBar" element={<NavBar/>}/>
          <Route path="/Chat" element={<Chat/>}/>
          <Route path="/Wishlist" element={<WishList/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
