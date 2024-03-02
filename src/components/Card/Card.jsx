import React from 'react';
import SNEAKERS from "../../data/data";
import "./Card.css"
function Card(props) {
    
    let data = SNEAKERS.filter((sneaker) => {
        return (
            sneaker.brand.toLowerCase().includes(props.name.toLowerCase()) ||
            sneaker.model.toLowerCase().includes(props.name.toLowerCase()) ||
            sneaker.colorway.toLowerCase().includes(props.name.toLowerCase())
        );
    });
    
    if (props.name === "All") {
        data = SNEAKERS
    }

    {console.log(data)}
        return (
            <>
                {data.map((sneaker, index) => (
                    <div key={index} className="col-6 card mt-2 text-center p-2 m-1 justify-content-between" style={{ width: '13rem' }}>
                        <img src={sneaker.imageUrl} className="card-img-top" alt="..." />
                        <div className="card-body ">
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
