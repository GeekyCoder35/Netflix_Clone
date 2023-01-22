import { Link } from "react-router-dom";
import "./Product.css";
import Chart from "../../components/Chart/Chart";
import {Productdata} from "../../dummyData";
import { Publish } from "@material-ui/icons";

export default function Product() {
  return (
    <div className="product">
      <div className="productTitleContainer">
        <h1 className="productTitle">Product Details</h1>
        <Link to="/newProduct">
            <button className="productTitleButton">Create</button>
        </Link>
      </div>
      <div className="productTop">
        <div className="productTopLeft">
            <Chart data={Productdata} dataKey="Sales" title="Sales Performance"/>
        </div>
        <div className="productTopRight">
            <div className="productInfoTop">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyO749mMHKbP5v4lsS3Qz34oVy8gX5LRYX2anxIGLHGdKWzqeac-SH3hgZuWrororuJ1Y&usqp=CAU" 
                     alt="" className="productInfoImg" />                
            </div>
            <div className="productInfoBottom">
                <span className="productInfoName">Apple airpods</span>
                <div className="productInfoItem">
                    <span className="productInfoKey">Sales:</span>
                    <span className="productInfoValue">$5123</span>
                </div>
                <div className="productInfoItem">
                    <span className="productInfoKey">Active:</span>
                    <span className="productInfoValue">Yes</span>
                </div>
                <div className="productInfoItem">
                    <span className="productInfoKey">In Stock:</span>
                    <span className="productInfoValue">No</span>
                </div>
            </div>
        </div>
      </div>
      <h2 className="productEditTitle">Edit Product details</h2>
      <div className="productBottom">          
        <form className="productForm">            
            <div className="productFormLeft">
                <label>Product Name</label>
                <input type="text" placeholder="Name" />
                <label>In stock</label>
                <select name="inStock" id="stock" >
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                </select> 
                <label>Active</label>
                <select name="active" id="active" >
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                </select> 
            </div>

            <div className="productFormRight">
                <div className="productUpload">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyO749mMHKbP5v4lsS3Qz34oVy8gX5LRYX2anxIGLHGdKWzqeac-SH3hgZuWrororuJ1Y&usqp=CAU" 
                         alt="" className="productUploadImg" />
                    <label htmlFor="file"><Publish/></label>
                    <input type="file" id="file" style={{ display: "none"}}/>
                </div>
                <button className="productUpdateButton">Update</button>                
            </div>

        </form>
      </div>
    </div>
  )
}
