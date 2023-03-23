
import { useState } from 'react';
import './App.css';

const AddProduct = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');
  const [company, setCompany] = useState('');
  const [error, setError] = useState(false);

  const addProduct = async () => {

if(!name && !price && !category && !company){
  setError(true)
  return false;
}

    console.log(name, price, category, company);
    const userID = await JSON.parse(localStorage.getItem("user"))._id;

    let result = await fetch("http://localhost:5000/add-product", {
      method: "post",
      body: JSON.stringify({ name, price, category, company, userID }),
      headers: {
        "content-Type": "application/json"
      }
    })
    result = await result.json();
    console.log(result)
  }
  return (
    <div className="addProduct">
      <h1 className='product'>Add Product</h1>

      <input type="text" placeholder="Enter Product Name" className='inputfield'
        onChange={(e) => setName(e.target.value)} value={name} />
       {error && !name &&<span className='invalid-text'>Enter Valid Name</span>} 

      <input type="text" placeholder="Enter Product Price" className='inputfield'
        onChange={(e) => setPrice(e.target.value)} value={price} />
            {error && !price &&<span className='invalid-text'>Enter Valid Price</span>} 

      <input type="text" placeholder="Enter Product Category" className='inputfield'
        onChange={(e) => setCategory(e.target.value)} value={category} />
            {error && !category &&<span className='invalid-text'>Enter Valid Category</span>} 

      <input type="text" placeholder="Enter Product Company" className='inputfield'
        onChange={(e) => setCompany(e.target.value)} value={company} />
            {error && !company &&<span className='invalid-text'>Enter Valid Company</span>} 

      <button className='signup-btn' onClick={addProduct}>Add Product</button>
    </div>
  )
}
export default AddProduct;