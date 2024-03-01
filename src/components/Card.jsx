import React from 'react'
import SNEAKERS from "../data/data"

function Card(props) {
    const data = SNEAKERS
        if (props.name==="All") {
             return (
                <>              
                {data.map(((e)=>(                    
                    <>
    
                    <div className="col card mt-5 m-1 p-2" style={{width: '18rem'}}>
                        <img src={e.imageUrl} className="card-img-top" alt="..." />
                        <div className="card-body">
                           <h5 className="card-title">{e.brand}</h5>
                           <p className="card-text">{e.colorway}</p>
                           <p className="card-text">{e.model}</p>
                       </div>                           
                    </div>                            
                    </>
                    )
                ))}
                </>
             )
        }else{
            for (const key in data) {
                if (data[key].brand===props.name) {
                return(
                <>
                    <div className="col-6 card mt-5 text-center" style={{width: '200px'}}>
                        <img src={data[key].imageUrl} className="card-img-top" alt="..." />
                        <div className="card-body">
                           <h5 className="card-title">{data[key].brand}</h5>
                           <p className="card-text">{data[key].colorway}</p>
                           <p className="card-text">{data[key].model}</p>
                        </div>
                   </div>
                </>
            )
                }
            }
        }

 
}

export default Card
