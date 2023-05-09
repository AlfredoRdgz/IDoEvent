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
      { name: "Hyatt Regency Andares", imageUrl: "https://pauyandres.com/img/web-pau_andres-13.jpg", redirectUrl: "https://goo.gl/maps/NTQnipbDMs4BFuui9" },
      { name: "Hotel Demetria", imageUrl: "https://pauyandres.com/img/web-pau_andres-14.jpg", redirectUrl: "https://goo.gl/maps/7hSpmUHjLtH1id4e7" },
      { name: "Wydham Garden Guadalajara Acueducto", imageUrl: "https://pauyandres.com/img/web-pau_andres-15.jpg", redirectUrl: "https://goo.gl/maps/BUTgZJkC5D9PGFKV8" },
      { name: "Quinta Real", imageUrl: "https://pauyandres.com/img/web-pau_andres-16.jpg", redirectUrl: "https://goo.gl/maps/oMSpjqWhYT7v7DRF9" },
      { name: "Fiesta Americana", imageUrl: "https://pauyandres.com/img/web-pau_andres-17.jpg", redirectUrl: "https://goo.gl/maps/nHFDTx2nUfGJHVDJ7" },
      { name: "Holiday Inn Express Vallarta Poniente", imageUrl: "https://pauyandres.com/img/web-pau_andres-18.jpg", redirectUrl: "https://goo.gl/maps/FgV5a6byZSckUJjX9" }
    ]
  },
  {
    title: "Restaurantes",
    iconUrl: "https://pauyandres.com/img/web-pau_andres-19.png",
    locations:[
      { name: "Anita Li", imageUrl: "https://pauyandres.com/img/web-pau_andres-20.png", redirectUrl: "https://goo.gl/maps/ikzdXgn5Kpk34yiC7" },
      { name: "Restaurante Alcalde", imageUrl: "https://pauyandres.com/img/web-pau_andres-21.png", redirectUrl: "https://goo.gl/maps/LE1TYWwpDKa2tbQR6" },
      { name: "La Docena", imageUrl: "https://pauyandres.com/img/web-pau_andres-22.png", redirectUrl: "https://goo.gl/maps/gzSvkj7RvSDaEn5a8" },
      { name: "La Tequila", imageUrl: "https://pauyandres.com/img/web-pau_andres-23.png", redirectUrl: "https://goo.gl/maps/VKFqLPqQsrrgB4Nd8" },
      { name: "Il Duomo", imageUrl: "https://pauyandres.com/img/web-pau_andres-25.png", redirectUrl: "https://goo.gl/maps/Hckg3HPfitqRxkKe6" },
    ]
  },
  {
    title: "Comida típica",
    iconUrl: "https://pauyandres.com/img/web-pau_andres-26.png",
    locations:[
      { name: "Tortas Toño", imageUrl: "https://pauyandres.com/img/web-pau_andres-27.jpg", redirectUrl: "https://goo.gl/maps/mFptT3faRGU1jTfL7" },
      { name: "Los Alteños", imageUrl: "https://pauyandres.com/img/web-pau_andres-28.jpg", redirectUrl: "https://goo.gl/maps/otDxCfT3Pw14kQZRA" },
      { name: "Tacos Omar Carlos", imageUrl: "https://pauyandres.com/img/web-pau_andres-29.jpg", redirectUrl: "https://goo.gl/maps/dgkuunjckGh4FFj8A" },
      { name: "Karne Garibaldi", imageUrl: "https://pauyandres.com/img/web-pau_andres-24.png", redirectUrl: "https://goo.gl/maps/Rxsq2uiDE9oATYq58" },
    ]

  },
  {
    title: "Turismo",
    iconUrl: "https://pauyandres.com/img/web-pau_andres-30.png",
    description: "Te dejamos estas recomendaciones de lugares imprescindibles que no te puedes perder a lo largo de tu estadía en Guadalajara.",
    locations: [
      { name: "San Pedro Tlaquepaque", imageUrl: "https://pauyandres.com/img/web-pau_andres-31.jpg", redirectUrl: "" },
      { name: "Tequila Jalisco", imageUrl: "https://pauyandres.com/img/web-pau_andres-32.jpg", redirectUrl: "https://goo.gl/maps/nmjBxzuSFbK4emJR7" },
      { name: "Tapalpa Pueblo Mágico", imageUrl: "https://pauyandres.com/img/web-pau_andres-33.jpg", redirectUrl: "https://goo.gl/maps/xsmaXBiBvvTjwqrT9" },
      { name: "Visitar el Centro de Guadalajara", imageUrl: "https://pauyandres.com/img/web-pau_andres-34.jpg", redirectUrl: "https://goo.gl/maps/uZzSHG85WkotpTWZ7" },
      { name: "Lago de Chapala", imageUrl: "https://pauyandres.com/img/web-pau_andres-35.jpg", redirectUrl: "https://goo.gl/maps/79yFuJnFTF3FL5KUA" },
      { name: "Calaverandia parque temático día de muertos", imageUrl: "https://pauyandres.com/img/web-pau_andres-36.jpg", redirectUrl: "https://goo.gl/maps/tpTU6HJ8nNY9YpZi6" }
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
