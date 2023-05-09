import React from "react";
import "../../styles/PauYAndres.css";
import { Header } from "../../components/Header";
import { Banner } from "../../components/Banner";
import { Countdown } from "../../components/Countdown";
import { Itinerary } from "../../components/Itinerary";
import { DressCode } from "../../components/DressCode";
import { Wishlist } from "../../components/Wishlist";
import { RSVP } from "../../components/RSVP";
import { Gallery } from "../../components/Gallery";
import { Recommendations } from "../../components/Recommendations";

export function PauAndres() {
  const bannerImage = "https://pauyandres.com/img/web-pau_andres-03.jpg";

  const recommendations = [
  {
    title: "Hospedaje",
    iconUrl: "https://pauyandres.com/img/web-pau_andres-12.png",
    description: "Te dejamos estas recomendaciones de hoteles que serán de gran ayuda para el día de nuestro evento y tu estadía en Guadalajara.",
    locations: [
      { name: "Hyatt Regency Andares", imageUrl: "", redirectUrl: "" },
      { name: "Hotel Demetria", imageUrl: "", redirectUrl: "" },
      { name: "Wydham Garden Guadalajara Acueducto", imageUrl: "", redirectUrl: "" },
      { name: "Quinta Real", imageUrl: "", redirectUrl: "" },
      { name: "Fiesta Americana", imageUrl: "", redirectUrl: "" },
      { name: "Holiday Inn Express Vallarta Poniente", imageUrl: "", redirectUrl: "" }
    ]
  },
  {
    title: "Restaurantes",
    iconUrl: "https://pauyandres.com/img/web-pau_andres-19.png",
    locations:[
      { name: "Anita Li", imageUrl: "https://pauyandres.com/img/web-pau_andres-20.png", redirectUrl: "" },
      { name: "Restaurante Alcalde", imageUrl: "https://pauyandres.com/img/web-pau_andres-21.png", redirectUrl: "" },
      { name: "La Docena", imageUrl: "https://pauyandres.com/img/web-pau_andres-22.png", redirectUrl: "" },
      { name: "La Tequila", imageUrl: "https://pauyandres.com/img/web-pau_andres-23.png", redirectUrl: "" },
      { name: "Karne Garibaldi", imageUrl: "https://pauyandres.com/img/web-pau_andres-24.png", redirectUrl: "" },
      { name: "Il Duomo", imageUrl: "https://pauyandres.com/img/web-pau_andres-25.png", redirectUrl: "" },
    ]
  },
  {
    title: "Street food",
    iconUrl: "https://pauyandres.com/img/web-pau_andres-26.png",
    locations:[
      { name: "Tortas Toño", imageUrl: "", redirectUrl: "" },
      { name: "Los Alteños", imageUrl: "", redirectUrl: "" },
      { name: "Tacos Omar Carlos", imageUrl: "", redirectUrl: "" },
    ]

  },
  {
    title: "Turismo",
    iconUrl: "https://pauyandres.com/img/web-pau_andres-30.png",
    description: "Te dejamos estas recomendaciones de lugares imprescindibles que no te puedes perder a lo largo de tu estadía en Guadalajara.",
    locations: [
      { name: "San Pedro Tlaquepaque", imageUrl: "", redirectUrl: "" },
      { name: "Tequila Jalisco", imageUrl: "", redirectUrl: "" },
      { name: "Tapalpa Pueblo Mágico", imageUrl: "", redirectUrl: "" },
      { name: "Visitar el Centro de Guadalajara", imageUrl: "", redirectUrl: "" },
      { name: "Lago de Chapala", imageUrl: "", redirectUrl: "" },
      { name: "Calaverandia parque temático día de muertos", imageUrl: "", redirectUrl: "" }
    ]
  }];

  return (
    <div id="template">
    <div className="banner-container">
      <Header />
      <Banner bannerImage={bannerImage} />
    </div>
      <Countdown />
      <Itinerary />
      <DressCode />
      <Wishlist/>
      <RSVP/>
      <h2 className="text-center">RECOMENDACIONES</h2>
      <Recommendations recommendationsObject={recommendations[0]} containerClassName="gray-background"/>
      <Recommendations recommendationsObject={recommendations[1]}/>
      <Recommendations recommendationsObject={recommendations[2]} containerClassName="gray-background"/>
      <Recommendations recommendationsObject={recommendations[3]}/>
      <Gallery />
      <div className="row w-100">
        <img className="img" src="https://pauyandres.com/img/web-pau_andres-40.png" aria-label="Pau y Andrés"/>
      </div>
      <div className="row w-100 my-4 text-center">
        <p style={{ margin: "auto" }}> Pau & Andrés Made by <a type="link" href="https://www.instagram.com/puntodoce.mx/" target="_blank" rel="noreferrer"><img className="punto-12-img" src="https://pauyandres.com/img/web-pau_andres-41.png" alt="PuntoDoce.mx" aria-label="PuntoDoce.mx"/></a></p>
      </div>
    </div>
  );
}
