import React from 'react'
import { Card, Button, CardMedia, CardActionArea, CardContent } from "@material-ui/core"
import styles from "./Category.module.css"
const Category = (props) => {
    return (
        <div className={styles.container}>
            <Card className={styles.card} >
            <h2 className={styles.heading}>{props.title}</h2>
                <CardActionArea>
                    <CardMedia className={styles.img}
                        component="img"
                        alt="Contemplative Reptile"
                        image={props.image}
                        title="Contemplative Reptile"
                    />
                    <CardContent>


                        <h2 size="small" color="primary"
                            onClick={props.onClick}>LERN MORE</h2>
                            
                    </CardContent>

                </CardActionArea>
            </Card>

        </div>
    )
}

export default Category
