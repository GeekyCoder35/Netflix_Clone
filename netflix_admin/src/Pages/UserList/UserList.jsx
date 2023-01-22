import "./UserList.css"
import { DataGrid } from '@material-ui/data-grid';
import {Edit, Delete} from '@material-ui/icons'
import { userRows } from "../../dummyData";
import {Link} from 'react-router-dom';
import { useState } from "react";

export default function UserList() {

  const [data, setData] = useState(userRows);

  const handleDelete = (id)=>{
    setData(data.filter((item)=> item.id !== id))
  }

  const columns = [
    { field: 'id', headerName: 'ID', width: 100 },
    { field: 'user', headerName: 'User name', width: 200, renderCell: (params)=>{
        return(
          <div className="userListUserdata">
            <img src={params.row.avatar}
                 alt="" className="userListImg"/>
            {params.row.firstName}
          </div>
        )
      } 
    },
    { field: 'email', headerName: 'Email', width: 250 },
    { field: 'transaction', headerName: 'Transaction', width: 150},
    { field: 'status', headerName: 'Status', width: 150},
    { field: 'action', headerName: 'Action', width: 120,
      renderCell: (params)=>{
        return(
          <div className="userListActionIcon">
            <Link to={"/user/" + params.row.id}>
              <Edit className="userListEditActionIcon"/>
            </Link>
            <Delete className="userListDeleteActionIcon" onClick={()=>handleDelete(params.row.id)}/>
          </div>
        )
      }
    },
  ];

  return (
    <div className="UserList">
        <DataGrid rows={data} disableSelectionOnClick columns={columns} pageSize={7} checkboxSelection />
    </div>
  )
}
