import React from 'react'

import requests from '../helpers/requests';
import Category from './Category';


const Recipe = ({setselectedOption}) => {
    return (
        <div className="nav">
         <Category title="Pasta" image="https://i.ytimg.com/vi/3dWf6BNZPfo/maxresdefault.jpg"
          onClick={() => setselectedOption(requests.fetchPasta)}/>
          <Category title="Italian" image="https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/slideshows/best_and_worst_italian_dishes_slideshow/650x350_best_and_worst_italian_dishes_slideshow.jpg"
          onClick={()=>setselectedOption(requests.fetchItalian)}/>
          <Category title="Greek" image="https://deih43ym53wif.cloudfront.net/spanakopita-greek-food_dd3bda740c.jpeg"
           onClick={()=>setselectedOption(requests.fetchGreek)}/>
          <Category title="Vegitarian" image="https://domf5oio6qrcr.cloudfront.net/medialibrary/6054/f5282d05-33f5-4c93-a08e-b000164a54db.jpg"
           onClick={()=>setselectedOption(requests.fetchVegetarian)}/>
          <Category title="Gluten" image="https://res.cloudinary.com/jerrick/image/upload/v1515100867/tndzc6ieduoyqumvckoy.jpg"
          onClick={()=>setselectedOption(requests.fetchGluden)}/>
          <Category title="Pan" image="https://cdn.shopify.com/s/files/1/0881/5348/articles/Pan-Fry-or-Saute_1600x.jpg?v=1534622205"
          onClick={()=>setselectedOption(requests.fetchPan)}/>
          <Category title="Tomato,Cheese" image="https://www.thecookierookie.com/wp-content/uploads/2014/11/baked-tomatoes-mozzarella-parmesan-6-of-6.jpg"
           onClick={()=>setselectedOption(requests.fetchTomatoCheese)}/>
          <Category title="Eggs" image="https://www.sailusfood.com/wp-content/uploads/2018/05/egg-gravy-recipe.jpg"
           onClick={()=>setselectedOption(requests.fetchEggs)}/>
          <Category title="Meals" image="https://www.watscooking.com/images/dish/normal/4210.jpg"
          onClick={()=>setselectedOption(requests.fetchMeals)}/>
        </div>
       
    )
}

export default Recipe
