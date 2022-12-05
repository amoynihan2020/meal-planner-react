import logo from './logo.svg';
import './App.css';
import TextField from '@mui/material/TextField';
import SelectionList from './components/SelectionList';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import FindRecipeByIngredient from './components/FindRecipeByIngredient';
import HomePage from './HomePage';
function App() {
  return (
   <>
   <BrowserRouter>

     
        
           
        <Routes>
           <Route path="/" element={<HomePage/>}/>
           <Route path='/findByIngredient' element={<FindRecipeByIngredient/>}/>
        </Routes>
    </BrowserRouter>
   </>
  );
}

export default App;
