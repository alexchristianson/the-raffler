import React from 'react';
import img1 from '../../assets/img/cuc.jpg';
import img2 from '../../assets/img/shrekbeard.jpg';
import img3 from '../../assets/img/loan.jpg';
import img4 from '../../assets/img/angrycat.jpg';
import img5 from '';



const products = [
    {
        name: "Cucumber",
        description: "Sweet Savory Cucumber",
        image: img1
    },    
    {
        name: "Shrek Beard",
        description: "Painting of Shrek Beard, complete with matching fedora",
        image: img2,
    },
    
    {
        name: "Payday Loan",
        description: "Payday loan varying from $5-500",
        image: img3
    },     
    {
        name: "Angry cat",
        description: "Angry fluffy cat",
        image: img4
    },  
    {
        name: "Quarter",
        Description: "Shiny new quarter",
        image: img5
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