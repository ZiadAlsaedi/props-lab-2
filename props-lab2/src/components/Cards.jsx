import React from 'react'

const Cards = (props) => {
  return (
    <>
    <div className="card m-2" >
    <img className="card-img-top" src={props.image} alt="Card image cap"/>
<div className="card-body">
<h5 className="card-title">{props.title}</h5>
<p className="card-text">{props.text}</p>
<ul className="list-group list-group-flush">
<li className="list-group-item">{"Price: "+props.price}</li>
<li className="list-group-item">{"Quntity: "+props.quntity}</li>
<li className="list-group-item">{"Color: "+props.color}</li>
</ul>
</div>
</div>

</>

 )
}

export default Cards