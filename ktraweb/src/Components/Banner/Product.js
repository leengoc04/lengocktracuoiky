import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Product = (props) => {
  const url = "http://localhost:8080/api/dataweb/findAll";
  const [product,setProduct]= useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url, {
            headers: {
              'Access-Control-Allow-Origin': 'http://localhost:3000',
              // Add other headers if needed
            }
          }); // Replace with your API endpoint
        setProduct(response.data);
        console.log(response.data)
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();
  }, []);
    
  return (
    <>
    
    <div style={{display: "flex"}} >
      {product.map((item) => (
        <div key={item.id}>
          <h3>{item.name}</h3>
          <p>{item.type}</p>
          <p>{item.desc}</p>
          <p>{item.price}</p>
          <img src={item.image} alt="" style={{height: "100px", width: "100px"}}/>

        </div>
      ))}
    </div>
    </>
  );
};

export default Product;
