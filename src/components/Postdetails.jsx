import {useState,useEffect} from "react"

import { useParams, useNavigate } from "react-router-dom"
import { fetchPosts } from "../api/auth";


const SpecificPost =()=>{

  const nav = navigate();

  const {dP} = useParams();

  const[singlePost,setSinglePost] = useState({});

  if(post === dP){


  }


}

export default SpecificPost ; 