
export const SpanishProps = {
    navigationLinks: [
        { label: "BODA", href: "#descriptionSection" },
        { label: "ITINERARIO", href: "#itinerarySection" },
        { label: "DRESS CODE", href: "#dressCodeSection" },
        { label: "MESA DE REGALOS", href: "#wishlistSection" },
        { label: "RSVP", href: "#rsvpSection" },
        { label: "RECOMENDACIONES", href: "#recommendationsSection" },
        { label: "ENGLISH", href: "/en" }
    ],

    descriptionIconUrl: "https://pauyandres.com/img/web-pau_andres-04.png",
    title: "PAULINA & JORGE ANDRÉS",
    date: "28 de Octubre de 2023",
    description: "Uniremos nuestras vidas en matrimonio y queremos compartir con nuestros seres más queridos y con la bendición de Dios y de nuestros padres:",
    wed1Name1: "Roberto Iván Valencia Sevilla",
    wed1Name2: "Martha Amelia Jiménez García-Moreno",
    wed2Name1: "Rodolfo Villa Flores",
    wed2Name2: "Gabriela Delsordo Cornejo",

    events: [
        {
            title: "Ceremonia",
            icon: "https://pauyandres.com/img/web-pau_andres-05.png",
            image:
            "https://pauyandres.com/img/web-pau_andres-45.jpg",
            locationName: "Parroquia San Juan Macías",
            locationAddress:
            "Av. Acueducto #5451 Puerta de Hierro 45116, Zapopan, Jalisco",
            locationUrl: "https://goo.gl/maps/HEUQH9CHhoCngzcq7",
            time: "2:00 PM",
        },
        {
            title: "Recepción",
            icon: "https://pauyandres.com/img/web-pau_andres-06.png",
            image:
            "https://pauyandres.com/img/web-pau_andres-46.jpg",
            locationName: "Lago del Rey",
            locationAddress:
            "Av Ramón Corona #5243, 45201 Guadalajara, Jalisco",
            locationUrl: "https://goo.gl/maps/6euDA6mM2s9PBJZ1A",
            time: "3:30 PM",
        }
    ],

    dressCodeDescription: "RIGUROSO FORMAL",
    dressCodeWomen: "Vestido midi o cocktail",
    dressCodeMen: "Traje y corbata",
    childrenAllowed: false,

    wishlistDescription: "El mejor regalo que nos pueden dar es su presencia pero si quieren obsequiarnos algo, pueden hacerlo de dos maneras:",
    wishlistArray: [
        {
        image: "https://pauyandres.com/img/web-pau_andres-67.png",
        title: "Paulina Valencia y Andrés Villa",
        description: "Échale un ojo a nuestra mesa de regalos",
        url: "https://evento.uniko.co/pauvalencia_andresvilla/",
        },
        {
        image: "https://pauyandres.com/img/web-pau_andres-68.png",
        title: "Paulina Valencia Jiménez",
        description: "Cuenta CLABE:710969000000004835"
        },
    ],

    rsvpQuestions: [
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
    ],

    recommendations: [
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
    }]
};

export const EnglishProps = {
    navigationLinks: [
        { label: "WEDDING", href: "#descriptionSection" },
        { label: "ITINERARY", href: "#itinerarySection" },
        { label: "DRESS CODE", href: "#dressCodeSection" },
        { label: "GIFT TABLE", href: "#wishlistSection" },
        { label: "RSVP", href: "#rsvpSection" },
        { label: "RECOMMENDATIONS", href: "#recommendationsSection" },
        { label: "ESPAÑOL", href: "/es" }
    ],

    descriptionIconUrl: "https://pauyandres.com/img/web-pau_andres-04.png",
    title: "PAULINA & JORGE ANDRES",
    date: "October 28, 2023",
    description: "It is with great joy that we request the honor of your presence together with God's blessing and our parents:",
    wed1Name1: "Roberto Iván Valencia Sevilla",
    wed1Name2: "Martha Amelia Jiménez García-Moreno",
    wed2Name1: "Rodolfo Villa Flores",
    wed2Name2: "Gabriela Delsordo Cornejo",

    events: [
        {
            title: "Ceremony",
            icon: "https://pauyandres.com/img/web-pau_andres-05.png",
            image:
            "https://pauyandres.com/img/web-pau_andres-45.jpg",
            locationName: "Parroquia San Juan Macías",
            locationAddress:
            "Av. Acueducto #5451 Puerta de Hierro 45116, Zapopan, Jalisco",
            locationUrl: "https://goo.gl/maps/HEUQH9CHhoCngzcq7",
            time: "2:00 PM",
        },
        {
            title: "Reception",
            icon: "https://pauyandres.com/img/web-pau_andres-06.png",
            image:
            "https://pauyandres.com/img/web-pau_andres-46.jpg",
            locationName: "Lago del Rey",
            locationAddress:
            "Av Ramón Corona #5243, 45201 Guadalajara, Jalisco",
            locationUrl: "https://goo.gl/maps/6euDA6mM2s9PBJZ1A",
            time: "3:30 PM",
        }
    ],

    dressCodeDescription: "FORMAL",
    dressCodeWomen: "Cocktail dress",
    dressCodeMen: "Suit and tie",
    childrenAllowed: false,

    wishlistDescription: "Celebrating with you is the best gift you can give us. However, if you would like to gift us something, you can do it in either of these two ways:",
    wishlistArray: [
        {
        image: "https://pauyandres.com/img/web-pau_andres-67.png",
        title: "Paulina Valencia y Andrés Villa",
        url: "https://evento.uniko.co/pauvalencia_andresvilla/",
        },
        {
        image: "https://pauyandres.com/img/web-pau_andres-68.png",
        title: "Paulina Valencia Jiménez",
        description: "Bank Account Number:710969000000004835"
        },
    ],

    rsvpQuestions: [
        {
        name: "attending",
        title: "Will you come to our wedding? *",
        type: "yesNoQuestion",
        value: "Yes"
        },
        {
        name: "name",
        placeholder: "Name *",
        type: "text"
        },
        {
        name: "phone",
        placeholder: "Phone number *",
        type: "text"
        },
        {
        name: "guestCount",
        title: "Guests that will be attending *",
        type: "selectCount",
        placeholder: "Your ticket contains the number of guests assigned to you",
        min: 0,
        max: 6
        },
        {
        name: "drinks",
        title: "What would you like to drink?",
        type: "option",
        options: [{ value: "Tequila", isChecked: false }, { value: "Rum", isChecked: false }, { value: "Whiskey", isChecked: false }, { value: "Gin", isChecked: false }]
        }
    ],

    recommendations: [
    {
        title: "Our hotel selection",
        iconUrl: "https://pauyandres.com/img/web-pau_andres-12.png",
        description: "These are some of our favorite hotels in Guadalajara",
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
        title: "Restaurants",
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
        title: "Guadalajara's Local Cuisine",
        iconUrl: "https://pauyandres.com/img/web-pau_andres-26.png",
        locations:[
        { name: "Tortas Toño", imageUrl: "https://pauyandres.com/img/web-pau_andres-27.jpg", redirectUrl: "https://goo.gl/maps/mFptT3faRGU1jTfL7" },
        { name: "Los Alteños", imageUrl: "https://pauyandres.com/img/web-pau_andres-28.jpg", redirectUrl: "https://goo.gl/maps/otDxCfT3Pw14kQZRA" },
        { name: "Tacos Omar Carlos", imageUrl: "https://pauyandres.com/img/web-pau_andres-29.jpg", redirectUrl: "https://goo.gl/maps/dgkuunjckGh4FFj8A" },
        ]

    },
    {
        title: "Sightseeing and Daytrips",
        iconUrl: "https://pauyandres.com/img/web-pau_andres-30.png",
        locations: [
        { name: "San Pedro Tlaquepaque", imageUrl: "https://pauyandres.com/img/web-pau_andres-31.jpg", redirectUrl: "https://goo.gl/maps/NEKzekQoBxtohHn57" },
        { name: "Tequila Town", imageUrl: "https://pauyandres.com/img/web-pau_andres-32.jpg", redirectUrl: "https://goo.gl/maps/nmjBxzuSFbK4emJR7" },
        { name: "Tapalpa Town", imageUrl: "https://pauyandres.com/img/web-pau_andres-33.jpg", redirectUrl: "https://goo.gl/maps/xsmaXBiBvvTjwqrT9" },
        { name: "Guadalajara Downtown", imageUrl: "https://pauyandres.com/img/web-pau_andres-34.jpg", redirectUrl: "https://goo.gl/maps/uZzSHG85WkotpTWZ7" },
        { name: "Chapala Lake", imageUrl: "https://pauyandres.com/img/web-pau_andres-35.jpg", redirectUrl: "https://goo.gl/maps/79yFuJnFTF3FL5KUA" },
        { name: "Calaverandia Theme Park - Día de muertos", imageUrl: "https://pauyandres.com/img/web-pau_andres-36.jpg", redirectUrl: "https://goo.gl/maps/tpTU6HJ8nNY9YpZi6" }
        ]
    }]
};