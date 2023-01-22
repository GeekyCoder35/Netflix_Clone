import "./User.css"
import {CalendarToday, LocationSearching, MailOutline, PermIdentity, PhoneAndroid, Publish} from '@material-ui/icons';
import { Link } from "react-router-dom";

export default function User() {
  return (
    <div className="user">
      <div className="userTitleContainer">
        <h2 className="userTitle">Edit User </h2>
        <Link to="/newUser">
          <button className="userAddButton">Create</button>
        </Link>
      </div>
      <div className="userContainer">
        <div className="userShow">
            <div className="userShowTop">
                <img src="https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHBvcnRyYWl0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                     alt="" className="userShowImg" />
                <div className="userShowTitle">
                    <span className="userShowName">Jamie</span>
                    <span className="userShowJobTitle">Software Developer</span>
                </div>                
            </div>
            <div className="userShowBottom">
              <span className="userButtomAccountDetails">Account information</span>
              <div className="showUserButtomInfo">
                <PermIdentity className="showUserButtomUserDetailsIcon"/> 
                <span className="userShowInfoTitle">Jamie.lan45 </span>
              </div>
              <div className="showUserButtomInfo">
                <CalendarToday className="showUserButtomUserDetailsIcon"/> 
                <span className="userShowInfoTitle">25.12.1999</span>
              </div>

              <span className="userButtomContactDetails">Contact information</span>
              <div className="showUserButtomInfo">
                <PhoneAndroid className="showUserButtomUserDetailsIcon"/> 
                <span className="userShowInfoTitle">+91 8584060678 </span>
              </div>
              <div className="showUserButtomInfo">
                <MailOutline className="showUserButtomUserDetailsIcon"/> 
                <span className="userShowInfoTitle">Jamie.lan45@gmail.com </span>
              </div>
              <div className="showUserButtomInfo">
                <LocationSearching className="showUserButtomUserDetailsIcon"/> 
                <span className="userShowInfoTitle">Sydney | Australia </span>
              </div>
            </div>
        </div>
        <div className="userUpdate">
            <h3 className="userUpdateTitle">Edit</h3>
              <div className="userUpdateForm">
                <div className="userUpdateFormLeft">
                  <div className="userUpdateItem">
                    <label className="userUpdateItem">Username:</label>
                    <input type="text" placeholder="Jamie.lan45" className="userUpdateInput"/>
                  </div>

                  <div className="userUpdateItem">
                    <label className="userUpdateItem">Full Name:</label>
                    <input type="text" placeholder="Jamie" className="userUpdateInput"/>
                  </div>

                  <div className="userUpdateItem">
                    <label className="userUpdateItem">Date of Birth</label>
                    <input type="date" placeholder="25/12/1999" className="userUpdateInput"/>
                  </div>

                  <div className="userUpdateItem">
                    <label className="userUpdateItem">Email</label>
                    <input type="email" placeholder="Jamie.lan45@gmail.com" className="userUpdateInput"/>
                  </div>

                  <div className="userUpdateItem">
                    <label className="userUpdateItem">Phone Number</label>
                    <input type="text" placeholder="+91 8584060678" className="userUpdateInput"/>
                  </div>

                  <div className="userUpdateItem">
                    <label className="userUpdateItem">Address</label>
                    <input type="textarea" placeholder="Sydney | Australia" className="userUpdateInput"/>
                  </div>
                </div>

                <div className="userUpdateFormRight">
                  <div className="userUpdateUpload">
                    <img src="https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHBvcnRyYWl0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" 
                         alt="" className="userUpdateImg"/>
                    <label htmlFor="file"><Publish/></label>
                    <input type="file" id="file" style={{ display: "none" }}/>
                  </div>
                  <button className="userUpdateButton">Update</button>
                </div>                                
              </div>
        </div>
      </div>
    </div>
  )
}
