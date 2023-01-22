import Featured from "../../Components/Featured/Featured"
import List from "../../Components/List/List"
import Navbar from "../../Components/Navbar/Navbar"
import "./Home.scss";
import { useState, useEffect } from "react";
import axios from 'axios';

export default function Home({type}) {
  const [lists, setlists] = useState([]);
  const [genre, setgenre] = useState(null);

  useEffect(() => {
    const getRandomLists = async () => {
      try {
        const resLists = await axios.get(`lists${type ? "?type="+type : ""}${genre ? "&genre=" + genre : ""}`, {
          headers:{
            token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzY2E0MTI4NTIxYTEzYjQxYjQ3MzEwMCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3NDE5OTM0OSwiZXhwIjoxNjc0NjMxMzQ5fQ.Nr0x2kk19J4Rd_dqpMMi9sx4E1y4wG00EcQ7sQveMGU"
          }
        })
        setlists(resLists.data);
      } catch (error) {
        console.log("sry an error occured");
      }
    }
    getRandomLists();
  }, [type, genre])

  return (
    <div className="home">
        <Navbar/>   
        <Featured type={type}/>
        {
          lists.map((list)=>(
            <List list={list}/>      
          ))
        }        
    </div>
  )
}
