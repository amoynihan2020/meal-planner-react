import  Grid  from "@mui/material/Grid";
import  Paper from "@mui/material/Paper";
const RecipeCard = ({recipe})=>{
    return (
        <> 
             <Grid xs={4} md={3} item >
                <Paper>
                    <img src={recipe.image} />
                    <p>{recipe.title}</p>
                </Paper>
             </Grid>
              
            
                        
        </>
    )
}
export default RecipeCard