import { InfoOutlined, PlayArrow } from "@material-ui/icons";
import axios from "axios";
import { useState, useEffect } from "react";
import "./Featured.scss"

export default function Featured({type}) {
    const[content, setContent] = useState({});

    useEffect(() => {
        const getRandomContent = async ()=> {
            const featured = await axios.get(`/movies/random?type=${type}`, {headers:{
                token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzY2E0MTI4NTIxYTEzYjQxYjQ3MzEwMCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3NDE5OTM0OSwiZXhwIjoxNjc0NjMxMzQ5fQ.Nr0x2kk19J4Rd_dqpMMi9sx4E1y4wG00EcQ7sQveMGU"
            }});
            setContent(featured.data[0]);
        }

        getRandomContent();
    }, [type])

  return (
    <div className="featured">
        {
            type && (
                <div className="category">
                    <span>{type==='movie'?"Movies":"Series"}</span>
                    <select name="" id="">
                        <option>Genre</option>
                        <option value="Adventure">Adventure</option>
                        <option value="Comedy">Comedy</option>
                        <option value="Thriller">Thriller</option>
                        <option value="Mystery">Mystery</option>
                        <option value="Horror">Horror</option>
                        <option value="Sci-Fi">Sci-Fi</option>
                        <option value="Animation">Animation</option>
                        <option value="Drama">Drama</option>
                        <option value="Documentary">Documentary</option>
                    </select>
                </div>
            )
        }
        <img src={content.img}
             alt=""/>

        <div className="info">
            <img src={content.imgTitle}
                alt=""/>
            <span className="desc">
                {content.desc};
            </span>

            <div className="buttons">
                <button className="play">
                    <PlayArrow/>
                    <span>Play</span>
                </button>
                <button className="more">
                    <InfoOutlined/>
                    <span>Info</span>
                </button>
            </div>
        </div>
    </div>
  )
}
