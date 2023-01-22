import "./WidgetSm.css";
import { Visibility } from "@material-ui/icons";

export default function widgetSm() {
  return (
    <div className='widgetSm'>
      <h4 className="widgetSmTitle">New Joined members</h4>
      <ul className="widgetSmList">
        <li className="widgetSmListItem">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtbVgc1mbdh2kZxaknkXbUMONPtSBZniDYvQ&usqp=CAU"
                 className="widgetSmImg" alt="img"/>

            <div className="widgetSmUser">
                <span className="widgetSmUsername">Allen Keller</span>
                <span className="widgetSmJobTitle">Software Development Engineer</span>
            </div>
            <button className="widgetSmButton">
                <Visibility className="widgetSmIcon"/> Display
            </button>
        </li>
        
        <li className="widgetSmListItem">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtbVgc1mbdh2kZxaknkXbUMONPtSBZniDYvQ&usqp=CAU"
                 className="widgetSmImg" alt="img"/>

            <div className="widgetSmUser">
                <span className="widgetSmUsername">Allen Keller</span>
                <span className="widgetSmJobTitle">Software Development Engineer</span>
            </div>
            <button className="widgetSmButton">
                <Visibility className="widgetSmIcon"/> Display
            </button>
        </li>

        <li className="widgetSmListItem">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtbVgc1mbdh2kZxaknkXbUMONPtSBZniDYvQ&usqp=CAU"
                 className="widgetSmImg" alt="img"/>

            <div className="widgetSmUser">
                <span className="widgetSmUsername">Allen Keller</span>
                <span className="widgetSmJobTitle">Software Development Engineer</span>
            </div>
            <button className="widgetSmButton">
                <Visibility className="widgetSmIcon"/> Display
            </button>
        </li>

        <li className="widgetSmListItem">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtbVgc1mbdh2kZxaknkXbUMONPtSBZniDYvQ&usqp=CAU"
                 className="widgetSmImg" alt="img"/>

            <div className="widgetSmUser">
                <span className="widgetSmUsername">Allen Keller</span>
                <span className="widgetSmJobTitle">Software Development Engineer</span>
            </div>
            <button className="widgetSmButton">
                <Visibility className="widgetSmIcon"/> Display
            </button>
        </li>
      </ul>
    </div>
  )
}
