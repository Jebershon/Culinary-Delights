import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Aboutus from './Components/Aboutus';
import Cart from './Components/Cart-Details.jsx';
import Glocery from './Components/Glocery.jsx';
import Home from './Components/Home';
import MyProfile from './Components/MyProfile.jsx';
import NutritionCalculator from './Components/NutritionCalculator';
import Recipes from './Components/Recipes';
import Signin from './Components/Signin.jsx';
import Signup from './Components/Signup.jsx';
function App() {
  return (
      <BrowserRouter basename={process.env.PUBLIC_URL="/"}>
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
      </Routes>
      </BrowserRouter>
  );
}

export default App;
