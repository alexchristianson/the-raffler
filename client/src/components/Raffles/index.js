import React from 'react';
import img1 from '';
import img2 from '';
import img3 from '';
import img4 from '';
import img5 from '';



const Products = [
    {
        
    },    
    {
        
    },
    
    {
        
    },     
    {
        
    },  
    {
       
    },    
    
]

function Raffles() {
    return (
        <div className='row justify-content-center me-5'>
          <h1 className="title mb-5">Raffles</h1>
          {products.map(function(products) {
            return <Card 
                name={product.name}
                description={product.description}
                image={product.image}
            />
        })}
        </div>
    );
}

export default Raffles;