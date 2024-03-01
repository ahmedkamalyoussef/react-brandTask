import React from 'react';
import SNEAKERS from "../data/data";

function Card(props) {
    let data = SNEAKERS.filter((sneaker) => {
        return sneaker.brand.toLowerCase().includes(props.name.toLowerCase());
        
    });
    if (props.name === "All") {
        data = SNEAKERS
    }
    {console.log(data)}

    
    


        return (
            <>
            
                {data.map((sneaker, index) => (
                    <div key={index} className="col-4 card mt-5 text-center m-1 p-2" style={{ width: '12rem' }}>
                        <img src={sneaker.imageUrl} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{sneaker.brand}</h5>
                            <p className="card-text">{sneaker.colorway}</p>
                            <p className="card-text">{sneaker.model}</p>
                        </div>
                    </div>
                ))}
            </>
        );
    
}

export default Card;
