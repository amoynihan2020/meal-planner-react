import { TextField } from "@mui/material";
import React, { useEffect } from "react";
import { useState } from "react";
import { List } from '@mui/material';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
const FindRecipeByIngredient = () => {
    const [currentWord, setCurrentWord] = useState('')
    const [submittedIngredients, setSubmittedIngredients] = useState([])
    useEffect(()=>{

    }, [submittedIngredients])

    const handleKeyDown =(e)=> {
        console.log(e.keyCode)
        if(e.keyCode == 13 || e.keyCode== 188){ //if enter (13) or comma(188) is pressed
            
            if(e.target.value){
                setSubmittedIngredients([...submittedIngredients, e.target.value])
            }
        }
          
    }

    
    return (
        <>
        <h1>Find A Meal with ingredients you have!</h1>
            <div className="input-field">
                <TextField 
                   onKeyDown={handleKeyDown}
                   className="submitted-ingredients"
                   label="Enter ingredients"
                />
               {submittedIngredients.length > 0 ? 
               <>
                <div className='added-subtitle'>Added Ingredients</div>
                 <List className='added-items-list'>
                    {submittedIngredients.map((item)=> {
                        
                           return <ListItemButton align-items="flex-start" key={item}>{item}</ListItemButton>
                        
                    })}

                     
                 </List>
                                 
                                 
                </> 

                : ''
            }
            </div>


            
            
        </>
    )
}
export default FindRecipeByIngredient

