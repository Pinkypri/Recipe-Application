
import React from 'react'
import Category from './Item/item'
import styles from "./Item/item.module.css"
const Home = () => {

  return (
    <div>
      <br/>
      <h2 className={styles.heading}>Choose Your Favourite Recipe!</h2>
      <br/>
      <Category
      categoryTitle="Pasta"
      img="https://d36rz30b5p7lsd.cloudfront.net/d3/fiam/recipe/img/All-In-One-Tasty-Pasta_recipeimage.jpeg"/>
      <Category
       categoryTitle="Chicken"
       img="https://famousdishes.in/wp-content/uploads/2020/06/1-11.jpg"/>
      <Category
       categoryTitle="Cereals"
       img="http://d6h7vs5ykbiug.cloudfront.net/wp-content/uploads/2018/05/Homemade-Cereal-Recipe-5.jpg"/>
      <Category
       categoryTitle="Fish"
       img="https://i.ytimg.com/vi/2yVxFEx_avs/maxresdefault.jpg"/>
      <Category
       categoryTitle="Noodles"
       img="https://i.pinimg.com/originals/b6/c7/66/b6c766a55337a6549b39933a77560a4a.png"/>
        <Category
      categoryTitle="Eggs"
      img="https://www.archanaskitchen.com/images/archanaskitchen/0-Archanas-Kitchen-Recipes/2018/Dhaba_Style_Egg_Curry_Recipe-3.jpg"/>
      <Category
       categoryTitle="Mushroom"
       img="https://c.ndtvimg.com/2019-06/go4418h8_garlic-recipes-mushrooms-in-garlic-sauce_625x300_20_June_19.jpg"/>
      <Category
       categoryTitle="Rice"
       img="http://almasskitchen.com/wp-content/uploads/2018/12/vlcsnap-2018-12-16-14h05m55s584.png"/>
      <Category
       categoryTitle="Pizza"
       img="https://astutesolutions.com/wp-content/uploads/2019/10/dominos-pizza-seal-beach-1024x731.jpg"/>
      <Category
       categoryTitle="Paneer"
       img="https://cdn.squats.in/thumbnail/5287daf8-db97-4ee2-a193-6a8933c39d3c.jpeg"/>
        <Category
      categoryTitle="Beef"
      img="http://3.bp.blogspot.com/-Bb3aaDOauL0/UFNsaCt1-rI/AAAAAAAADUU/ovTciq9OhuM/s640/beef+ularthiyathu.jpg"/>
      <Category
       categoryTitle="Duck"
       img="https://img-global.cpcdn.com/recipes/44bb440806a5d7f1/751x532cq70/ms-tender-duck-curry-recipe-main-photo.jpg"/>
      <Category
       categoryTitle="Prawn"
       img="https://i.ytimg.com/vi/7zBa-zJUClM/maxresdefault.jpg"/>
       <Category
       categoryTitle="Ice cream"
       img="https://www.biggerbolderbaking.com/wp-content/uploads/2018/05/1C5A7434.jpg"
       />
      <Category
       categoryTitle="Juice"
       img="https://www.news-medical.net/image.axd?picture=2018%2F4%2Fshutterstock_1By_stockcreations.jpg"/>
      <Category
       categoryTitle="Coffee"
       img="https://media.istockphoto.com/photos/hot-coffee-on-wooden-table-picture-id1084020754?k=6&m=1084020754&s=612x612&w=0&h=mmY4i2XQwWpaBkccyGcW1IqL9Suo_CiJqxCUiJpfzy8="/>
    </div>
  )
}

export default Home

