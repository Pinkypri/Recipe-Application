 import React,{useEffect,useState} from "react"
 import axios from "../helpers/axios";
 import RecipeCards from "./RecipeCards"
 const Result = ({selectedOption}) => {
    const [recipe, setrecipe] = useState([])
    useEffect(() => {
        const fetchData=async()=>{
            const request=await axios.get(selectedOption);
         
            setrecipe(request.data.results);
        };
      
        fetchData()
    }, [selectedOption])
    return (
        <div>
          {
              recipe.map((recipe)=>(
                  
                <RecipeCards key={recipe.id} recipe={recipe}/>
              ))
          }
        </div>
    )
}

export default Result
