import React, { Component } from 'react';
import ItemCart from './cart/Item';
import data1 from './data1';





const ProductContainer = () => {
    console.log("datatata",data1.productData)
    console.warn(data1.productData)
  return (
    
        <div>
            <h1 className='text-center mt-3'>All products</h1>
            <section className='py-4 container'>
                <div className='row justify-content-center'>
                {data1.productData.map((item, index) => {
                    return(
                        <ItemCart 
                            img={item.img}
                            title={item.title}
                            desc={item.desc} 
                            price={item.price} 
                            
                            item={item} 
                            key={index} 

                        />
                    )
                })}
                    
                </div>
            </section>
        </div>
  
)
}

export default ProductContainer