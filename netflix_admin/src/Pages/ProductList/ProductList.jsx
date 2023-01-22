import { DataGrid } from '@material-ui/data-grid';
import { Edit, Delete } from '@material-ui/icons'
import { productRows } from "../../dummyData";
import { Link } from 'react-router-dom';
import { useState } from "react";
import "./ProductList.css"

export default function ProductList() {

    const [data, setData] = useState(productRows);

    const handleDelete = (id)=>{
        setData(data.filter((item)=> item.id !== id))
    }

    const columns = [
        { field: 'id', headerName: 'ID', width: 100 },
        { field: 'product', headerName: 'Product', width: 300, renderCell: (params)=>{
            return(
              <div className="productListUserdata">
                <img src={params.row.img}
                     alt="" className="productListImg"/>
                {params.row.name}
              </div>
            )
          } 
        },
        { field: 'status', headerName: 'Status', width: 150 },
        { field: 'price', headerName: 'Price', width: 150},
        { field: 'stock', headerName: 'Stock', width: 150},
        { field: 'action', headerName: 'Action', width: 150,
          renderCell: (params)=>{
            return(
              <div className="productListActionIcon">
                <Link to={"/products/" + params.row.id}>
                  <Edit className="productListEditActionIcon"/>
                </Link>
                <Delete className="productListDeleteActionIcon" onClick={()=>handleDelete(params.row.id)}/>
              </div>
            )
          }
        },
      ];

    return (
        <div className="productList">
            <DataGrid rows={data} disableSelectionOnClick columns={columns} pageSize={7} checkboxSelection />
        </div>
    )
}
