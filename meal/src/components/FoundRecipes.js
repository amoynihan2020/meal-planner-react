import RecipeCard from "./RecipeCard"
import Grid from '@mui/material/Grid';
import  Paper from "@mui/material/Paper";
const FoundRecipes = ({recipes}) =>{
    return (
        <>
        <Grid className="grid" container spacing={2}>
          
        
            {
            recipes.map((theRecipe) => {
                return <RecipeCard key={theRecipe.id} recipe={theRecipe}/>
            })
         } 
           
          
        </Grid>
         

        
        </>
    )
   
}
export default FoundRecipes 