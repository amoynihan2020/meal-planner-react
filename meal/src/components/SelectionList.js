import React from "react";
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
//should be used to choose different option in the app
const SelectionList = () => {
    return (
        <>
          <div className="selection-group">
                
        
                   
                        <Link to="/findByIngredient"><Button>Find Meal By Ingredient</Button></Link>
                        <Button>One</Button>
                        <Button>Two</Button>
                    


                
          </div>
        </>
    )
}

export default SelectionList