import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { getProducts } from '../../helpers/Products'
import { Card, Grid, CardContent, Typography, CardActionArea, CardMedia, Button, CardHeader, } from "@material-ui/core";
import { Link } from 'react-router-dom'
import { sendInformation} from '../../Store/actions/user'
import { useDispatch } from 'react-redux'
import styles from "./Product.module.css"
const Products = () => {

  const products = useSelector(data => data.products)
  const [product, setProduct] = useState([])


  const dispatch = useDispatch()
  useEffect(() => {
    const fun = async () => {
      try {
        const data = await getProducts(products)
        console.log(data);
        setProduct([data]);

      } catch (error) {
        console.log(error);
      }
    }
    fun()
  }, [])

  const handleClick = (data) => {
    const info = { data: data, query: product[0].query }
   dispatch(sendInformation(info))
  }


  if (product.length ===0) {
    return (
      <>
 
     <img src="https://acegif.com/wp-content/uploads/loading-58.gif" className={styles.loading}/>

     </>
     )
  }

  if (!products) {
    return <h1>No Products Found</h1>

  }

  return (

    <Grid>
      {

        product[0].searchResults[0].results.map((data, index) => {
      //  console.log(product[0].searchResults[0].results);
          return (
           
            <Link to="/products/information" key={index} >
              <Card onClick={() => handleClick(data)} key={index} className={styles.card}>
            
               
                <CardActionArea>

                  <CardMedia>
                  <Typography  varient="p" color="secondary" component="p"className={styles.cardcontent}>{data.name}</Typography>
                    <img src={data.image} alt={data.name} className={styles.img}/>
                  </CardMedia>
                     <br/>
                     <Button size="small" color="primary">LEARN MORE</Button>
                 
                </CardActionArea>

              </Card></Link>

          )
        })
      }
    </Grid>


  )
}

export default Products