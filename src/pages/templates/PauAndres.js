import React from "react";
import "../../styles/PauYAndres.css";
import { Header } from "../../components/Header";
import { Countdown } from "../../components/Countdown";
import { Itinerary } from "../../components/Itinerary";
import { DressCode } from "../../components/DressCode";
import { Wishlist } from "../../components/Wishlist";
import { RSVP } from "../../components/RSVP";
import { Recommendations } from "../../components/Recommendations";
import { Description } from "../../components/Description";
import { Anchor } from "../../components/Anchor";

export function PauAndres() {
  const title = "PAULINA & JORGE ANDRÉS";
  const date = "28 de Octubre de 2023";
  const description = "Uniremos nuestras vidas en matrimonio y queremos compartir con nuestros seres más queridos y con la bendición de Dios y de nuestros padres Roberto Iván Valencia Sevilla, Martha Amelia Jiménez García-Moreno, Rodolfo Villa Flores y Gabriela Delsordo Cornejo.";
  const wishlistDescription = "El mejor regalo que nos pueden dar es su presencia pero si quieren obsequiarnos algo, pueden hacerlo de dos maneras:";

  const wishlistArray = [
    {
      image: "https://pauyandres.com/img/web-pau_andres-67.png",
      title: "Paulina Valencia y Andrés Villa",
      description: "Échale un ojo a nuestra mesa de regalos",
      url: "https://mesaderegalos.liverpool.com.mx/milistaderegalos/50481006",
    },
    {
      image: "https://pauyandres.com/img/web-pau_andres-68.png",
      title: "Paulina Valencia Jiménes",
      description:
        "Cuenta CLABE:710969000000004835",
      url: "https://www.amazon.com.mx/wedding/share/danielycristi",
    },
  ];

  const rsvpQuestions = [
    {
      name: "attending",
      title: "¿Asistirás a nuestra boda? *",
      type: "yesNoQuestion",
      value: "Si"
    },
    {
      name: "name",
      placeholder: "Nombre *",
      type: "text"
    },
    {
      name: "phone",
      placeholder: "Teléfono *",
      type: "text"
    },
    {
      name: "guestCount",
      title: "¿Cuántos invitados asistirán en total a la boda? *",
      type: "selectCount",
      placeholder: "Número de invitados señalados en el boleto",
      min: 0,
      max: 6
    },
    {
      name: "drinks",
      title: "¿Qué les gustaría tomar?",
      type: "option",
      options: [{ value: "Tequila", isChecked: false }, { value: "Ron", isChecked: false }, { value: "Whiskey", isChecked: false }, { value: "Gin", isChecked: false }]
    }
  ];

  const recommendations = [
  {
    title: "Hospedaje",
    iconUrl: "https://pauyandres.com/img/web-pau_andres-12.png",
    description: "Te dejamos estas recomendaciones de hoteles que serán de gran ayuda para el día de nuestro evento y tu estadía en Guadalajara.",
    locations: [
      { name: "Hyatt Regency Andares", imageUrl: "https://pauyandres.com/img/web-pau_andres-18.jpg", redirectUrl: "https://goo.gl/maps/NTQnipbDMs4BFuui9" },
      { name: "Hotel Demetria", imageUrl: "https://pauyandres.com/img/web-pau_andres-17.jpg", redirectUrl: "https://goo.gl/maps/7hSpmUHjLtH1id4e7" },
      { name: "Wydham Garden Guadalajara Acueducto", imageUrl: "https://pauyandres.com/img/web-pau_andres-16.jpg", redirectUrl: "https://goo.gl/maps/BUTgZJkC5D9PGFKV8" },
      { name: "Quinta Real", imageUrl: "https://pauyandres.com/img/web-pau_andres-15.jpg", redirectUrl: "https://goo.gl/maps/oMSpjqWhYT7v7DRF9" },
      { name: "Fiesta Americana", imageUrl: "https://pauyandres.com/img/web-pau_andres-14.jpg", redirectUrl: "https://goo.gl/maps/nHFDTx2nUfGJHVDJ7" },
      { name: "Holiday Inn Express Vallarta Poniente", imageUrl: "https://pauyandres.com/img/web-pau_andres-13.jpg", redirectUrl: "https://goo.gl/maps/FgV5a6byZSckUJjX9" }
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
      { name: "Karne Garibaldi", imageUrl: "https://pauyandres.com/img/web-pau_andres-24.png", redirectUrl: "https://goo.gl/maps/Rxsq2uiDE9oATYq58" },
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
    ]

  },
  {
    title: "Turismo",
    iconUrl: "https://pauyandres.com/img/web-pau_andres-30.png",
    description: "Te dejamos estas recomendaciones de lugares imprescindibles que no te puedes perder a lo largo de tu estadía en Guadalajara.",
    locations: [
      { name: "San Pedro Tlaquepaque", imageUrl: "https://pauyandres.com/img/web-pau_andres-31.jpg", redirectUrl: "https://goo.gl/maps/NEKzekQoBxtohHn57" },
      { name: "Tequila Jalisco", imageUrl: "https://pauyandres.com/img/web-pau_andres-32.jpg", redirectUrl: "https://goo.gl/maps/nmjBxzuSFbK4emJR7" },
      { name: "Tapalpa Pueblo Mágico", imageUrl: "https://pauyandres.com/img/web-pau_andres-33.jpg", redirectUrl: "https://goo.gl/maps/xsmaXBiBvvTjwqrT9" },
      { name: "Visitar el Centro de Guadalajara", imageUrl: "https://pauyandres.com/img/web-pau_andres-34.jpg", redirectUrl: "https://goo.gl/maps/uZzSHG85WkotpTWZ7" },
      { name: "Lago de Chapala", imageUrl: "https://pauyandres.com/img/web-pau_andres-35.jpg", redirectUrl: "https://goo.gl/maps/79yFuJnFTF3FL5KUA" },
      { name: "Calaverandia parque temático día de muertos", imageUrl: "https://pauyandres.com/img/web-pau_andres-36.jpg", redirectUrl: "https://goo.gl/maps/tpTU6HJ8nNY9YpZi6" }
    ]
  }];

  return (
    <div id="template">
      <Header />
      <Anchor name="descriptionSection"/>
      <Description title={title} date={date} description={description}/>
      <Countdown />
      <Anchor name="itinerarySection"/>
      <Itinerary />
      <Anchor name="dressCodeSection"/>
      <DressCode />
      <Anchor name="wishlistSection"/>
      <Wishlist description={wishlistDescription} wishlistArray={wishlistArray}/>
      <Anchor name="rsvpSection"/>
      <RSVP rsvpQuestions={rsvpQuestions}/>
      <h2 className="text-center mb-4" id="recommendations">RECOMENDACIONES</h2>
      <Anchor name="recommendationsSection"/>
      <Recommendations recommendationsObject={recommendations[0]} containerClassName="gray-background"/>
      <Recommendations recommendationsObject={recommendations[1]}/>
      <Recommendations recommendationsObject={recommendations[2]} containerClassName="gray-background"/>
      <Recommendations recommendationsObject={recommendations[3]}/>
      <div className="row w-100">
        <img className="img" src="https://pauyandres.com/img/web-pau_andres-40.png" aria-label="Pau y Andrés"/>
      </div>
      <div className="row w-100 my-4 text-center">
        <p style={{ margin: "auto" }}> Pau & Andrés Made by <a type="link" href="https://www.instagram.com/puntodoce.mx/" target="_blank" rel="noreferrer"><img className="punto-12-img" src="https://pauyandres.com/img/web-pau_andres-41.png" alt="PuntoDoce.mx" aria-label="PuntoDoce.mx"/></a></p>
      </div>
    </div>
  );
}
