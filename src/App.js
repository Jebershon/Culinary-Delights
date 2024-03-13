import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Aboutus from './Components/Aboutus';
import AddGrocery from './Components/Admin/AddGrocery.jsx';
import AdminDash from './Components/Admin/AdminDash.jsx';
import ChartComponent from './Components/Admin/ChartComponent.jsx';
import GroceryView from './Components/Admin/GroceryView.jsx';
import RecipeView from './Components/Admin/RecipeView.jsx';
import SoldDetails from './Components/Admin/Sold-details.jsx';
import UpdateGrocery from './Components/Admin/UpdateGrocery.jsx';
import UpdateRecipe from './Components/Admin/UpdateRecipe.jsx';
import Glocery from './Components/Grocery/Glocery.jsx';
import Home from './Components/Home.jsx';
import MyProfile from './Components/MyProfile.jsx';
import NutritionCalculator from './Components/NutritionCalculator.jsx';
import Recipes from './Components/Recipe/Recipes.jsx';
function App() {
  return (
      <BrowserRouter>
      <Routes>
        <Route path='/*' element={<Home/>}/>
        <Route path="/Glocery/*" element={<Glocery/>} />
        <Route path="/Recipes/*" element={<Recipes/>} />
        <Route path="/NutriCalc/*" element={<NutritionCalculator/>} />
        <Route path="/Aboutus/*" element={<Aboutus/>} />
        <Route path='/MyProfile/*' element={<MyProfile/>}/>
        <Route path='/AdminDash/*' element={<ChartComponent/>}/>
        <Route path='/AdminDash/AddRecipe/*' element={<AdminDash/>}/>
        <Route path='/AdminDash/AddGrocery/*' element={<AddGrocery/>}/>
        <Route path='/AdminDash/ViewRecipe/*' element={<RecipeView/>}/>
        <Route path='/AdminDash/ViewGrocery/*' element={<GroceryView/>}/>
        <Route path='/AdminDash/Sold/*' element={<SoldDetails/>}/>
        <Route path='/AdminDash/UpdateGrocery/:id' element={<UpdateGrocery/>}/>
        <Route path='/AdminDash/UpdateRecipe/:id' element={<UpdateRecipe/>}/>
      </Routes>
      </BrowserRouter>
  );
}

export default App;
