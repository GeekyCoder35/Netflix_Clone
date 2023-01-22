import { ArrowBackOutlined } from "@material-ui/icons"
import "./Watch.scss"
import {Link, useLocation} from 'react-router-dom';

export default function Watch() {
  const location = useLocation();
  const movie = location.state;
  //console.log(movie);
  return (
    <div className='watch'>
        <Link to="/" className="link">
          <div className="back">            
              <ArrowBackOutlined/> Go back          
          </div>
        </Link>
        <video controls autoPlay={true} progress>
            <source src={movie.video}/>
        </video>
    </div>
  )
}
