import React from 'react';
import styles from "./Category.module.css"
import {Link} from "react-router-dom"
import { Card, CardMedia, CardActionArea, CardContent} from "@material-ui/core"
import axios from 'axios';

const RecipeCards = ({ recipe }) => {
    const id=recipe.id
       
    console.log(id); 
    //const data=axios.get(`https://api.spoonacular.com/recipes/${id}/ingredientWidget.json`)

    return (
        <Link to="/recipe">
        <div className={styles.container}>
           <Card className={styles.card}>
                    <CardActionArea>
                    <CardMedia className={styles.img}
                        component="img"
                        alt="Contemplative Reptile"
                        image={recipe.image}
                        title="Contemplative Reptile"
                    />
                        <CardContent className={styles.heading}>
                            <h2>{recipe.title}</h2>

                        </CardContent>
                    </CardActionArea>
                </Card>
        
            </div>
            </Link>
                )
}

                export default RecipeCards

