import React from "react";
import {Link} from "react-router-dom";

function Producto(props){
    const{data} = props
    return(
            <div className="card col-md-3 text-center m-3 pt-3" style={{backgroundColor: 'black', borderColor: 'darkgoldenrod', borderRadius: '4%', border: '2px solid darkgoldenrod'}}>
                <img src={data.image} className="card-img-top w-25" alt={data.name}/>
                <div className="card-body">
                    <h5 className="card-title">{data.name}</h5>
                    <button className="btn btn-dark btn-sm mt-2"><Link to={"/producto/"+data.current_price+data.id} style={{textDecoration: 'none'}}><span className="text-white">Mas detalles</span></Link></button>
                </div>
            </div>
    );
}
export default Producto;