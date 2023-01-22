import { Add, PlayArrow, ThumbDownAltOutlined, ThumbUpAltOutlined } from "@material-ui/icons"
import "./ListItem.scss"
import { useState, useEffect } from "react";
import axios from "axios";
import {Link} from 'react-router-dom';

export default function ListItem({index, item}) {
  const [isHovered, setIsHovered] = useState(false);
  const [movie, setMovie] = useState({});

  useEffect(()=>{
    const getMovieDetails = async()=>{
      try {
        const movieContent = await axios.get("/movies/find/"+item, {
          headers:{
            token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzY2E0MTI4NTIxYTEzYjQxYjQ3MzEwMCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3NDE5OTM0OSwiZXhwIjoxNjc0NjMxMzQ5fQ.Nr0x2kk19J4Rd_dqpMMi9sx4E1y4wG00EcQ7sQveMGU"
          }
        });
        setMovie(movieContent.data)
      } catch (error) {
        console.log("sry!! error");
      }
    }
    getMovieDetails();
  },[item])
  
  return (
    <Link to="/watch" state = {movie}>
      <div className='listItem'
          onMouseEnter={()=>setIsHovered(true)} 
          onMouseLeave={()=>setIsHovered(false)}
          style={{left: isHovered && index * 225 - 50 + index *2.5}}>
        <img src={movie.img}
            alt="" />

        {isHovered && (
          <>
            <video autoPlay={true} loop>
              <source src={movie.trailer} type="video/mp4"/>
            </video>
            <div className="itemInfo">
              <div className="icons">
                <PlayArrow className="icon"/>
                <Add className="icon"/>
                <ThumbUpAltOutlined className="icon"/>
                <ThumbDownAltOutlined className="icon"/>
              </div>

              <div className="itemInfoTop">
                <span>2 hr 4 min</span>
                <span className="ageLimit">{movie.limit}</span>
                <span>{movie.year}</span>
              </div>
              <div className="desc">
                {movie.desc}
              </div>
              <div className="genre">{movie.genre}</div>
            </div>
          </>
        )}
      </div>
    </Link>
  )
}
