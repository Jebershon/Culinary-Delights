import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Aboutus from './Components/Aboutus';
import AdminDash from './Components/AdminDash.jsx';
import Cart from './Components/Cart-Details.jsx';
import Glocery from './Components/Glocery.jsx';
import Home from './Components/Home.jsx';
import MyProfile from './Components/MyProfile.jsx';
import NutritionCalculator from './Components/NutritionCalculator.jsx';
import Recipes from './Components/Recipes.jsx';
import Signin from './Components/Signin.jsx';
import Signup from './Components/Signup.jsx';
function App() {
  return (
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Glocery/*" element={<Glocery/>} />
        <Route path="/Recipes/*" element={<Recipes/>} />
        <Route path="/NutriCalc/*" element={<NutritionCalculator/>} />
        <Route path="/Aboutus/*" element={<Aboutus/>} />
        <Route path="/Signup/*" element={<Signup/>} />
        <Route path="/Signin/*" element={<Signin/>} />
        <Route path='/Cart/*' element={<Cart/>}/>
        <Route path='/MyProfile/*' element={<MyProfile/>}/>
        <Route path='/AdminDash/*' element={<AdminDash/>}/>
      </Routes>
      </BrowserRouter>
  );
}

export default App;
