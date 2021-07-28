import React from "react";
import {Card,CardContent,Typography,CardActionArea,CardMedia,} from "@material-ui/core";
import {Link } from 'react-router-dom'
import {useDispatch } from 'react-redux'
import {sendProduct} from '../../Store/actions/user';
import styles from "./item.module.css"


const Item = ({img,categoryTitle}) => {

    const dispatch = useDispatch();


    const handleClick = () =>{ 
      console.log(categoryTitle);
        dispatch(sendProduct(categoryTitle))
        }

    
  return (
    
<Link to='/products' >

   <Card  onClick={handleClick} className={styles.card}>
    <CardActionArea >
    <CardMedia>
    <img src={img} alt={categoryTitle} className={styles.img}  />
    </CardMedia>
        <CardContent> 
          <Typography  variant="h5"  color="secondary" >
            {categoryTitle}
          </Typography>
        </CardContent>
      </CardActionArea>  
    </Card>
 
</Link>
  
  );
};

export default Item;