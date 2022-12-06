import { TextField } from "@mui/material";
import React, { useEffect } from "react";
import { useState } from "react";
import { List } from '@mui/material';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import Button from '@mui/material/Button';
import { API_KEY } from "../app-data";

const FindRecipeByIngredient = () => {
    const [currentWord, setCurrentWord] = useState('')
    const [submittedIngredients, setSubmittedIngredients] = useState([])
    useEffect(()=>{

    }, [submittedIngredients])
    const preventDuplicate = (itemToCheck) =>{
        submittedIngredients.forEach((item, index)=> {
            if(itemToCheck == item){
                return false
            } else{
                return
            }
        })

    }
    const handleKeyDown =(e)=> {
        if(e.keyCode == 13 || e.keyCode== 188){ //if enter (13) or comma(188) is pressed
            if(e.target.value){
                setSubmittedIngredients([...submittedIngredients, e.target.value])
            }
        }
          
    }
    const handleSubmit = () =>{
    
    }

    const removeIngredient = (itemToRemove) =>{
      const filtered = submittedIngredients.filter(item => itemToRemove != item)
      setSubmittedIngredients(filtered);
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
               {submittedIngredients?.length > 0 ? 
               <>
                <div className='added-subtitle'>Added Ingredients</div>
                 <List className='added-items-list'>
                    {submittedIngredients.map((item, index)=> {
                        
                           return <ListItemButton onClick={()=> removeIngredient(item)}align-items="flex-start" key={index}>{item}</ListItemButton>
                        
                    })}

                     
                 </List>
                 <Button onClick={()=> handleSubmit}>Get Recipe!</Button>
                                 
                                 
                </> 

                : ''
            }
            </div>


            
            
        </>
    )
}
export default FindRecipeByIngredient

