import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { information, ingredients } from "../../helpers/Information";
import { sendProduct } from "../../Store/actions/user";
import { API_KEY } from "../../helpers/key";
import styles from "./Information.module.css"
import {Table,TableCell,TableHead,TableRow, TableBody,Card,Typography
,CardActionArea,CardMedia,CardContent} from "@material-ui/core";


const Information = () => {
  const dispatch = useDispatch();

  const {
    products: { data, query },
  } = useSelector((data) => data);


  const [info, setInfo] = useState([]);

  useEffect(() => {
    if (!data) {
      console.log("noe da");
      return <h1>No Information Found</h1>;
    }

    const sendInfo = async () => {
      try {
        const gettedInfo = await information(data.id);
        const gettedIngredient = await ingredients(data.id);

        const extractedData = {
          gettedInfo,
          gettedIngredient,
          query,
        };
        setInfo(extractedData);
      } catch (error) {
        console.log(error);
      }
    };
    sendInfo();

    dispatch(sendProduct(query));
  }, []);



  if (info.length === 0) {
    return <>
 
    <img src="https://acegif.com/wp-content/uploads/loading-58.gif" className={styles.loading}/>

    </>
  }

  return (
    <div className={styles.container} >
    <div>
      <h2 className={styles.heading}>{info.gettedInfo.title}</h2>
      <img src={info.gettedInfo.image} alt={info.gettedInfo.title}  className={styles.img}/>
      <br/>
      <div>
      <h3 className={styles.header}>Ingredients: </h3>
      {info.gettedIngredient.ingredients.map((ingredients, index) => {
        return (
          
 <div key={index} className={styles.incredients}>
             <Card  className={styles.card}>
    <CardActionArea >
    <CardMedia>
    <img src={`https://spoonacular.com/cdn/ingredients_100x100/${ingredients.image}?apiKey=${API_KEY}`}
            alt={ingredients.name} className={styles.imgincredients} 
          />
           <Typography  variant="p"  color="secondary" >
         {ingredients.name}({ingredients.amount.metric.value}
            {ingredients.amount.metric.unit})
          </Typography>
    </CardMedia>
      
         
  
      </CardActionArea>  
    </Card>
           
   </div>
        );
      })}
      </div>
      <h3 className={styles.header}>Instructions:</h3>
      <div className={styles.html}
        dangerouslySetInnerHTML={{ __html: info.gettedInfo.instructions }}
      ></div>
      <h3 className={styles.header}>Additional Information: </h3>

      <div >
        <div className={styles.addinfo}>
          <h5>DishTypes:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;
          <span>{info.gettedInfo.dishTypes.join(",")}</span></h5>
        </div>
        <div className={styles.addinfo}>
          <h5>Diets:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <span>{info.gettedInfo.diets.join(",")}</span></h5>
        </div>
        <div className={styles.addinfo}>
          <h5>Ready In Minutes:&nbsp;
          <span>{info.gettedInfo.readyInMinutes} min</span></h5>
        </div>
        <div className={styles.addinfo}>
          <h5>Health Score:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <span>{info.gettedInfo.healthScore}/100 </span></h5>
        </div>
        <div className={styles.addinfo}>
          <h5>Cuisines:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <span>
            {info.gettedInfo.cuisines.length > 1
              ? info.gettedInfo.cuisines
              : "No Cusines"}
          </span></h5>
        </div>
      </div>

      <div>
        <h3 className={styles.header}>Nutritions: </h3>
        <br/>
        <Table stickyHeader aria-label="sticky table" className={styles.table} >
          <TableHead >
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="right">Amount</TableCell>
              <TableCell align="right">Unit</TableCell>
              <TableCell align="right">Percent of Daily Needs</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {info.gettedInfo.nutrition.nutrients.map((nutrients, index) => {
              return (
                <TableRow key={index}>
                  <TableCell component="th" scope="row">
                    {nutrients.name}
                  </TableCell>
                  <TableCell align="right">{nutrients.amount}</TableCell>
                  <TableCell align="right">{nutrients.unit}</TableCell>
                  <TableCell align="right">
                    {nutrients.percentOfDailyNeeds}
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>

      <h3 className={styles.header}>Summary:</h3>
      <div className={styles.html}dangerouslySetInnerHTML={{ __html: info.gettedInfo.summary }}></div>
    </div>
</div>
  );
};

export default Information;