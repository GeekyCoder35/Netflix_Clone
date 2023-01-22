import "./NewUser.css"

export default function newUser() {
  return (
    <div className='newUser'>
      <h2 className="newUserTitle">Create a new User</h2>
      <form className="newUserForm">
        <div className="newUserItem">
            <label>Full name</label>
            <input type="text" placeholder="Enter name"/>
        </div>
        <div className="newUserItem">
            <label>Username</label>
            <input type="text" placeholder="Enter username"/>
        </div>
        <div className="newUserItem">
            <label>Email</label>
            <input type="email" placeholder="Enter email address"/>
        </div>
        <div className="newUserItem">
            <label>Password</label>
            <input type="password" placeholder="Enter password"/>
        </div>
        <div className="newUserItem">
            <label>Phone</label>
            <input type="text" placeholder="Enter phone"/>
        </div>
        <div className="newUserItem">
            <label>Gender</label>
            <div className="newUserGenderContainer">
                <input type="radio" name="gender" id="male" value="Male"/>
                <label htmlFor="male" id="male">Male</label>
                <input type="radio" name="gender" id="female" value="Female"/>
                <label htmlFor="female" id="female">Female</label>
                <input type="radio" name="gender" id="others" value="Others"/>
                <label htmlFor="others" id="others">Others</label>
            </div>
        </div>
        <div className="newUserItem">
            <label>Address</label>
            <input type="text" placeholder="Enter address"/>
        </div>
        <div className="newUserItem">
            <label>Active</label>
            <select name="active" id="active" className="newUserStatus">
                <option value="Yes">Yes</option>
                <option value="No">No</option>
            </select>
        </div>
        <button className="newUserButton">Create</button>
      </form>
    </div>
  )
}
