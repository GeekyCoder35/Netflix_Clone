import "./NewProduct.css"

export default function NewProduct() {
  return (
    <div className='newproduct'>
      <h1 className="newProductTitle">Add new Product</h1>
      <form className="newProductForm">
        <div className="newProductFormItem">
            <label for="file">Image</label>
            <input type="file" id="file" name="file" />
        </div>
        <div className="newProductFormItem">
            <label for="productName">Name</label>
            <input type="text" id="productName" name="productName" />
        </div>
        <div className="newProductFormItem">
            <label for="stock">Stock</label>
            <input type="text" id="stock" name="stock" />
        </div>
        <div className="newProductFormItem">
            <label for="active">Active</label>
            <select id="active" name="active">
                <option value="Yes">Yes</option>
                <option value="No">No</option>
            </select>
        </div>
        <button className="newProductFormButton">Add</button>
      </form>
    </div>
  )
}
