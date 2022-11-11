import React from 'react';

const Card =({titulo,descripcion,img,color}) =>{

return <div className="card" style={{"width": "25%"}}>
  <img src={img} className="card-img-top" alt="..." height={200}/>
  <div className="card-body d-flex flex-column">
    <div className="title">
    <h5 className="card-title">{titulo}</h5>
    </div>
    <div className="description" style={{"margin-bottom": "5%"}}>
    <p className="card-text">{descripcion}</p>
    </div>
    <div className="button mt-auto">
    <a href="#" className="btn btn-primary " style={{"backgroundColor":colores(),"border-color":"white"}}>{color}</a>
    </div>
  </div>
</div>
}

let colores= function randomColor() {
  var myRandomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
   return myRandomColor;
}

export default Card;