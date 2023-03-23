import { useEffect, useState } from "react";
import {useParams,useNavigate} from 'react-router-dom';

const UpdateProduct=()=>{
   const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');
  const [company, setCompany] = useState('');
 
  const params=useParams();
  const navigate=useNavigate();

  useEffect(()=>{
    getProductDetails()
  },[])

  const getProductDetails=async()=>{
// console.log(params)
let result=fetch(`http://localhost:5000/product/${params.id}`);
result=await (await result).json();

// console.log(result)
setName(result.name);
setPrice(result.price);
setCategory(result.category);
setCompany(result.company)
  }

  const updateProduct = async () => {
console.log(name,price,category,company);
let result=await fetch(`http://localhost:5000/product/${params.id}`,{
  method:'Put',
  body:JSON.stringify({name,price,category,company}),
  headers:{
    'content-Type':'application/json'
  }
})
result=await result.json();
console.log(result)
navigate('/')
  }
  return (
    <div className="addProduct">
      <h1 className='product'>Add Product</h1>

      <input type="text" placeholder="Enter Product Name" className='inputfield'
        onChange={(e) => setName(e.target.value)} value={name} />
     
<input type="text" placeholder="Enter Product Price" className='inputfield'
        onChange={(e) => setPrice(e.target.value)} value={price} />
          
<input type="text" placeholder="Enter Product Category" className='inputfield'
        onChange={(e) => setCategory(e.target.value)} value={category} />
          
<input type="text" placeholder="Enter Product Company" className='inputfield'
        onChange={(e) => setCompany(e.target.value)} value={company} />
           
            <button className='signup-btn' onClick={updateProduct}>Update Product</button>
    </div>
  )
  }


export default UpdateProduct;