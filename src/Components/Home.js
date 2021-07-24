
import React,{useState} from 'react'
import Recipe from './Recipe'
import requests from '../helpers/requests';
import Result from "./Result"


const Home = () => {
  const [selectedOption, setselectedOption] = useState(requests.fetchGreek);
  return (
    <div>
      <Recipe setselectedOption={setselectedOption}/>
      <Result selectedOption={selectedOption}/>
    </div>
  )
}

export default Home

