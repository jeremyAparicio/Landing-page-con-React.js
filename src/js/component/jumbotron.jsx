import React from 'react';

export default function Jumbotron({titulo,parrafo,mensaje,boton}){
return <div className="jumbotron">
  <h1 className="display-4">{titulo}</h1>
  <p className="lead">{parrafo}</p>
  <hr className="my-4"/>
  <p>{mensaje}</p>
  <a className="btn btn-primary btn-lg" href="#" role="button" onClick={() => window.location.reload()}>{boton}</a>
</div>
}