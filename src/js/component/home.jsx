import React from "react";

//include images into your bundle
import Navbar from "./navbar.jsx";
import Jumbotron from "./jumbotron.jsx";
import Card from "./card.jsx";
import Footer from "./footer.jsx";

//create your first component
const Home = () => {
	const datos=[{
		titulo:"Nieve",
		descripcion:"La nieve son pequeños cristales de hielo, que se forman por congelación del agua en la tropósfera, se pueden agrupar y llegar a la tierra en forma de copos blancos.",
		img:"https://w0.peakpx.com/wallpaper/93/907/HD-wallpaper-colorful-sunset-trees-snow-landscape-winter-sky.jpg",
		color:"Saber más"
	},
	{
		titulo:"Mar",
		descripcion:"El término mar se utiliza mayormente para designar, por un lado, a aquella masa de agua salada que posee un tamaño inferior al del océano, pero también con la misma palabra se denomina al conjunto de la masa de agua salada que recubre la mayor parte del planeta tierra, incluyéndose en ella a los mares menores y océanos.",
		img:"https://services.meteored.com/img/article/o-que-e-o-dipolo-do-oceano-indico-212741-1_768.jpg",
		color:"Saber más"
	},
	{
		titulo:"Desierto",
		descripcion:"Un desierto es un bioma de clima árido, en donde las precipitaciones son escasas. Estos suelen poseer poca vida, pero eso depende del tipo de desierto; en muchos existe vida abundante, la vegetación se adapta a la poca humedad y la fauna usualmente se resguarda durante el día para preservar humedad",
		img:"https://nuestroclima.com/wp-content/uploads/2022/04/desierto.jpg",
		color:"Saber más"
	},
	{
		titulo:"Bosque",
		descripcion:"Los bosques son ecosistemas abundantes en vegetación de altura, por lo general árboles y plantas frondosos y de copa ancha, que además sirven de hábitat a un número importante de especies animales.",
		img:"https://dbdzm869oupei.cloudfront.net/img/quadres/preview/41633.png",
		color:"Saber más"
	}]

	const banner=[{
		titulo:"Bienvenidos",
		parrafo:"En esta landings se está utilizando componentes.",
		mensaje:"Para cambiar el color de los botones en las cards, presiona el siguiente botón llamado 'Presioname'",
		boton:"Presioname" 
	}]

	return (
		<div className="container-fluid">
			<Navbar/>
			<div className="container my-5" style={{"padding-top":"1%"}}>
				{banner.map((objeto, posicion)=>{
						return <Jumbotron titulo = {objeto.titulo}
						parrafo = {objeto.parrafo}
						mensaje = {objeto.mensaje}
						boton = {objeto.boton} />
					})}
				<div className="d-flex justify-content-center my-5">
					{datos.map((objeto, posicion)=>{
						return <Card titulo = {objeto.titulo}
						descripcion = {objeto.descripcion}
						img = {objeto.img}
						color = {objeto.color} />
					})}
				</div>
			</div>
			<Footer/>
		</div>
		
	);
};

export default Home;
